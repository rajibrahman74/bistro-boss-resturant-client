import React, { useState } from "react";
import orderImage from "../../../assets/order/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const { category } = useParams();
  console.log(category);
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Cover coverImage={orderImage} title="Order Food" />
      <Tabs
        className="mx-auto text-center my-6 text-[#151515] text-lg font-semibold"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab iitems={salads} />
        </TabPanel>
        <TabPanel>
          <OrderTab iitems={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab iitems={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab iitems={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTab iitems={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
