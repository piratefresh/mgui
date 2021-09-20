import TypographyStyles from "./Typography.module.css";

export interface ITypographyProps {
  children?: React.ReactNode;
  className?: string;
  htmlTag?: string;
  style?: React.CSSProperties;
}

export default function Typography({
  children,
  className,
  htmlTag,
  style,
}: ITypographyProps) {
  let classes = [TypographyStyles["sbui-typography"]];
  let CustomTag: any = `${htmlTag}`;
  return (
    <CustomTag style={style} className={classes.join(" ")}>
      {children}
    </CustomTag>
  );
}
