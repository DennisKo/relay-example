import React from "react";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import DomainIcon from "./DomainIcon";

const Domain = ({ domain }) => {
  return (
    <li>
      <DomainIcon icon={domain.icon} url={domain.url} />
      {domain.url}
    </li>
  );
};

export default createFragmentContainer(Domain, {
  domain: graphql`
    fragment Domain_domain on Domain {
      id
      url
      icon {
        ...DomainIcon_icon
      }
    }
  `
});
