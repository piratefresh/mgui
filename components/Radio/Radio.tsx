import React from "react";
import RadioStyles from "./Radio.module.css";

export interface RadioProps extends React.ComponentPropsWithoutRef<"input"> {
  rows?: number;
  error?: string;
  transparent?: boolean;
  description?: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  id?: string;
  name?: string;
  checked?: boolean;
  value?: string;
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(x: React.FocusEvent<HTMLInputElement>): void;
  onBlur?(x: React.FocusEvent<HTMLInputElement>): void;
  style?: React.CSSProperties;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className = "",
      error,
      transparent,
      label,
      icon,
      description,
      placeholder,
      ...props
    },
    ref
  ) => {
    let classes = [
      RadioStyles["mgui-radio-container"],
      RadioStyles["mgui-radio-label"],
    ];
    if (className) classes.push(className);
    return (
      <label className={classes.join(" ")}>
        <input
          className={RadioStyles["mgui-radio"]}
          name="aligned"
          placeholder={placeholder}
          ref={ref}
          data-testid="input"
          type="radio"
          {...props}
        />

        <div>
          <span className={RadioStyles["mgui-radio-label-text"]}>{label}</span>

          {description && (
            <p className={RadioStyles["mgui-radio-label-description"]}>
              {description}
            </p>
          )}
        </div>
      </label>
    );
  }
);

export default Radio;
