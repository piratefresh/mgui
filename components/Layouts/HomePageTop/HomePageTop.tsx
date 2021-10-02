import Card from "@components/Card";
import CardContent from "@components/CardContent";
import CardMedia from "@components/CardMedia";
import SummaryItemTitle from "@components/SummaryItem/SummaryItemTitle";
import Typography from "@components/Typography";
import React from "react";
import HomePageTopStyles from "./HomePageTop.module.css";
import SummaryItem from "@components/SummaryItem";
import SummaryItemText from "@components/SummaryItem/SummaryItemText";
import SummaryItemPicture from "@components/SummaryItem/SummaryItemPicture";
import SummaryItemStyles from "@components/SummaryItem/SummaryItem.module.css";

export interface IHomePageTopProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const HomePageTop = ({ className, style, children }: IHomePageTopProps) => {
  let classes = [HomePageTopStyles["mgui-homepagetop-grid"]];
  if (className) {
    classes.push(className);
  }
  return <div className={classes.join("")}>{children}</div>;
};

export interface IHomePageTopChildProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function Lead({ className, style, children }: IHomePageTopChildProps) {
  let classes = [HomePageTopStyles["mgui-homepagetop-lead"]];
  if (className) {
    classes.push(className);
  }
  return (
    <div className={classes.join(" ")} style={style}>
      {children}
    </div>
  );
}
export function LeftSide({
  className,
  style,
  children,
}: IHomePageTopChildProps) {
  let classes = [HomePageTopStyles["mgui-homepagetop-left-inner"]];
  if (className) {
    classes.push(className);
  }
  return (
    <div className={classes.join(" ")} style={style}>
      {children}
    </div>
  );
}
export function RightSide({
  className,
  style,
  children,
}: IHomePageTopChildProps) {
  let classes = [HomePageTopStyles["mgui-homepagetop-right-inner"]];
  if (className) {
    classes.push(className);
  }
  return (
    <div className={classes.join(" ")} style={style}>
      {children}
    </div>
  );
}

HomePageTop.LeftSide = LeftSide;
HomePageTop.Lead = Lead;
HomePageTop.RightSide = RightSide;

export default HomePageTop;
