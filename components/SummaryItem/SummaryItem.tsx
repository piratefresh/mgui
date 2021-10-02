import SummaryItemStyles from "./SummaryItem.module.css";
import Image from "next/image";
import Typography from "@components/Typography";

export interface ISummaryItemProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  borderBottom?: boolean;
  borderRight?: boolean;
}

export default function SummaryItem({
  className,
  style,
  borderBottom = false,
  borderRight = true,
  children,
}: ISummaryItemProps) {
  let classes = borderRight
    ? [SummaryItemStyles["mgui-summaryitem-container"]]
    : [SummaryItemStyles["mgui-summaryitem-container-no-border-right"]];
  if (className) {
    classes.push(className);
  }
  if (borderBottom) {
    classes.push("border-b");
  }
  return <article className={classes.join(" ")}>{children}</article>;
}
