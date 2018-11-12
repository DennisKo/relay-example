/**
 * @flow
 * @relayHash 96883d3b84e488d4a68f15519a600558
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type User_user$ref = any;
export type Language = "DE_DE" | "EN_GB" | "EN_US" | "%future added value";
export type AppUserQueryVariables = {|
  id: string,
  lang?: ?Language,
|};
export type AppUserQueryResponse = {|
  +user: ?{|
    +$fragmentRefs: User_user$ref
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
  $lang: Language
) {
  user(id: $id) {
    ...User_user
    id
  }
}

fragment User_user on User {
  id
  email
  domains(language: $lang) {
    ...Domains_domains
    id
  }
}

fragment Domains_domains on Domain {
  id
  ...Domain_domain
}

fragment Domain_domain on Domain {
  id
  url
  icon {
    ...DomainIcon_icon
    id
  }
}

fragment DomainIcon_icon on FavIcon {
  id
  data
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "lang",
    "type": "Language",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppUserQuery",
  "id": null,
  "text": "query AppUserQuery(\n  $id: ID!\n  $lang: Language\n) {\n  user(id: $id) {\n    ...User_user\n    id\n  }\n}\n\nfragment User_user on User {\n  id\n  email\n  domains(language: $lang) {\n    ...Domains_domains\n    id\n  }\n}\n\nfragment Domains_domains on Domain {\n  id\n  ...Domain_domain\n}\n\nfragment Domain_domain on Domain {\n  id\n  url\n  icon {\n    ...DomainIcon_icon\n    id\n  }\n}\n\nfragment DomainIcon_icon on FavIcon {\n  id\n  data\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppUserQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": v1,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "User_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppUserQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": v1,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v2,
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
            "args": [
              {
                "kind": "Variable",
                "name": "language",
                "variableName": "lang",
                "type": "Language"
              }
            ],
            "concreteType": "Domain",
            "plural": true,
            "selections": [
              v2,
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
                  v2,
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
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '310d7d6ed4de01f7ef9b08bc713ac9e2';
module.exports = node;
