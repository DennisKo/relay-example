import React, { Component } from "react";
import graphql from "babel-plugin-relay/macro";
import environment from "./environment";
import { QueryRenderer } from "react-relay";
import User from "./User";

const AppQuery = graphql`
  query AppUserQuery($id: ID!, $lang: Language) {
    user(id: $id) {
      ...User_user
    }
  }
`;

class App extends Component {
  state = {
    selectedId: 1,
    language: "EN_US"
  };
  handleChange = e => {
    this.setState({ selectedId: e.target.value });
  };
  handleLanguage = e => {
    this.setState({ language: e.target.value });
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
        <select
          name="languages"
          value={this.state.language}
          onChange={this.handleLanguage}
        >
          <option value={null}>ALLE</option>
          <option value="EN_US">US</option>
          <option value="DE_DE">GB</option>
          <option value="EN_GB">DE</option>
        </select>
        <QueryRenderer
          environment={environment}
          query={AppQuery}
          variables={{
            id: this.state.selectedId,
            lang: this.state.language
          }}
          render={({ error, props }) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            return (
              <div>
                <User user={props.user} />
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
