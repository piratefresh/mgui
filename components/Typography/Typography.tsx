import Title from "./Title";
import Text from "./Text";
import TypographyStyles from "./Typography.module.css";
import Link from "./Link";
import Price from "./Price";

export interface ITypographyProps {
  children?: React.ReactNode;
  className?: string;
  htmlTag?: string;
  style?: React.CSSProperties;
}

function Typography({
  children,
  className,
  htmlTag = "div",
  style,
}: ITypographyProps) {
  let classes = [TypographyStyles["mgui-typography"]];
  let CustomTag: any = `${htmlTag}`;
  if (className) classes.push(className);
  return (
    <CustomTag style={style} className={classes.join(" ")}>
      {children}
    </CustomTag>
  );
}

Typography.Title = Title;
Typography.Text = Text;
Typography.Link = Link;
Typography.Price = Price;

export default Typography;
