import React from "react";
import { Helmet } from "react-helmet-async";
import coverImage from "../../../assets/menu/banner3.jpg";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro - resturan</title>
      </Helmet>
      <Cover coverImage={coverImage} title="Our Menu" />
    </div>
  );
};

export default Menu;