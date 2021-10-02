import { TArticle } from "@components/MostPopularArticles/MostPopularArticles";
import Typography from "@components/Typography";
import Image from "next/image";
import RelatedArticlesStyles from "./RelatedArticles.module.css";

export interface IRelatedArticlesProps {
  className?: string;
  articles: TArticle[];
}

export interface IRelatedArticlesItemProps {
  article: TArticle;
}

function RelatedArticles({ className, articles }: IRelatedArticlesProps) {
  let classes = [RelatedArticlesStyles["mgui-related-articles-container"]];
  if (className) {
    classes.push(className);
  }

  return (
    <section className={classes.join(" ")}>
      <Typography.Title
        level={3}
        className="font-mono whitespace-nowrap border-b"
      >
        Related Articles
      </Typography.Title>
      <ul className="p-0 w-full">
        {articles?.map((article) => (
          <RelatedArticlesItem article={article} />
        ))}
      </ul>
    </section>
  );
}

export const RelatedArticlesItem = ({ article }: IRelatedArticlesItemProps) => {
  return (
    <li>
      <div className={RelatedArticlesStyles["mgui-related-articles-item"]}>
        <figure
          className={RelatedArticlesStyles["mgui-related-articles-figure"]}
        >
          <a>
            <picture
              className={RelatedArticlesStyles["mgui-related-articles-picture"]}
            >
              <Image layout="fill" objectFit="cover" src={article.imageUrl} />
            </picture>
          </a>
        </figure>
        <div className={RelatedArticlesStyles["mgui-related-articles-content"]}>
          <h3>
            <a className="text-primary">{article.title}</a>
          </h3>
          <address>
            <a className="text-primary">
              <span className="uppercase font-mono">
                {article.author.firstName} {article.author.lastName}
              </span>
            </a>
          </address>
        </div>
      </div>
    </li>
  );
};

export default RelatedArticles;
