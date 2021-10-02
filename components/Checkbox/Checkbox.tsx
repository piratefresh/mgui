import React from "react";
import CheckboxStyles from "./Checkbox.module.css";

export interface CheckboxProps extends React.ComponentPropsWithoutRef<"input"> {
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

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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
    let checkboxClasses = [CheckboxStyles["mgui-checkbox"]];
    if (className) checkboxClasses.push(className);
    return (
      <label className="flex flex-row">
        <input
          className={checkboxClasses.join(" ")}
          name="aligned"
          placeholder={placeholder}
          ref={ref}
          data-testid="input"
          type="checkbox"
          {...props}
        />
        <div className={CheckboxStyles["mgui-checkbox__label-container"]}>
          <div
            className={CheckboxStyles["mgui-checkbox__label-container__label"]}
          >
            <span
              className={
                CheckboxStyles["mgui-checkbox__label-container__label__span"]
              }
            >
              {label}
            </span>

            {description && (
              <p
                className={
                  CheckboxStyles["mgui-checkbox__label-container__label__p"]
                }
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </label>
    );
  }
);

export default Checkbox;
