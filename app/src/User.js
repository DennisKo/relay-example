import React from "react";
import Domains from "./Domains";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";

const User = ({ user }) => {
  return (
    <div>
      <div>ID: {user.id}</div>
      <div>Email: {user.email}</div>
      <Domains domains={user.domains} />
    </div>
  );
};

export default createFragmentContainer(User, {
  user: graphql`
    fragment User_user on User {
      id
      email
      domains(language: $lang) {
        ...Domains_domains
      }
    }
  `
});
