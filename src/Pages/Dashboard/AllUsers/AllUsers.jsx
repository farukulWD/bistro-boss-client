import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { ImBin } from "react-icons/im";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(
      `https://bistro-boss-server-farukulwd.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete user",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://bistro-boss-server-farukulwd.vercel.app/user/delete/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
            }
            refetch();
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss || Users</title>
      </Helmet>
      <h4 className="text-3xl font-semibold">Total Users: {users.length}</h4>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role == "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-orange-400 text-white text-xl "
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
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
  );
};

export default AllUsers;
