import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  return (
    <div>
      <h2>This is all users {users.length}</h2>
    </div>
  );
};

export default AllUsers;