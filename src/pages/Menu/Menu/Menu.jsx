import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import coverImage from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro - resturan</title>
      </Helmet>
      <Cover coverImage={coverImage} title="Our Menu" />
      <PopularMenu />
      <Cover coverImage={coverImage} title="Our Menu" />
      <PopularMenu />
      <Cover coverImage={coverImage} title="Our Menu" />
      <PopularMenu />
      <Cover coverImage={coverImage} title="Our Menu" />
      <PopularMenu />
      <Cover coverImage={coverImage} title="Our Menu" />
      <PopularMenu />
    </div>
  );
};

export default Menu;
