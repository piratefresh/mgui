import MostPopularArticlesStyles from "./MostPopularArticles.module.css";
import Image from "next/image";
import Typography from "@components/Typography";
import Link from "next/link";

export type TArticle = {
  title: string;
  excerpt: string;
  author: {
    firstName: string;
    lastName: string;
    avatar?: {
      imageUrl: string;
      imageAlt: string;
    };
  };
  href: string;
  imageUrl: string;
  imageAlt: string;
};

export interface IMostPopularArticles {
  articles: TArticle[];
}

function MostPopularArticles({ articles }: IMostPopularArticles) {
  return (
    <section>
      <Typography.Title className="font-mono">Most Popular</Typography.Title>
      <ol className={MostPopularArticlesStyles["mgui-mostpopular-article-ol"]}>
        {articles.map((article) => (
          <MostPopularArticlesItem article={article} />
        ))}
      </ol>
    </section>
  );
}

export interface MostPopularItemArticle {
  article: TArticle;
}

const MostPopularArticlesItem = ({ article }: MostPopularItemArticle) => {
  return (
    <li className={MostPopularArticlesStyles["mgui-mostpopular-article-item"]}>
      <article
        className={
          MostPopularArticlesStyles["mgui-mostpopular-article-item-container"]
        }
      >
        <div
          className={
            MostPopularArticlesStyles["mgui-mostpopular-article-content"]
          }
        >
          <h3
            className={
              MostPopularArticlesStyles["mgui-mostpopular-article-title"]
            }
          >
            <Link href={article.href}>
              <a
                className={
                  MostPopularArticlesStyles[
                    "mgui-mostpopular-article-title-link"
                  ]
                }
              >
                {article.title}
              </a>
            </Link>
          </h3>
          <p>{article.excerpt}</p>
          <div>
            <a className="font-mono uppercase text-mine-shaft cursor-pointer">
              {article.author.firstName} {article.author.lastName}
            </a>
          </div>
        </div>
        <Link href={article.href}>
          <figure
            className={
              MostPopularArticlesStyles["mgui-mostpopular-article-figure"]
            }
          >
            <a
              className={
                MostPopularArticlesStyles["mgui-mostpopular-article-imageLink"]
              }
            >
              <Image
                layout="fill"
                objectFit="cover"
                src={article.imageUrl}
                alt={article.imageAlt}
              />
            </a>
          </figure>
        </Link>
      </article>
    </li>
  );
};

MostPopularArticles.Item = MostPopularArticlesItem;

export default MostPopularArticles;
