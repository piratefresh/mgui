import Navigation from "@components/Navigation";
import { categories } from "@components/Navigation/categories";
import React from "react";

interface IProps {
  pageProps: {
    pages?: any;
    commerceFeatures: Record<string, boolean>;
  };
}

const Layout: React.FC<IProps> = ({
  children,
  pageProps: { ...pageProps },
}) => {
  return (
    <>
      <Navigation navigation={categories} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
