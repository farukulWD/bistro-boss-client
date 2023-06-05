import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { useAuth } from "../../Hooks/useAuth";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const [axiosSecure] = useAxiosSecure();
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCard = () => {
    if (user && user.email) {
      const cardItem = {
        foodItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      axiosSecure.post(`/carts`, cardItem).then((data) => {
        if (data.data.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food Added on the card",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please Login and Order To The Food",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 rounded-none shadow-xl">
      <figure className="">
        <img src={image} alt="Shoes" className="w-[424px] h-[300px]" />
      </figure>
      <p className="absolute right-0 px-3 py-2 rounded-lg mt-4 mr-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => {
              handleAddToCard(item);
            }}
            className="btn btn-outline border-0  border-b-4"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
