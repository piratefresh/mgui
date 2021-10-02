import ArticleStyles from "./Article.module.css";
import Image from "next/image";
import Typography from "@components/Typography";

export default function Article() {
  return (
    <article>
      <header>
        <div className={ArticleStyles["mgui-article-lookup"]}>
          <div className={ArticleStyles["mgui-article-rubric"]}>
            <a className="text-crimson uppercase">Health</a>
          </div>
          <Typography.Title className="mb-4">
            Did Pfizer Peak Too Soon?
          </Typography.Title>
          <p className={ArticleStyles["mgui-article-paragraph"]}>
            A decision to go with a lower dose might have helped speed things up
            last year. Now we may be seeing the consequences.
          </p>
        </div>

        <figure className={ArticleStyles["mgui-article-lead-figure"]}>
          <Image
            layout="fill"
            src="https://res.cloudinary.com/film-it/image/upload/v1633123719/original.webp"
          />
        </figure>
      </header>

      <section className={ArticleStyles["mgui-article-section"]}>
        <p className={ArticleStyles["mgui-article-paragraph"]}>
          The Delta variant’s arrival this summer delivered a blow to the
          nation’s entire coronavirus arsenal, but its impact on the champion of
          last year’s vaccine race—Pfizer—has been particularly humbling.
          Compared with Moderna’s competing shot, Pfizer’s vaccine seems to
          induce half the amount of virus-fighting antibodies, and is associated
          with nearly twice as many breakthrough infections, according to two
          recent studies. Pfizer’s shots remain highly protective against
          hospitalization, but the latest numbers from the U.S. Centers for
          Disease Control and Prevention suggest that their effectiveness has
          dropped from 87 percent to 80 percent during the Delta wave, while
          that of Moderna’s shots remains in the 90s.
        </p>
      </section>
      <section className={ArticleStyles["mgui-article-section"]}>
        <p className={ArticleStyles["mgui-article-paragraph"]}>
          Although Pfizer has now sold authorities around the world on the
          imminent need for third shots to combat waning immunity, the company
          doesn’t believe that its vaccine, worth more than $30 billion to its
          bottom line, is inferior in any way to competitors. Recipients of
          Moderna’s shots, after all, may also need a booster eventually. “All
          of the real-world evidence you have to take with caution,” Pfizer’s
          chief scientific officer, Mikael Dolsten, told me recently. “It’s very
          hard to compare two very effective interventions.” Other experts see
          the evidence of a difference, however slight, starting to grow. Shane
          Crotty, a researcher at the La Jolla Institute for Immunology, told me
          that after looking at some of the recent data, he went to double-check
          his own vaccination record and was pleased to find Moderna listed on
          it. Is it possible that Pfizer, in its all-out sprint to bring the
          first-ever human mRNA vaccine to market, ended up delivering the
          second-best product?
        </p>
      </section>
    </article>
  );
}
