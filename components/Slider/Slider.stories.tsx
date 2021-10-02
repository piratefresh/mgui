import Card from "@components/Card";
import CardContent from "@components/CardContent";
import CardMedia from "@components/CardMedia";
import FavoriteOverlay from "@components/FavoriteOverlay";
import ShowcaseItem from "@components/ShowcaseItem";
import Typography from "@components/Typography";
import React from "react";
import Slider from ".";
import { ISliderProps } from "./Slider";

export default {
  title: "Components/Slider",
  component: Slider,
};

export const Default = (args: ISliderProps) => (
  <Slider {...args}>
    <Card>
      <FavoriteOverlay />
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1633037081/kettlepizza-deluxe-usa-outdoor-pizza-oven-kit.jpg" />

      <CardContent>
        <Typography.Title level={5}>Marin Dinnerware</Typography.Title>
        <Typography.Text className="">Dinner Plate:</Typography.Text>
        <Typography.Price>$9.5</Typography.Price>
      </CardContent>
    </Card>
    <Card>
      <FavoriteOverlay />
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1633041738/commerce/products/yummly-smart-meat-thermometer-with-wireless-bluetooth-connectivity.jpg" />

      <CardContent>
        <Typography.Text className="uppercase" type="secondary">
          Exclusive
        </Typography.Text>
        <Typography.Title level={5}>
          Yummly ® Smart Meat Thermometer with Wireless Bluetooth Connectivity
        </Typography.Title>
        <div className="flex flex-col my-2">
          <Typography.Price type="sale">Sale $99.99</Typography.Price>
          <Typography.Price type="discount">reg. $125.50</Typography.Price>
        </div>
        <div className="flex flex-col my-2">
          <Typography.Text className="text-red-600">
            Limited Time Only
          </Typography.Text>
          <Typography.Text type="secondary">Ships Free</Typography.Text>
        </div>
      </CardContent>
    </Card>
    <Card>
      <FavoriteOverlay />
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1633037081/kettlepizza-deluxe-usa-outdoor-pizza-oven-kit.jpg" />

      <CardContent>
        <Typography.Text className="uppercase" type="secondary">
          Exclusive
        </Typography.Text>
        <Typography.Title level={5}>
          Weber ® Genesis II S-435 LP Stainless Steel Gas Grill
        </Typography.Title>
        <Typography.Text className="">Dinner Plate:</Typography.Text>
        <Typography.Price>$1,299.00</Typography.Price>
      </CardContent>
    </Card>
    <Card>
      <FavoriteOverlay />
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1633041981/commerce/products/scout-greige-apron.jpg" />

      <CardContent>
        <Typography.Text className="uppercase" type="secondary">
          New Arrival
        </Typography.Text>
        <Typography.Title level={5}>
          Scout Greige Faux Leather Apron
        </Typography.Title>
        <Typography.Price>$39.95</Typography.Price>
      </CardContent>
    </Card>
    <Card>
      <FavoriteOverlay />
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1633037081/kettlepizza-deluxe-usa-outdoor-pizza-oven-kit.jpg" />

      <CardContent>
        <Typography.Title level={5}>Marin Dinnerware</Typography.Title>
        <Typography.Text className="">Dinner Plate:</Typography.Text>
        <Typography.Price>$9.5</Typography.Price>
      </CardContent>
    </Card>
    <Card>
      <FavoriteOverlay />
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1633041738/commerce/products/yummly-smart-meat-thermometer-with-wireless-bluetooth-connectivity.jpg" />

      <CardContent>
        <Typography.Text className="uppercase" type="secondary">
          Exclusive
        </Typography.Text>
        <Typography.Title level={5}>
          Yummly ® Smart Meat Thermometer with Wireless Bluetooth Connectivity
        </Typography.Title>
        <div className="flex flex-col my-2">
          <Typography.Price type="sale">Sale $99.99</Typography.Price>
          <Typography.Price type="discount">reg. $125.50</Typography.Price>
        </div>
        <div className="flex flex-col my-2">
          <Typography.Text className="text-red-600">
            Limited Time Only
          </Typography.Text>
          <Typography.Text type="secondary">Ships Free</Typography.Text>
        </div>
      </CardContent>
    </Card>
    <Card>
      <FavoriteOverlay />
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1633037081/kettlepizza-deluxe-usa-outdoor-pizza-oven-kit.jpg" />

      <CardContent>
        <Typography.Text className="uppercase" type="secondary">
          Exclusive
        </Typography.Text>
        <Typography.Title level={5}>
          Weber ® Genesis II S-435 LP Stainless Steel Gas Grill
        </Typography.Title>
        <Typography.Text className="">Dinner Plate:</Typography.Text>
        <Typography.Price>$1,299.00</Typography.Price>
      </CardContent>
    </Card>
    <Card>
      <FavoriteOverlay />
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1633041981/commerce/products/scout-greige-apron.jpg" />

      <CardContent>
        <Typography.Text className="uppercase" type="secondary">
          New Arrival
        </Typography.Text>
        <Typography.Title level={5}>
          Scout Greige Faux Leather Apron
        </Typography.Title>
        <Typography.Price>$39.95</Typography.Price>
      </CardContent>
    </Card>
  </Slider>
);

export const ShowcaseSlider = (args: ISliderProps) => (
  <Slider {...args}>
    <ShowcaseItem />
    <ShowcaseItem />
    <ShowcaseItem />
    <ShowcaseItem />
    <ShowcaseItem />
    <ShowcaseItem />
  </Slider>
);

Default.args = {};
