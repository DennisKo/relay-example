import React, { Component } from "react";
import graphql from "babel-plugin-relay/macro";
import environment from "./environment";
import { QueryRenderer } from "react-relay";
import User from "./User";

const AppQuery = graphql`
  query AppUserQuery($id: ID!) {
    user(id: $id) {
      id
      email
      domains {
        id
        url
        icon {
          id
          data
        }
      }
    }
  }
`;

class App extends Component {
  state = {
    selectedId: 1
  };
  handleChange = e => {
    this.setState({ selectedId: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <select
          name="users"
          value={this.state.selectedId}
          onChange={this.handleChange}
        >
          <option value="1">Dennis</option>
          <option value="2">Peter</option>
          <option value="3">Petra</option>
        </select>
        <QueryRenderer
          environment={environment}
          query={AppQuery}
          variables={{ id: this.state.selectedId }}
          render={({ error, props }) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            return <User user={props.user} />;
          }}
        />
      </div>
    );
  }
}

export default App;
