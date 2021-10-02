import React from "react";
import ButtonStyles from "./Button.module.css";

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  // if true button take up the full parent width
  block?: boolean;
  // if true disable button
  disabled?: boolean;
  // if true buttin will be in loaded state
  // if true button takes danger/error style
  danger?: boolean;
  isLoading?: boolean;
  // user can add their own custom css classes
  className?: string;
  // Size of the button
  size?: "tiny" | "small" | "medium" | "large" | "xlarge";
  // Button color scheme
  color?: string;
  // Inner element
  children: React.ReactNode;
  // left icon
  leftIcon?: React.ReactElement;
  // IF added, will show the icon on right side of button
  rightIcon?: React.ReactElement;
  //The type of the button
  type?:
    | "primary"
    | "default"
    | "secondary"
    | "outline"
    | "dashed"
    | "link"
    | "text";
  buttonType?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      block = false,
      danger = false,
      disabled,
      size = "tiny",
      color,
      children,
      type = "default",
      isLoading,
      className,
      buttonType = "button",
      style,
      ...props
    }: IButtonProps,
    ref
  ) => {
    let classes = [ButtonStyles["mgui-btn"]];
    console.log("type:: ", type);
    classes.push(ButtonStyles[`mgui-btn-${type}`]);

    if (size) {
      classes.push(ButtonStyles[`mgui-btn--${size}`]);
    }

    if (block) {
      classes.push(ButtonStyles["mgui-btn--w-full"]);
    }

    if (danger) {
      classes.push(ButtonStyles["mgui-btn--danger"]);
    }

    if (className) {
      classes.push(className);
    }

    console.log("classes: ", classes);
    return (
      <button
        disabled={isLoading || (disabled && true)}
        className={classes.join(" ")}
        ref={ref}
        style={style}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
