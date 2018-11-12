/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Domain_domain$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Domains_domains$ref: FragmentReference;
export type Domains_domains = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: Domain_domain$ref,
  +$refType: Domains_domains$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Domains_domains",
  "type": "Domain",
  "metadata": {
    "plural": true
  },
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
      "kind": "FragmentSpread",
      "name": "Domain_domain",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'aa54dcdba8d2f67a4d7c33a0cd753a4a';
module.exports = node;
