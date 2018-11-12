import React from "react";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import Domain from "./Domain";

const Domains = ({ domains }) => {
  return (
    <div>
      Domains:
      <ul>
        {domains.map(domain => (
          <Domain domain={domain} key={domain.id} />
        ))}
      </ul>
    </div>
  );
};

export default createFragmentContainer(Domains, {
  domains: graphql`
    fragment Domains_domains on Domain @relay(plural: true) {
      id
      ...Domain_domain
    }
  `
});
