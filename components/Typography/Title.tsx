import React from "react";
import TitleStyles from "./Title.module.css";

export interface ITitleProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  level?: 1 | 2 | 3 | 4 | 5;
}

function Title({ children, className, level = 1, style }: ITitleProps) {
  let classes = [TitleStyles["mgui-typography-title"]];
  if (className) {
    classes.push(className);
  }
  const CustomTag: any = `h${level}`;
  return (
    <CustomTag style={style} className={classes.join(" ")}>
      {children}
    </CustomTag>
  );
}

export default Title;
