import React from "react";
import Domains from "./Domains";

const User = ({ user }) => {
  return (
    <div>
      <div>ID: {user.id}</div>
      <div>Email: {user.email}</div>
      <Domains domains={user.domains} />
    </div>
  );
};

export default User;
