<br /><br />

<h1 align="center">@substrate/txwrapper-polkadot</h1>
<h4 align="center">Helper functions for Polkadot, Kusama, Rococo and Westend offline transaction generation.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@substrate/txwrapper-polkadot">
    <img alt="npm" src="https://img.shields.io/npm/v/@substrate/txwrapper-polkadot.svg" />
  </a>
  <a href="https://github.com/paritytech/txwrapper-core/actions">
    <img alt="Github Actions" src="https://github.com/paritytech/txwrapper-core/workflows/pr/badge.svg" />
  </a>
  <a href="https://david-dm.org/paritytech/txwrapper-core">
    <img alt="david-dm" src="https://img.shields.io/david/paritytech/txwrapper-core.svg" />
  </a>
</p>

<br /><br />

# About

Txwrapper library for polkadot relay and system chains; specifically Polkadot, Kusama, Rococo, Westend, Asset Hub Polkadot and Asset Hub Kusama.

Note: not all methods available apply to all supported chains. To check what methods are supported by a chain consult the pallets included in chain's runtime.


## Get Started

```bash
yarn add @substrate/txwrapper-polkadot
```

In a JS/TS file:

```typescript
import {
  construct,
  methods,
} from '@substrate/txwrapper-polkadot';

const unsigned = methods.balance.transfer(
  {
    dest: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP',
    value: 100,
  },
  {
    // Additional information needed to construct the transaction offline.
  }
);

const signingPayload = construct.signingPayload(unsigned, { registry });
// On your offline device, sign the payload.
const signature = myOfflineSigning(signingPayload);

// `tx` is ready to be broadcasted.
const tx = construct.signedTx(unsigned, signature, { metadataRpc, registry });
```

Have a look at the [examples](/packages/txwrapper-examples/README.md) to see how you can perform the whole lifecycle of a transaction, from generation to signing to broadcast.
