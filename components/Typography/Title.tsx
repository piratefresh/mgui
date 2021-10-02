import React from "react";
import TitleStyles from "./Title.module.css";

export interface ITitleProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  level?: 1 | 2 | 3 | 4 | 5;
  type?: "default" | "underlined";
}

function Title({ children, className, level = 1, style, type }: ITitleProps) {
  let classes = [TitleStyles["mgui-typography-title"]];
  if (className) {
    classes.push(className);
  }

  if (type) {
    classes.push(TitleStyles[`mgui-typography-title-${type}`]);
  }
  const CustomTag: any = `h${level}`;
  return (
    <CustomTag style={style} className={classes.join(" ")}>
      {children}
    </CustomTag>
  );
}

export default Title;
