import MostPopularItems, { IMostPopularItems } from "./MostPopularItems";

export default {
  title: "Components/Most Popular Items",
  component: MostPopularItems,
};

export const Default = (args: IMostPopularItems) => (
  <MostPopularItems {...args}></MostPopularItems>
);

Default.args = {
  items: [
    {
      name: "Shinola Runwell Wood Frame Leather Sofa",
      sku: "240082",
      excerpt:
        "A faction of the right believes America has been riven into two countries. The Claremont Institute is building the intellectual architecture for whatever comes next.",
      brand: {
        name: "Shinola Detroit",
        logo: {
          imageUrl:
            "https://res.cloudinary.com/film-it/image/upload/v1633132267/logo-shinola-detroit.png",
          imageAlt: "Shinola Detroit Logo",
        },
      },
      href: "/",
      imageUrl:
        "https://res.cloudinary.com/film-it/image/upload/v1633132307/shinola-runwell-sf-lthr-ches.jpg",
      imageAlt: "Close front picture of Shinola Sofa.",
      price: 4299.0,
    },
    {
      name: "Fayette Bar Cabinet",
      sku: "561862",
      excerpt:
        "A faction of the right believes America has been riven into two countries. The Claremont Institute is building the intellectual architecture for whatever comes next.",
      brand: {
        name: "Fayette",
        logo: {
          imageUrl:
            "https://res.cloudinary.com/film-it/image/upload/v1633132670/FayetteBarCabinetAVSOSSF20.jpg",
          imageAlt: "Shinola Detroit Logo",
        },
      },
      href: "/",
      imageUrl:
        "https://res.cloudinary.com/film-it/image/upload/v1633132670/FayetteBarCabinetAVSOSSF20.jpg",
      imageAlt: "Fayette bar cabinet open wide with cocktail glasses.",
      price: 1499.0,
    },
    {
      name: 'All-Clad ® Stainless Steel Large 16" Roaster with Rack',
      sku: "219608",
      excerpt:
        "A faction of the right believes America has been riven into two countries. The Claremont Institute is building the intellectual architecture for whatever comes next.",
      brand: {
        name: "All-Clad",
        logo: {
          imageUrl:
            "https://res.cloudinary.com/film-it/image/upload/v1633132267/logo-shinola-detroit.png",
          imageAlt: "All-Clad Logo",
        },
      },
      href: "/",
      imageUrl:
        "https://res.cloudinary.com/film-it/image/upload/v1633132785/all-clad-stainless-steel-roaster-with-rack.jpg",
      imageAlt: "Close front picture of Shinola Sofa.",
      price: 179.95,
    },
  ],
};
