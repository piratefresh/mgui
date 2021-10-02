import Card from "./Card";
import Image from "next/image";
import CardMedia from "@components/CardMedia";
import CardHeader from "@components/CardHeader";
import CardContent from "@components/CardContent";
import { Typography } from "@components/Typography";
import FavoriteOverlay from "@components/FavoriteOverlay";

export default {
  title: "Displays/Card",
  component: Card,
};

export const Default = (args: any) => (
  <div className="max-w-2xl">
    <Card {...args}>
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1632166012/james-gandolfini-not-fade-away-580.jpg.webp" />
      <Typography.Text className="text-red-800 uppercase">
        Prehistory Dept.
      </Typography.Text>
      <Typography.Title level={3}>
        Alessandro Nivola’s “Sopranos” Time Travel
      </Typography.Title>

      <CardContent>
        The actor visits the old stomping ground of the mafioso Richie (the
        Boot) Boiardo.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
  </div>
);

export const withRow = (args: any) => (
  <Card {...args}>
    <CardMedia
      align="row"
      src="https://res.cloudinary.com/film-it/image/upload/v1632166012/james-gandolfini-not-fade-away-580.jpg.webp"
    />

    <CardContent className="ml-4">
      <Typography.Text className="text-red-800 uppercase">
        Prehistory Dept.
      </Typography.Text>
      <Typography.Title level={3}>
        Alessandro Nivola’s “Sopranos” Time Travel
      </Typography.Title>
      The actor visits the old stomping ground of the mafioso Richie (the Boot)
      Boiardo.
      <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
    </CardContent>
  </Card>
);

export const withGrid = (args: any) => (
  <div className="grid grid-cols-4 gap-4">
    <Card {...args}>
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1632166012/james-gandolfini-not-fade-away-580.jpg.webp" />
      <Typography.Text className="text-red-800 uppercase">
        Prehistory Dept.
      </Typography.Text>
      <Typography.Title level={3}>
        Alessandro Nivola’s “Sopranos” Time Travel
      </Typography.Title>

      <CardContent>
        The actor visits the old stomping ground of the mafioso Richie (the
        Boot) Boiardo.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1632165317/Alarcon-Abimael.webp" />

      <Typography.Text className="text-red-800 uppercase">
        Prehistory Dept.
      </Typography.Text>
      <Typography.Title level={3}>
        Alessandro Nivola’s “Sopranos” Time Travel
      </Typography.Title>

      <CardContent>
        The actor visits the old stomping ground of the mafioso Richie (the
        Boot) Boiardo.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1632161978/alan-w-RyZSDhYyFFQ-unsplash.jpg" />

      <Typography.Text className="text-red-800 uppercase">
        Prehistory Dept.
      </Typography.Text>
      <Typography.Title level={3}>
        Alessandro Nivola’s “Sopranos” Time Travel
      </Typography.Title>

      <CardContent>
        The actor visits the old stomping ground of the mafioso Richie (the
        Boot) Boiardo.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1632165845/laurenz-heymann-VkfhJLz5SMQ-unsplash.jpg" />

      <Typography.Text className="text-red-800 uppercase">
        Infinite Scroll
      </Typography.Text>
      <Typography.Title level={3}>
        How Epic Games Made a Dent in Apple’s App Store Domination
      </Typography.Title>

      <CardContent>
        In a calculated bit of legal trolling, the video-game company has landed
        a victory with major implications for users and developers alike.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1632166012/james-gandolfini-not-fade-away-580.jpg.webp" />
      <Typography.Text className="text-red-800 uppercase">
        Prehistory Dept.
      </Typography.Text>
      <Typography.Title level={3}>
        Alessandro Nivola’s “Sopranos” Time Travel
      </Typography.Title>

      <CardContent>
        The actor visits the old stomping ground of the mafioso Richie (the
        Boot) Boiardo.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1632165317/Alarcon-Abimael.webp" />

      <Typography.Text className="text-red-800 uppercase">
        Prehistory Dept.
      </Typography.Text>
      <Typography.Title level={3}>
        Alessandro Nivola’s “Sopranos” Time Travel
      </Typography.Title>

      <CardContent>
        The actor visits the old stomping ground of the mafioso Richie (the
        Boot) Boiardo.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1632161978/alan-w-RyZSDhYyFFQ-unsplash.jpg" />

      <Typography.Text className="text-red-800 uppercase">
        Prehistory Dept.
      </Typography.Text>
      <Typography.Title level={3}>
        Alessandro Nivola’s “Sopranos” Time Travel
      </Typography.Title>

      <CardContent>
        The actor visits the old stomping ground of the mafioso Richie (the
        Boot) Boiardo.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1632165845/laurenz-heymann-VkfhJLz5SMQ-unsplash.jpg" />

      <Typography.Text className="text-red-800 uppercase">
        Infinite Scroll
      </Typography.Text>
      <Typography.Title level={3}>
        How Epic Games Made a Dent in Apple’s App Store Domination
      </Typography.Title>

      <CardContent>
        In a calculated bit of legal trolling, the video-game company has landed
        a victory with major implications for users and developers alike.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
  </div>
);
export const withGridRow = (args: any) => (
  <div className="grid grid-rows-4 gap-4 max-w-6xl">
    <Card {...args}>
      <CardMedia
        align="row"
        src="https://res.cloudinary.com/film-it/image/upload/v1632166012/james-gandolfini-not-fade-away-580.jpg.webp"
      />

      <CardContent className="ml-4">
        <Typography.Text className="text-red-800 uppercase">
          Prehistory Dept.
        </Typography.Text>
        <Typography.Title level={3}>
          Alessandro Nivola’s “Sopranos” Time Travel
        </Typography.Title>
        The actor visits the old stomping ground of the mafioso Richie (the
        Boot) Boiardo.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia
        align="row"
        src="https://res.cloudinary.com/film-it/image/upload/v1632165317/Alarcon-Abimael.webp"
      />

      <CardContent className="ml-4">
        <Typography.Text className="text-red-800 uppercase">
          Prehistory Dept.
        </Typography.Text>
        <Typography.Title level={3}>
          Alessandro Nivola’s “Sopranos” Time Travel
        </Typography.Title>
        The actor visits the old stomping ground of the mafioso Richie (the
        Boot) Boiardo.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia
        align="row"
        src="https://res.cloudinary.com/film-it/image/upload/v1632161978/alan-w-RyZSDhYyFFQ-unsplash.jpg"
      />

      <CardContent className="ml-4">
        <Typography.Text className="text-red-800 uppercase">
          Prehistory Dept.
        </Typography.Text>
        <Typography.Title level={3}>
          Alessandro Nivola’s “Sopranos” Time Travel
        </Typography.Title>
        The actor visits the old stomping ground of the mafioso Richie (the
        Boot) Boiardo.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia
        align="row"
        src="https://res.cloudinary.com/film-it/image/upload/v1632165845/laurenz-heymann-VkfhJLz5SMQ-unsplash.jpg"
      />

      <CardContent className="ml-4">
        <Typography.Text className="text-red-800 uppercase">
          Infinite Scroll
        </Typography.Text>
        <Typography.Title level={3}>
          How Epic Games Made a Dent in Apple’s App Store Domination
        </Typography.Title>
        In a calculated bit of legal trolling, the video-game company has landed
        a victory with major implications for users and developers alike.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia
        align="row"
        src="https://res.cloudinary.com/film-it/image/upload/v1632166012/james-gandolfini-not-fade-away-580.jpg.webp"
      />

      <CardContent className="ml-4">
        <Typography.Text className="text-red-800 uppercase">
          Prehistory Dept.
        </Typography.Text>
        <Typography.Title level={3}>
          Alessandro Nivola’s “Sopranos” Time Travel
        </Typography.Title>
        The actor visits the old stomping ground of the mafioso Richie (the
        Boot) Boiardo.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia
        align="row"
        src="https://res.cloudinary.com/film-it/image/upload/v1632165317/Alarcon-Abimael.webp"
      />

      <CardContent className="ml-4">
        <Typography.Text className="text-red-800 uppercase">
          Prehistory Dept.
        </Typography.Text>
        <Typography.Title level={3}>
          Alessandro Nivola’s “Sopranos” Time Travel
        </Typography.Title>
        The actor visits the old stomping ground of the mafioso Richie (the
        Boot) Boiardo.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia
        align="row"
        src="https://res.cloudinary.com/film-it/image/upload/v1632161978/alan-w-RyZSDhYyFFQ-unsplash.jpg"
      />

      <CardContent className="ml-4">
        <Typography.Text className="text-red-800 uppercase">
          Prehistory Dept.
        </Typography.Text>
        <Typography.Title level={3}>
          Alessandro Nivola’s “Sopranos” Time Travel
        </Typography.Title>
        The actor visits the old stomping ground of the mafioso Richie (the
        Boot) Boiardo.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
    <Card {...args}>
      <CardMedia
        align="row"
        src="https://res.cloudinary.com/film-it/image/upload/v1632165845/laurenz-heymann-VkfhJLz5SMQ-unsplash.jpg"
      />

      <CardContent className="ml-4">
        <Typography.Text className="text-red-800 uppercase">
          Infinite Scroll
        </Typography.Text>
        <Typography.Title level={3}>
          How Epic Games Made a Dent in Apple’s App Store Domination
        </Typography.Title>
        In a calculated bit of legal trolling, the video-game company has landed
        a victory with major implications for users and developers alike.
        <div className="text-sm font-semibold my-6">By Kyle Chayka</div>
      </CardContent>
    </Card>
  </div>
);

export const ShopCard = (args: any) => (
  <div className="max-w-2xl">
    <Card {...args}>
      <FavoriteOverlay />
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1633037081/kettlepizza-deluxe-usa-outdoor-pizza-oven-kit.jpg" />

      <CardContent>
        <Typography.Title level={5}>Marin Dinnerware</Typography.Title>
        <Typography.Text className="">Dinner Plate:</Typography.Text>
        <Typography.Price>$9.5</Typography.Price>
      </CardContent>
    </Card>
  </div>
);
export const ShopCardExclusive = (args: any) => (
  <div className="max-w-2xl">
    <Card {...args}>
      <FavoriteOverlay />
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1633037081/kettlepizza-deluxe-usa-outdoor-pizza-oven-kit.jpg" />

      <CardContent>
        <Typography.Text className="uppercase" type="secondary">
          Exclusive
        </Typography.Text>
        <Typography.Title level={5}>Marin Dinnerware</Typography.Title>
        <Typography.Text className="">Dinner Plate:</Typography.Text>
        <Typography.Price>$9.5</Typography.Price>
      </CardContent>
    </Card>
  </div>
);
export const ShopCardDiscount = (args: any) => (
  <div className="max-w-2xl">
    <Card {...args}>
      <FavoriteOverlay />
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1633041738/commerce/products/yummly-smart-meat-thermometer-with-wireless-bluetooth-connectivity.jpg" />

      <CardContent>
        <Typography.Text className="uppercase" type="secondary">
          Exclusive
        </Typography.Text>
        <Typography.Title level={5}>Marin Dinnerware</Typography.Title>
        <Typography.Text className="">Dinner Plate:</Typography.Text>
        <div className="flex flex-col my-2">
          <Typography.Price type="sale">Sale $99.99</Typography.Price>
          <Typography.Price type="discount">reg. $125.50</Typography.Price>
        </div>
      </CardContent>
    </Card>
  </div>
);

export const WithRowShopCard = (args: any) => (
  <div className="grid grid-cols-4 gap-4">
    <Card {...args}>
      <FavoriteOverlay />
      <CardMedia src="https://res.cloudinary.com/film-it/image/upload/v1633037081/kettlepizza-deluxe-usa-outdoor-pizza-oven-kit.jpg" />

      <CardContent>
        <Typography.Title level={5}>Marin Dinnerware</Typography.Title>
        <Typography.Text className="">Dinner Plate:</Typography.Text>
        <Typography.Price>$9.5</Typography.Price>
      </CardContent>
    </Card>
    <Card {...args}>
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
    <Card {...args}>
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
    <Card {...args}>
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
  </div>
);

withRow.args = {
  align: "row",
};
withGridRow.args = {
  align: "row",
};
