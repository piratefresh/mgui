import React from "react";

import { action } from "@storybook/addon-actions";

import SummmaryItem from ".";
import SummaryItemAuthor from "./SummaryItemAuthor";
import SummaryItemText from "./SummaryItemText";
import Typography from "@components/Typography";
import SummaryItemPicture from "./SummaryItemPicture";
import SummaryItemTitle from "./SummaryItemTitle";
import SummaryItemStyles from "./SummaryItem.module.css";

export default {
  title: "Components/Summmary Item",
  component: SummmaryItem,
  argTypes: { onChange: { action: "onChange" } },
};

export const Default = (args: any) => (
  <div className="max-w-2xl">
    <div className="grid grid-cols-2 gap-8 overflow-hidden">
      <SummmaryItem borderBottom>
        <SummaryItemAuthor
          authorName="Michael Schulman"
          category="Cultural Comment"
          avatarUrl="https://res.cloudinary.com/film-it/image/upload/v1632974584/blitzer-jonathan.webp"
        />
        <SummaryItemText className="pt-4">
          The Tony Awards Are Telling You Broadway’s Not Going
        </SummaryItemText>
      </SummmaryItem>
      <SummmaryItem borderBottom>
        <SummaryItemAuthor
          authorName="Michael Schulman"
          category="A Critic at Large"
          avatarUrl="https://res.cloudinary.com/film-it/image/upload/v1632974584/blitzer-jonathan.webp"
        />
        <SummaryItemText className="pt-4">
          Gayl Jones’s Novels of Oppression
        </SummaryItemText>
      </SummmaryItem>
      <SummmaryItem borderBottom>
        <SummaryItemAuthor
          authorName="Michael Schulman"
          category="A Critic at Large"
          avatarUrl="https://res.cloudinary.com/film-it/image/upload/v1632974584/blitzer-jonathan.webp"
        />
        <SummaryItemText className="pt-4">
          Hopper on the Couch, O’Keeffe Against the Floor Lamp
        </SummaryItemText>
      </SummmaryItem>
      <SummmaryItem borderBottom>
        <SummaryItemAuthor
          authorName="Michael Schulman"
          category="A Critic at Large"
          avatarUrl="https://res.cloudinary.com/film-it/image/upload/v1632974584/blitzer-jonathan.webp"
        />
        <SummaryItemText className="pt-4">
          Lil Nas X’s Unexpected Introspection
        </SummaryItemText>
      </SummmaryItem>
    </div>
  </div>
);

export const withRow = (args: any) => (
  <div className="grid grid-cols-4 gap-8 overflow-hidden">
    <SummmaryItem>
      <div className="flex flex-row">
        <SummaryItemPicture
          className="w-16"
          imageUrl={`https://res.cloudinary.com/film-it/image/upload/v1632974581/virus-hpicon-resize.webp`}
        />
        <div className="flex-col ml-4">
          <Typography.Title level={5} className="uppercase">
            The Coronavirus Crisis
          </Typography.Title>
          <SummaryItemText className="pt-4">
            Coverage of the COVID-19 outbreak, from the science of vaccines to
            the culture of quarantine.
          </SummaryItemText>
        </div>
      </div>
    </SummmaryItem>
    <SummmaryItem>
      <div className="flex flex-row">
        <SummaryItemPicture
          className="w-16"
          imageUrl={`https://res.cloudinary.com/film-it/image/upload/v1632981638/racialinjustice-hpicon-resize.webp`}
        />
        <div className="flex-col ml-4">
          <Typography.Title level={5} className="uppercase">
            Racial Injustice and Policing
          </Typography.Title>
          <SummaryItemText className="pt-4">
            Black Lives Matter, police brutality, and the long history of racism
            in America.
          </SummaryItemText>
        </div>
      </div>
    </SummmaryItem>
    <SummmaryItem>
      <div className="flex flex-row">
        <SummaryItemPicture
          className="w-16"
          imageUrl={`https://res.cloudinary.com/film-it/image/upload/v1632981640/DeptReturns-Icon-1.webp`}
        />
        <div className="flex-col ml-4">
          <Typography.Title level={5} className="uppercase">
            Dept. of Returns
          </Typography.Title>
          <SummaryItemText className="pt-4">
            Hopper on the Couch, O’Keeffe Against the Floor Lamp
          </SummaryItemText>
        </div>
      </div>
    </SummmaryItem>
    <SummmaryItem>
      <div className="flex flex-row">
        <SummaryItemPicture
          className="w-16"
          imageUrl={`https://res.cloudinary.com/film-it/image/upload/v1632981755/Democracy-banner-icon-smallest.webp`}
        />
        <div className="flex-col ml-4">
          <Typography.Title level={5} className="uppercase">
            The Future of Democracy
          </Typography.Title>
          <SummaryItemText className="pt-4">
            An exploration of democracy in America.
          </SummaryItemText>
        </div>
      </div>
    </SummmaryItem>
  </div>
);
export const withColumnImageRight = (args: any) => (
  <div className="flex flex-col overflow-hidden max-w-lg">
    <SummmaryItem className="mb-10" borderBottom>
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
    </SummmaryItem>
    <SummmaryItem className="mb-10" borderBottom>
      <div className={SummaryItemStyles["mgui-summary-item-grid"]}>
        <div className="flex flex-col">
          <SummaryItemTitle title="" subTitle="Infinite Scroll" />
          <SummaryItemText className="p-0 leading-7">
            Corporate America Is Failing Its Most Important Climate Test Yet
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
    </SummmaryItem>
  </div>
);
