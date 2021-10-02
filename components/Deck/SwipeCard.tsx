import React from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";

export interface IDeckCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onVote: any;
  id?: string | number;
  drag: boolean;
}

const SwipeCard = ({
  children,
  style,
  onVote,
  id,
  ...props
}: IDeckCardProps) => {
  // motion stuff
  const cardElem = React.useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const controls = useAnimation();

  const [constrained, setConstrained] = React.useState(true);
  const [direction, setDirection] = React.useState<
    0 | "left" | "right" | undefined
  >();
  const [velocity, setVelocity] = React.useState<number | undefined>();

  const getVote = (childNode: HTMLDivElement, parentNode: HTMLElement) => {
    const childRect = childNode.getBoundingClientRect();
    const parentRect = parentNode.getBoundingClientRect();
    let result =
      parentRect.left >= childRect.right
        ? false
        : parentRect.right <= childRect.left
        ? true
        : undefined;
    return result;
  };

  // determine direction of swipe based on velocity
  const getDirection = () => {
    return (
      velocity &&
      (velocity >= 1 ? "right" : velocity <= -1 ? "left" : undefined)
    );
  };

  const getTrajectory = () => {
    setVelocity(x.getVelocity());
    setDirection(getDirection());
  };

  const flyAway = (min: number) => {
    const flyAwayDistance = (direction: "left" | "right") => {
      const parentWidth: number | undefined =
        cardElem.current?.getBoundingClientRect().width;
      // cardElem.current.parentNode.getBoundingClientRect().width;
      const childWidth: number | undefined =
        cardElem.current?.getBoundingClientRect().width;
      if (parentWidth && childWidth) {
        return direction === "left"
          ? -parentWidth / 2 - childWidth / 2
          : parentWidth / 2 + childWidth / 2;
      }
    };

    if (direction && velocity && Math.abs(velocity) > min) {
      setConstrained(false);
      controls.start({
        x: flyAwayDistance(direction),
      });
    }
  };

  React.useEffect(() => {
    const unsubscribeX = x.onChange(() => {
      let result;
      const childNode = cardElem.current;
      const parentNode = cardElem.current?.parentElement;
      if (childNode && parentNode) {
        result = getVote(childNode, parentNode);
        result !== undefined && onVote(result);
      }
    });

    return () => unsubscribeX();
  });

  return (
    <motion.div
      className="absolute"
      animate={controls}
      dragConstraints={constrained && { left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      ref={cardElem}
      style={{ x }}
      onDrag={getTrajectory}
      onDragEnd={() => flyAway(500)}
      whileTap={{ scale: 1.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SwipeCard;
