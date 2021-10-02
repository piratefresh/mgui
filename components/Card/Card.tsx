import CardHeader from "@components/CardHeader";
import CardStyles from "./Card.module.css";

export interface ICardProps {
  align?: "row" | "column";
  children: React.ReactNode;
  className?: string;
  cover?: React.ReactElement;
  description?: string;
  title?: string;
  subheader?: string;
  style?: React.CSSProperties;
}

const Card = ({
  align = "column",
  children,
  className,
  cover,
  description,
  title,
  subheader,
  style,
}: ICardProps) => {
  let classes = [CardStyles["mgui-card"]];
  if (className) classes.push(className);
  if (align === "row") classes.push("flex-row", CardStyles["mgui-card-row"]);
  if (align === "column") classes.push("flex-col");

  return (
    <div className={classes.join(" ")} style={style}>
      {children}
    </div>
  );
};

export default Card;
