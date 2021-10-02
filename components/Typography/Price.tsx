import React from "react";
// @ts-ignore
import PriceStyles from "./Price.module.css";

export interface Props {
  className?: string;
  children: any;
  style?: React.CSSProperties;
  type?: "default" | "discount" | "sale";
  strikethrough?: boolean;
}

function Price({ className, children, style, type, strikethrough }: Props) {
  let classes = [PriceStyles["mgui-typography-price"]];
  if (className) {
    classes.push(className);
  }

  if (type) {
    classes.push(PriceStyles[`mgui-typography-price-${type}`]);
  }

  if (strikethrough) {
    classes.push(PriceStyles[`mgui-typography-price-strikethrough`]);
  }
  return (
    <span style={style} className={classes.join(" ")}>
      {children}
    </span>
  );
}

export default Price;
