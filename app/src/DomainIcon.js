import React from "react";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";

const DomainIcon = ({ icon, url }) => {
  return <img width="15px" alt={url} src={icon.data} />;
};

export default createFragmentContainer(DomainIcon, {
  icon: graphql`
    fragment DomainIcon_icon on FavIcon {
      id
      data
    }
  `
});
