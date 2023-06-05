import { Helmet } from "react-helmet-async";

import useCart from "../../../Hooks/useCart";
import { ImBin } from "react-icons/im";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCard = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://bistro-boss-server-farukulwd.vercel.app/carts/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your food has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full px-2">
      <Helmet>
        <title>Bistro boss | MyCart</title>
      </Helmet>
      <section className="">
        <div className="mx-auto  text-center my-10">
          <p className="text-[#d99904] my-2">---My Cart---</p>
          <h2 className="text-4xl uppercase border-y-4 py-3">
            WANNA ADD MORE?
          </h2>
        </div>

        <div className="flex justify-evenly h-16 items-center gap-6">
          <h3 className="text-3xl font-bold">Total order: {cart.length}</h3>
          <h3 className="text-3xl font-bold">Total Price: ${total}</h3>
          <Link to="/dashboard/payment">
            <button className="btn btn-xs bg-[#d1a054] text-white">Pay</button>
          </Link>
        </div>

        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td className="text-right">${item.price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn bg-[#b91c1c] text-white text-xl "
                      >
                        <ImBin></ImBin>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyCard;
