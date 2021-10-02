import Button from "@components/Button";
import React from "react";
import InputStyles from "./Input.module.css";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import InputIconContainer from "./InputIconContainer";
import Typography, { Text } from "@components/Typography";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  copy?: boolean;
  defaultValue?: string | number;
  descriptionText?: string;
  disabled?: boolean;
  error?: string;
  icon?: any;
  inputRef?: string;
  label?: string;
  afterLabel?: string;
  beforeLabel?: string;
  labelOptional?: string;
  layout?: "horizontal" | "vertical";
  name?: string;
  reveal?: boolean;
  actions?: React.ReactNode;
  size?: "tiny" | "small" | "medium" | "large" | "xlarge";
  borderless?: boolean;
}

function Input({
  autoComplete,
  autoFocus,
  className,
  copy,
  defaultValue,
  descriptionText,
  disabled,
  error,
  icon,
  id,
  inputRef,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  layout,
  name,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  placeholder,
  type,
  value,
  style,
  reveal = false,
  actions,
  size = "medium",
  borderless = false,
  ...props
}: InputProps) {
  const [copyLabel, setCopyLabel] = React.useState("Copy");
  const [hidden, setHidden] = React.useState(reveal);

  // if `type` is not assigned, default to text input
  if (!type) {
    type = "text";
  }

  let inputClasses = [InputStyles["mgui-input"]];

  if (error) inputClasses.push(InputStyles["mgui-input--error"]);
  if (icon) inputClasses.push(InputStyles["mgui-input--with-icon"]);
  if (size) inputClasses.push(InputStyles[`mgui-input--${size}`]);
  if (borderless) inputClasses.push(InputStyles["mgui-input--borderless"]);

  function onCopy(value: any) {
    navigator.clipboard.writeText(value).then(
      function () {
        /* clipboard successfully set */
        setCopyLabel("Copied");
        setTimeout(function () {
          setCopyLabel("Copy");
        }, 3000);
      },
      function () {
        /* clipboard write failed */
        setCopyLabel("Failed to copy");
      }
    );
  }

  function onReveal() {
    setHidden(false);
  }

  const hiddenPlaceholder = "**** **** **** ****";
  return (
    <div className={InputStyles["mgui-input-container"]}>
      <input
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange ? (event) => onChange(event) : undefined}
        onFocus={onFocus ? (event) => onFocus(event) : undefined}
        onBlur={onBlur ? (event) => onBlur(event) : undefined}
        onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
        placeholder={placeholder}
        ref={inputRef}
        type={type}
        value={hidden ? hiddenPlaceholder : value}
        className={inputClasses.join(" ")}
        {...props}
      />
      {icon && <InputIconContainer icon={icon} />}
      {copy || error || actions ? (
        <div className={InputStyles["mgui-input-actions-container"]}>
          {error && <ExclamationCircleIcon className="w-5 h-5" />}
          {copy && !hidden ? (
            <Button size="tiny" type="default" onClick={() => onCopy(value)}>
              {copyLabel}
            </Button>
          ) : null}
          {hidden && reveal ? (
            <Button size="tiny" type="default" onClick={onReveal}>
              Reveal
            </Button>
          ) : null}
          {actions && actions}
        </div>
      ) : null}
      {error ? (
        <div className={InputStyles["mgui-input-error-text"]}>{error}</div>
      ) : null}
    </div>
  );
}

export interface TextAreaProps {
  className?: string;
  autoComplete?: boolean;
  autofocus?: boolean;
  descriptionText?: string;
  disabled?: boolean;
  error?: string;
  icon?: any;
  id?: string;
  label?: string;
  afterLabel?: string;
  beforeLabel?: string;
  labelOptional?: string;
  layout?: "horizontal" | "vertical";
  name?: string;
  onChange?(x: React.ChangeEvent<HTMLTextAreaElement>): void;
  onFocus?(x: React.FocusEvent<HTMLTextAreaElement>): void;
  onBlur?(x: React.FocusEvent<HTMLTextAreaElement>): void;
  onKeyDown?(x: React.KeyboardEvent<HTMLTextAreaElement>): void;
  placeholder?: string;
  value?: any;
  style?: React.CSSProperties;
  rows?: number;
  limit?: number;
  size?: "tiny" | "small" | "medium" | "large" | "xlarge";
  borderless?: boolean;
}

function TextArea({
  autoComplete,
  autofocus,
  className,
  descriptionText,
  disabled,
  error,
  icon,
  id,
  label,
  afterLabel,
  beforeLabel,
  labelOptional,
  layout,
  name,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  placeholder,
  value,
  style,
  rows = 4,
  limit,
  size,
  borderless = false,
}: TextAreaProps) {
  const [charLength, setCharLength] = React.useState(0);

  let classes = [InputStyles["mgui-input"]];
  if (error) classes.push(InputStyles["mgui-input--error"]);
  if (icon) classes.push(InputStyles["mgui-input--with-icon"]);
  if (size) classes.push(InputStyles[`mgui-input--${size}`]);
  if (borderless) classes.push(InputStyles["mgui-input--borderless"]);

  function onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCharLength(e.target.value.length);
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <div>
      <textarea
        autoComplete={autoComplete ? "on" : "off"}
        autoFocus={autofocus}
        disabled={disabled}
        id={id}
        name={name}
        rows={rows}
        cols={100}
        placeholder={placeholder}
        onChange={onInputChange}
        onFocus={onFocus ? (event) => onFocus(event) : undefined}
        onBlur={onBlur ? (event) => onBlur(event) : undefined}
        onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
        value={value}
        className={classes.join(" ")}
        maxLength={limit}
      >
        {value}
      </textarea>
      {limit && (
        <Typography.Text
          type="secondary"
          style={{ marginTop: "0.5rem", display: "block" }}
        >
          {charLength}/{limit}
        </Typography.Text>
      )}
    </div>
  );
}

Input.TextArea = TextArea;

export default Input;
