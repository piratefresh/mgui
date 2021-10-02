import Image from "next/image";
import Typography from "@components/Typography";
import Link from "next/link";
import MostPopularItemsStyles from "./MostPopularItems.module.css";

export type TItem = {
  name: string;
  excerpt: string;
  brand: {
    name: string;
    logo?: {
      imageUrl: string;
      imageAlt: string;
    };
  };
  href: string;
  imageUrl: string;
  imageAlt: string;
  price: number;
};

export interface IMostPopularItems {
  items: TItem[];
}

export interface IMostPopularItem {
  item: TItem;
}

function MostPopularItems({ items }: IMostPopularItems) {
  return (
    <section>
      <Typography.Title className="font-mono whitespace-nowrap">
        Most Popular Products
      </Typography.Title>
      <ol className={MostPopularItemsStyles["mgui-mostpopular-items-ol"]}>
        {items.map((item) => (
          <MostPopularItem item={item} />
        ))}
      </ol>
    </section>
  );
}

const MostPopularItem = ({ item }: IMostPopularItem) => {
  return (
    <li className={MostPopularItemsStyles["mgui-mostpopular-item"]}>
      <article
        className={MostPopularItemsStyles["mgui-mostpopular-item-container"]}
      >
        <div
          className={MostPopularItemsStyles["mgui-mostpopular-item-content"]}
        >
          <h3 className={MostPopularItemsStyles["mgui-mostpopular-item-title"]}>
            <Link href={item.href}>
              <a
                className={
                  MostPopularItemsStyles["mgui-mostpopular-item-title-link"]
                }
              >
                {item.name}
              </a>
            </Link>
          </h3>
          <p className="font-semibold">${item.price}</p>
          <div>
            <a className="font-mono uppercase text-mine-shaft cursor-pointer">
              {item.brand.name}
            </a>
          </div>
        </div>
        <Link href={item.href}>
          <figure
            className={MostPopularItemsStyles["mgui-mostpopular-item-figure"]}
          >
            <a
              className={
                MostPopularItemsStyles["mgui-mostpopular-item-imageLink"]
              }
            >
              <Image
                layout="fill"
                objectFit="cover"
                src={item.imageUrl}
                alt={item.imageAlt}
              />
            </a>
          </figure>
        </Link>
      </article>
    </li>
  );
};

MostPopularItems.Item = MostPopularItem;

export default MostPopularItems;
