import React from "react";

const Domains = ({ domains }) => {
  return (
    <div>
      <div>
        Domains:
        <ul>
          {domains.map(domain => (
            <li key={domain.id}>
              <img width="15px" alt={domain.url} src={domain.icon.data} />
              {domain.url}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Domains;
