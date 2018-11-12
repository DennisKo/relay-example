/**
 * @flow
 * @relayHash e98021e8b504b29ff0ab91d2152ad3f9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppUserQueryVariables = {|
  id: string
|};
export type AppUserQueryResponse = {|
  +user: ?{|
    +id: string,
    +email: string,
    +domains: $ReadOnlyArray<?{|
      +id: string,
      +url: ?string,
      +icon: ?{|
        +id: string,
        +data: ?string,
      |},
    |}>,
  |}
|};
export type AppUserQuery = {|
  variables: AppUserQueryVariables,
  response: AppUserQueryResponse,
|};
*/


/*
query AppUserQuery(
  $id: ID!
) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      }
    ],
    "concreteType": "User",
    "plural": false,
    "selections": [
      v1,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "domains",
        "storageKey": null,
        "args": null,
        "concreteType": "Domain",
        "plural": true,
        "selections": [
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "url",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "icon",
            "storageKey": null,
            "args": null,
            "concreteType": "FavIcon",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "data",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppUserQuery",
  "id": null,
  "text": "query AppUserQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    email\n    domains {\n      id\n      url\n      icon {\n        id\n        data\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppUserQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "AppUserQuery",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '36d8a46c2ba20dde6208ea6050396de5';
module.exports = node;
