import Button from "@components/Button";
import CardMedia from "@components/CardMedia";
import Typography from "@components/Typography";
import Image from "next/image";
import React from "react";
import ShowcaseItemStyles from "./ShowcaseItem.module.css";

export interface IShowcaseItemProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function ShowcaseItem({ className, style }: IShowcaseItemProps) {
  const [showOverlay, setShowOverlay] = React.useState<boolean>(false);
  const handleMouseEnter = () => {
    setShowOverlay(true);
  };
  const handleMouseLeave = () => {
    setShowOverlay(false);
  };
  let classes = [
    ShowcaseItemStyles["mgui-showcase-container"],
    "keen-slider__slide",
  ];
  if (className) classes.push(className);
  return (
    <div className={classes.join(" ")} style={style}>
      <div
        className="relative"
        style={{ height: "300px", width: "100%" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showOverlay && (
          <div className="absolute inset-0 z-10 bg-white bg-opacity-80 flex flex-col items-center justify-center text-center">
            <Typography.Text className="font-semibold" underline>
              Infiniti Grande Curve Back Sofa
            </Typography.Text>
            <Button className="uppercase mt-4" type="primary">
              Add to cart
            </Button>
          </div>
        )}

        <Image
          src="https://res.cloudinary.com/film-it/image/upload/v1633062481/infiniti-grande-curve-back-sofa.jpg"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
