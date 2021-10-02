import RelatedArticles from ".";
import { IRelatedArticlesProps } from "./RelatedArticles";

export default {
  title: "Components/RelatedArticles",
  component: RelatedArticles,
};

export const Default = (args: IRelatedArticlesProps) => (
  <RelatedArticles {...args} />
);

Default.args = {
  articles: [
    {
      title: "The Conservatives Dreading—And Preparing for—Civil War",
      excerpt:
        "A faction of the right believes America has been riven into two countries. The Claremont Institute is building the intellectual architecture for whatever comes next.",
      author: {
        firstName: "Emma",
        lastName: "Green",
      },
      href: "/",
      imageUrl:
        "https://res.cloudinary.com/film-it/image/upload/v1633145275/min1.webp",
      imageAlt: "Abstract photo of two corporate guys.",
    },
    {
      title: "Did Pfizer Peak Too Soon?",
      excerpt:
        "A decision to go with a lower dose might have helped speed things up last year. Now we may be seeing the consequences.",
      author: {
        firstName: "Brendan",
        lastName: "Borrel",
      },
      href: "/",
      imageUrl:
        "https://res.cloudinary.com/film-it/image/upload/v1633123719/original.webp",
      imageAlt: "Blurred covid-19 vial.",
    },
    {
      title: "A Profession Is Not a Personality",
      excerpt:
        "Reducing yourself to any single characteristic, whether it be your title or your job performance, is a deeply damaging act.",
      author: {
        firstName: "Arthur C.",
        lastName: "Brooks",
      },
      href: "/",
      imageUrl:
        "https://res.cloudinary.com/film-it/image/upload/v1633130626/original3.webp",
      imageAlt: "Abstract illustration of wheeled person.",
    },
    {
      title: "The New Anti-comedy of Jon Stewart",
      excerpt:
        "The comedian returns to TV after six years—and this time, he’s not trying to be funny.",
      author: {
        firstName: "Sophie",
        lastName: "Gilbert",
      },
      href: "/",
      imageUrl:
        "https://res.cloudinary.com/film-it/image/upload/v1633131117/original4.webp",
      imageAlt: "Abstract illustration of wheeled person.",
    },
  ],
};
