import React from "react";
// @ts-ignore
import TextStyles from "./Text.module.css";

export interface Props {
  className?: string;
  children: any;
  style?: React.CSSProperties;
  type?:
    | "default"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "border-b"
    | "subheader";
  disabled?: boolean;
  mark?: boolean;
  code?: boolean;
  keyboard?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  strong?: boolean;
  small?: boolean;
}

function Text({
  className,
  children,
  style,
  type,
  disabled,
  mark,
  code,
  keyboard,
  underline,
  strikethrough,
  strong,
  small,
}: Props) {
  let classes = [TextStyles["mgui-typography-text"]];
  if (className) {
    classes.push(className);
  }

  if (type) {
    classes.push(TextStyles[`mgui-typography-text-${type}`]);
  }

  if (disabled) {
    classes.push(TextStyles[`mgui-typography-text-disabled`]);
  }

  if (underline) {
    classes.push(TextStyles[`mgui-typography-text-underline`]);
  }

  if (strikethrough) {
    classes.push(TextStyles[`mgui-typography-text-strikethrough`]);
  }

  if (small) {
    classes.push(TextStyles["mgui-typography-text-small"]);
  }

  if (code)
    return (
      <code style={style} className={classes.join(" ")}>
        {children}
      </code>
    );
  if (mark)
    return (
      <mark style={style} className={classes.join(" ")}>
        {children}
      </mark>
    );
  if (keyboard)
    return (
      <kbd style={style} className={classes.join(" ")}>
        {children}
      </kbd>
    );
  if (strong)
    return (
      <strong style={style} className={classes.join(" ")}>
        {children}
      </strong>
    );
  return (
    <span style={style} className={classes.join(" ")}>
      {children}
    </span>
  );
}

export default Text;
