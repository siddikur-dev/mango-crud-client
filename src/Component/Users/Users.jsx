import React, { useState } from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const initialUser = useLoaderData();
  const [users, setUsers] = useState(initialUser);
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
                      <div className="text-sm opacity-50">{user.Address}</div>
                    </div>
                  </div>
                </td>
                <td>{user.job}</td>
                <td>{user.favoriteColor}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
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
