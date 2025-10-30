import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { auth } from "../../firebase/firebase.init";
import Swal from "sweetalert2";

const Users = () => {
  const initialUser = useLoaderData();
  const { deletedUser } = use(AuthContext);
  const [users, setUsers] = useState(initialUser);
  //   handle delete
  const handleDelete = (id) => {
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
        // এখনই DELETE রিকোয়েস্ট যাবে
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingUser = users.filter((user) => user._id !== id);
              setUsers(remainingUser);

              // Firebase থেকে delete
              deletedUser(auth.currentUser)
                .then(() => {
                  Swal.fire({
                    title: "Deleted!",
                    text: "User deleted successfully.",
                    icon: "success",
                  });
                })
                .catch((error) => {
                  console.log("Firebase delete error:", error);
                });
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl text-center">All Users:{users.length} </h2>
      {users.map((user, i) => {
        return (
          <table key={user._id} className="table">
            <tbody>
              <tr>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.PhotoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.Name}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td>{user.job}</td>
                <td>{user.favoriteColor}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">edit</button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    delete
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        );
      })}

      {/* <div className="overflow-x-auto"></div> */}
    </div>
  );
};

export default Users;
