import Typography from "@components/Typography";
import { SearchIcon } from "@heroicons/react/outline";
import useOnClickOutside from "hooks/useOnClickOutside";
import React from "react";
import SearchboxStyles from "./Searchbox.module.css";
import Image from "next/image";

export interface ISearchboxProps {
  name?: string;
  placeholder?: string;
}

const result = [
  {
    id: 1,
    name: "Dining Chairs",
  },
  {
    id: 2,
    name: "Swivel Chairs",
  },
  {
    id: 3,
    name: "Dining Chair",
  },
  {
    id: 4,
    name: "Chair",
  },
];
const productResult = [
  {
    id: 1,
    name: "Lounge Deep Chair and a Half",
    imageUrl:
      "https://res.cloudinary.com/film-it/image/upload/v1633048809/lounge-ii-chair-and-a-half.jpg",
  },
  {
    id: 2,
    name: "Notch Swivel Chair",
    imageUrl:
      "https://res.cloudinary.com/film-it/image/upload/v1633048811/notch-swivel-chair.jpg",
  },
  {
    id: 3,
    name: "Calder Chair",
    imageUrl:
      "https://res.cloudinary.com/film-it/image/upload/v1633048812/calder-chair.jpg",
  },
];

export default function Searchbox({
  name,
  placeholder = "What can we help you find?",
}: ISearchboxProps) {
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const [subHeader, setSubHeader] = React.useState<string>("Recent Searches");
  const ref = React.useRef(null);

  const handleClickOutside = () => {
    // Your custom logic here
    console.log("clicked outside");
    setIsFocus(!isFocus);
  };

  useOnClickOutside(ref, handleClickOutside);
  return (
    <div className="relative" ref={ref}>
      <div className="relative">
        <input
          placeholder={placeholder}
          onClick={() => setIsFocus(!isFocus)}
          className={SearchboxStyles["mgui-searchbox"]}
        />
        <button className={SearchboxStyles["mgui-search-icon"]}>
          <SearchIcon className="h-6 w-6" />
        </button>
      </div>
      {isFocus && (
        <>
          <ul className="bg-white py-2 pl-0 my-0">
            <Typography.Text className="px-4 uppercase" type="border-b">
              {result.length > 0 ? "Search Suggestions" : "Recent Searches"}
            </Typography.Text>
            {result.map((item) => {
              return (
                <>
                  <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">
                    <Typography.Text key={item.id} className="text-xs">
                      {item.name}
                    </Typography.Text>
                  </li>
                </>
              );
            })}
          </ul>
          <ul className="bg-white py-2 pl-0 my-0">
            <Typography.Text className="px-4 uppercase" type="border-b">
              {productResult.length > 0
                ? "Product Suggestions"
                : "Recent Searches"}
            </Typography.Text>
            {productResult.map((product) => {
              return (
                <>
                  <li className="flex flex-row py-1 px-4 hover:bg-gray-100 cursor-pointer">
                    <div className="relative h-20 w-20">
                      <Image layout="fill" src={product.imageUrl} />
                    </div>

                    <Typography.Text key={product.id} className="text-xs ml-4">
                      {product.name}
                    </Typography.Text>
                  </li>
                </>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
