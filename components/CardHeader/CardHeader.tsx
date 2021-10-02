import { Typography, Title, Text } from "@components/Typography";
import React from "react";
import CardHeaderStyles from "./CardHeader.module.css";

export interface ICardHeader {
  avatar?: React.ReactElement;
  action?: React.ReactElement;
  className?: string;
  title?: string;
  subheader?: string;
  style?: React.CSSProperties;
}

const CardHeader = ({
  avatar,
  action,
  style,
  className,
  title: titleProp,
  subheader: subheaderProp,
}: ICardHeader) => {
  console.log("cardheader: ", CardHeaderStyles);
  let classes = [CardHeaderStyles["mgui-card-head"]];
  if (className) classes.push(className);
  let title = titleProp;
  if (title != null) {
    <Typography.Title level={4}>{title}</Typography.Title>;
  }

  let subheader = subheaderProp;
  if (subheader != null) {
    <Typography.Text>{subheader}</Typography.Text>;
  }
  console.log("classes: ", classes);
  return (
    <div className={classes.join(" ")} style={style}>
      {subheader}
      {title}
    </div>
  );
};

export default CardHeader;
