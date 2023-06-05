import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Button from "../../../Components/Buttons/Button";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularMenu = data.filter((item) => item.category === "popular");
  //       setMenu(popularMenu);
  //     });
  // }, []);

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Button btnText="View Full  Menu"></Button>
    </section>
  );
};

export default PopularMenu;
