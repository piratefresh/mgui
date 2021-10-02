import Typography from "@components/Typography";
import SummaryItemStyles from "./SummaryItem.module.css";

export interface ISummaryItemTextProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function SummaryItemText({
  className,
  style,
  children,
}: ISummaryItemTextProps) {
  let classes = [SummaryItemStyles["mgui-summary-text"]];
  if (className) {
    classes.unshift(className);
  }
  return (
    <Typography.Text className={classes.join(" ")}>{children}</Typography.Text>
  );
}
