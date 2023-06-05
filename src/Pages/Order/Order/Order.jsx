import { Helmet } from "react-helmet-async";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";

import OrderTap from "../OrderTap/OrderTap";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>bistro boss | order</title>
      </Helmet>
      <Cover
        img={orderCoverImg}
        title={"ORDER FOOD"}
        description={"Would you like to try a dish?"}
      />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salads</Tab>
          <Tab>Pizzas</Tab>
          <Tab>soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTap items={salad}></OrderTap>
        </TabPanel>
        <TabPanel>
          <OrderTap items={pizza}></OrderTap>
        </TabPanel>
        <TabPanel>
          <OrderTap items={soup}></OrderTap>
        </TabPanel>
        <TabPanel>
          <OrderTap items={dessert}></OrderTap>
        </TabPanel>
        <TabPanel>
          <OrderTap items={drinks}></OrderTap>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
