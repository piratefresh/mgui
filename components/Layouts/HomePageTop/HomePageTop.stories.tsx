import Card from "@components/Card";
import CardContent from "@components/CardContent";
import CardMedia from "@components/CardMedia";
import SummaryItem from "@components/SummaryItem";
import SummaryItemPicture from "@components/SummaryItem/SummaryItemPicture";
import SummaryItemText from "@components/SummaryItem/SummaryItemText";
import SummaryItemTitle from "@components/SummaryItem/SummaryItemTitle";
import SummaryItemStyles from "@components/SummaryItem/SummaryItem.module.css";
import Typography from "@components/Typography";
import React from "react";
import HomePageTop from ".";
import { IHomePageTopProps } from "./HomePageTop";

export default {
  title: "Layouts/Home Page Top",
  component: HomePageTop,
};

export const Default = (args: IHomePageTopProps) => (
  <div className="max-w-7xl">
    <HomePageTop {...args}>
      <HomePageTop.LeftSide>
        <div className="grid grid-cols-1 gap-10">
          <Card>
            <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1632166012/james-gandolfini-not-fade-away-580.jpg.webp" />
            <Typography.Text className="text-red-800 uppercase">
              Prehistory Dept.
            </Typography.Text>
            <Typography.Title level={3}>
              Alessandro Nivola’s “Sopranos” Time Travel
            </Typography.Title>

            <CardContent>
              The actor visits the old stomping ground of the mafioso Richie
              (the Boot) Boiardo.
              <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
            </CardContent>
          </Card>
          <Card>
            <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1632166012/james-gandolfini-not-fade-away-580.jpg.webp" />
            <Typography.Text className="text-red-800 uppercase">
              Prehistory Dept.
            </Typography.Text>
            <Typography.Title level={3}>
              Alessandro Nivola’s “Sopranos” Time Travel
            </Typography.Title>

            <CardContent>
              The actor visits the old stomping ground of the mafioso Richie
              (the Boot) Boiardo.
              <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
            </CardContent>
          </Card>
        </div>
      </HomePageTop.LeftSide>
      <HomePageTop.Lead>
        <div className="grid grid-cols-1 gap-10">
          <Card>
            <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1633120463/original.webp" />
            <Typography.Title className="mt-3" level={2}>
              The Conservatives Dreading—And Preparing for—Civil War
            </Typography.Title>

            <CardContent className="">
              A faction of the right believes America has been riven into two
              countries. The Claremont Institute is building the intellectual
              architecture for whatever comes next.
              <div className="text-sm font-semibold my-6">Emma Green</div>
            </CardContent>
          </Card>
          <SummaryItem
            className="mb-10 border-t"
            borderRight={false}
            borderBottom
          >
            <div className={SummaryItemStyles["mgui-summary-item-grid"]}>
              <div className="flex flex-col">
                <SummaryItemTitle
                  title="Damian Lewis Discusses the Future of ‘Billions’"
                  subTitle="Television"
                />
                <SummaryItemText className="p-0 leading-7">
                  In an interview, the actor talked about his character’s big
                  twist and what it means for the Showtime series and his
                  career.
                </SummaryItemText>
              </div>
              <SummaryItemPicture
                className="w-20 h-14 self-center ml-auto"
                imageUrl={`https://res.cloudinary.com/film-it/image/upload/v1632983797/211004_r39115web.webp`}
              />
              <Typography.Text className="font-semibold mt-3">
                By Alexandra Schwartz
              </Typography.Text>
            </div>
          </SummaryItem>
        </div>
      </HomePageTop.Lead>
      <HomePageTop.RightSide>
        <div className="grid grid-cols-1 gap-10">
          <SummaryItem className="mb-10" borderRight={false} borderBottom>
            <div className={SummaryItemStyles["mgui-summary-item-grid"]}>
              <div className="flex flex-col">
                <SummaryItemTitle title="" subTitle="Books" />
                <SummaryItemText className="p-0 leading-7">
                  Shaping the Sexual Desires that Shape Us
                </SummaryItemText>
              </div>
              <SummaryItemPicture
                className="w-20 h-14 self-center ml-auto"
                imageUrl={`https://res.cloudinary.com/film-it/image/upload/v1632983797/211004_r39115web.webp`}
              />
              <Typography.Text className="font-semibold mt-3">
                By Alexandra Schwartz
              </Typography.Text>
            </div>
          </SummaryItem>
          <SummaryItem className="mb-10" borderRight={false} borderBottom>
            <div className={SummaryItemStyles["mgui-summary-item-grid"]}>
              <div className="flex flex-col">
                <SummaryItemTitle title="" subTitle="Infinite Scroll" />
                <SummaryItemText className="p-0 leading-7">
                  Corporate America Is Failing Its Most Important Climate Test
                  Yet
                </SummaryItemText>
              </div>
              <SummaryItemPicture
                className="w-20 h-20 self-center ml-auto"
                imageUrl={`https://res.cloudinary.com/film-it/image/upload/v1632983838/chayka_americancore.webp`}
              />
            </div>
            <Typography.Text className="font-semibold mt-3">
              By Alexandra Schwartz
            </Typography.Text>
          </SummaryItem>
          <SummaryItem className="mb-10" borderRight={false} borderBottom>
            <div className={SummaryItemStyles["mgui-summary-item-grid"]}>
              <div className="flex flex-col">
                <SummaryItemTitle title="" subTitle="Books" />
                <SummaryItemText className="p-0 leading-7">
                  Shaping the Sexual Desires that Shape Us
                </SummaryItemText>
              </div>
              <SummaryItemPicture
                className="w-20 h-14 self-center ml-auto"
                imageUrl={`https://res.cloudinary.com/film-it/image/upload/v1632983797/211004_r39115web.webp`}
              />
              <Typography.Text className="font-semibold mt-3">
                By Alexandra Schwartz
              </Typography.Text>
            </div>
          </SummaryItem>
          <SummaryItem className="mb-10" borderRight={false} borderBottom>
            <div className={SummaryItemStyles["mgui-summary-item-grid"]}>
              <div className="flex flex-col">
                <SummaryItemTitle title="" subTitle="Infinite Scroll" />
                <SummaryItemText className="p-0 leading-7">
                  Corporate America Is Failing Its Most Important Climate Test
                  Yet
                </SummaryItemText>
              </div>
              <SummaryItemPicture
                className="w-20 h-20 self-center ml-auto"
                imageUrl={`https://res.cloudinary.com/film-it/image/upload/v1632983838/chayka_americancore.webp`}
              />
            </div>
            <Typography.Text className="font-semibold mt-3">
              By Alexandra Schwartz
            </Typography.Text>
          </SummaryItem>
          <SummaryItem className="mb-10" borderRight={false} borderBottom>
            <div className={SummaryItemStyles["mgui-summary-item-grid"]}>
              <div className="flex flex-col">
                <SummaryItemTitle title="" subTitle="Infinite Scroll" />
                <SummaryItemText className="p-0 leading-7">
                  Corporate America Is Failing Its Most Important Climate Test
                  Yet
                </SummaryItemText>
              </div>
              <SummaryItemPicture
                className="w-20 h-20 self-center ml-auto"
                imageUrl={`https://res.cloudinary.com/film-it/image/upload/v1632983838/chayka_americancore.webp`}
              />
            </div>
            <Typography.Text className="font-semibold mt-3">
              By Alexandra Schwartz
            </Typography.Text>
          </SummaryItem>
        </div>
      </HomePageTop.RightSide>
    </HomePageTop>
  </div>
);

Default.args = {};
