<br /><br />

<h1 align="center">@substrate/txwrapper-substrate</h1>
<h4 align="center">Selected dispatchables of Substrate pallets, to be re-exported by chain specific txwrappers</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@substrate/txwrapper-substrate">
    <img alt="npm" src="https://img.shields.io/npm/v/@substrate/txwrapper-substrate.svg" />
  </a>
  <a href="https://github.com/paritytech/txwrapper/actions">
    <img alt="Github Actions" src="https://github.com/paritytech/txwrapper/workflows/pr/badge.svg" />
  </a>
  <a href="https://david-dm.org/paritytech/txwrapper">
    <img alt="david-dm" src="https://img.shields.io/david/paritytech/txwrapper-core.svg" />
  </a>
</p>

<br /><br />

```bash
yarn add @substrate/txwrapper-substrate
```

In a JS/TS file:

```typescript
import { methods as substrateMethods } from '@substrate/txwrapper-substrate';

// Export methods of substrate pallets included in the chain's runtime.
export const methods = {
    balances: substrateMethods.balances,
    utility: substrateMethods.utility,
    proxy: substrateMethods.proxy,
  };
```

Have a look at the [txwrapper creation guide for chain builders](../../CHAIN_BUILDER.md) to see more guidance how to use this package.
