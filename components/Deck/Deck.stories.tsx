import Deck from ".";
import { DeckItem } from "./Deck";
import { IDeckCardProps } from "./SwipeCard";

export default {
  title: "Components/Card Deck",
  component: Deck,
};

export const Default = (args: IDeckCardProps) => (
  <Deck onVote={(item: any, vote: any) => console.log(item.props, vote)}>
    <DeckItem value="waffles" whileTap={1.15}>
      🧇
    </DeckItem>
    <DeckItem value="pancakes" whileTap={1.15}>
      🥞
    </DeckItem>
    <DeckItem value="donuts" whileTap={1.15}>
      🍩
    </DeckItem>
  </Deck>
);

Default.args = {};
