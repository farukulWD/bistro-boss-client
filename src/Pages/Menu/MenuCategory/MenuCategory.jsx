import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Button from "../../../Components/Buttons/Button";

const MenuCategory = ({ items, title, coverImg, description }) => {
  return (
    <>
      {title && (
        <Cover img={coverImg} title={title} description={description} />
      )}
      <div className="grid md:grid-cols-2 gap-5 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <Button btnText="ORDER YOUR FAVOURITE FOOD" />
      </Link>
    </>
  );
};

export default MenuCategory;
