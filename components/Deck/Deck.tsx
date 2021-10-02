import { motion } from "framer-motion";
import React from "react";
import DeckStyles from "./Deck.module.css";
import SwipeCard from "./SwipeCard";

export interface IDeckProps {
  onVote: any;
  children: React.ReactNode;
}

const Deck = ({ onVote, children, ...props }: IDeckProps) => {
  const [stack, setStack] = React.useState(React.Children.toArray(children));

  // return new array with last item removed
  const pop = (array: any[]) => {
    return array.filter((_, index) => {
      return index < array.length - 1;
    });
  };

  const handleVote = (item: React.ReactChild, vote: boolean) => {
    // update the stack
    let newStack = pop(stack);
    setStack(newStack);

    // run function from onVote prop, passing the current item and value of vote
    onVote(item, vote);
  };

  return (
    <>
      <div className={DeckStyles["mgui-deck-container"]} {...props}>
        {stack.map((item, index) => {
          let isTop = index === stack.length - 1;
          return (
            <SwipeCard
              drag={isTop} // Only top card is draggable
              key={item.key || index}
              onVote={(result: boolean) =>
                handleVote(item as React.ReactChild, result)
              }
            >
              {item}
            </SwipeCard>
          );
        })}
      </div>
    </>
  );
};

interface IDeckItemProps {
  children: React.ReactNode;
  value: string;
  whileTap: number;
}

export function DeckItem({ children, value, whileTap }: IDeckItemProps) {
  return (
    <motion.div
      className={DeckStyles["mgui-deck-item"]}
      data-value={value}
      whileTap={{ scale: whileTap }}
    >
      {children}
    </motion.div>
  );
}

export default Deck;
