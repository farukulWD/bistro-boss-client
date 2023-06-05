import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";

import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import Button from "../../../Components/Buttons/Button";
const Menu = () => {
  const [menu] = useMenu();
  const offer = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro boss | Menu</title>
      </Helmet>
      <Cover
        img={menuBg}
        title="OUR MENU"
        description="Would you like to try a dish?"
      ></Cover>
      {/* offered menu */}
      <div className="mb-12">
        <SectionTitle subHeading="Don't Miss" heading="TODAY'S OFFER" />
        <MenuCategory items={offer}></MenuCategory>
      </div>
      {/* dessert */}

      <div className="mb-12">
        <MenuCategory
          items={dessert}
          title="dessert"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          coverImg={dessertBg}
        />
      </div>
      {/* Pizza */}
      <div className="mb-12">
        <MenuCategory
          items={pizza}
          title="pizza"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          coverImg={pizzaBg}
        />
      </div>
      {/* Salad */}
      <div className="mb-12">
        <MenuCategory
          items={salad}
          title="salad"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          coverImg={saladBg}
        />
      </div>
      {/* Soup */}
      <div className="mb-12">
        <MenuCategory
          items={soup}
          title="soup"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          coverImg={soupBg}
        />
      </div>
      {/* drinks */}
      <div className="mb-12">
        <MenuCategory
          items={drinks}
          title="drinks"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          coverImg={soupBg}
        />
      </div>
    </div>
  );
};

export default Menu;
