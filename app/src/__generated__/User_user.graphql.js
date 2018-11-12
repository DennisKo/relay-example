/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Domains_domains$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type User_user$ref: FragmentReference;
export type User_user = {|
  +id: string,
  +email: string,
  +domains: $ReadOnlyArray<?{|
    +$fragmentRefs: Domains_domains$ref
  |}>,
  +$refType: User_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "User_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "lang",
      "type": "Language"
    }
  ],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
        {
          "kind": "FragmentSpread",
          "name": "Domains_domains",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7f8e38887b1ea14c1dbd80505b21f9b8';
module.exports = node;
