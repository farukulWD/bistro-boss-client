import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTap = ({ items }) => {
  // TODO Pagination here
  return (
    <div className="grid md:grid-cols-2 px-2 lg:grid-cols-3 gap-6 my-6">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTap;
