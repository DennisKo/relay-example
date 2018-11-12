/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type DomainIcon_icon$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Domain_domain$ref: FragmentReference;
export type Domain_domain = {|
  +id: string,
  +url: ?string,
  +icon: ?{|
    +$fragmentRefs: DomainIcon_icon$ref
  |},
  +$refType: Domain_domain$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Domain_domain",
  "type": "Domain",
  "metadata": null,
  "argumentDefinitions": [],
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
        {
          "kind": "FragmentSpread",
          "name": "DomainIcon_icon",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '630354bc6d84468160e81c4673c1e41d';
module.exports = node;
