import React from "react";
import { Helmet } from "react-helmet-async";
import coverImage from "../../../assets/menu/banner3.jpg";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro - resturan</title>
      </Helmet>
      <Cover coverImage={coverImage} title="Our Menu" />
      {/* main cover */}
      <SectionTitle
        subHeading="---Don't miss---"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      {/* offered menu item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu item */}
      <MenuCategory
        items={desserts}
        title="dsesserts"
        img={dessertImage}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory items={pizza} title="pizza" img={pizzaImage}></MenuCategory>
      {/* salads menu items */}
      <MenuCategory
        items={salads}
        title="salad"
        img={saladImage}
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory items={soup} title="soup" img={soupImage}></MenuCategory>
    </div>
  );
};

export default Menu;