import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleMakeAdmin = (user) => {
    console.log(user);
  };
  const handleDelete = (user) => {
    console.log(user);
  };
  return (
    <div className="ml-24 w-full my-24 bg-white p-8">
      <Helmet>
        <title>All users | Bistro - resturan</title>
      </Helmet>
      <h3 className="text-2xl font-semibold mb-6">
        Total users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Role</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-end">
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn -btn-ghost btn-xl bg:hover-none text-orange-600 bg-orange-600 border-0 text-xla"
                  >
                    {user.role === "Admin" ? "Admin" : <FaUserShield />}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-wide bg:hover-none text-red-600 text-xl"
                  >
                    <FaTrashAlt />
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
