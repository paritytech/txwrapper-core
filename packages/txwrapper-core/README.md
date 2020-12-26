<br /><br />

<h1 align="center">@substrate/txwrapper-core</h1>
<h4 align="center">Core components for creating a txwrapper lib.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@substrate/txwrapper-orml">
    <img alt="npm" src="https://img.shields.io/npm/v/@substrate/txwrapper-core.svg" />
  </a>
  <a href="https://github.com/paritytech/txwrapper-core/actions">
    <img alt="Github Actions" src="https://github.com/paritytech/txwrapper-core/workflows/pr/badge.svg" />
  </a>
  <a href="https://david-dm.org/paritytech/txwrapper-core">
    <img alt="david-dm" src="https://img.shields.io/david/paritytech/txwrapper-core.svg" />
  </a>
</p>

<br /><br />

```bash
yarn add @substrate/txwrapper-core
```

In a JS/TS index file of package:

```typescript
import { methods as ORMLMethods } from '@substrate/txwrapper-orml';

// Export methods of pallets included in the chain's runtime.
export const methods = {
	currencies: ORMLMethods.currencies,
};
```

Have a look at the [txwrapper creation guide for chain builders](../../CHAIN_BUILDER.md) to see more guidance on how to use this package to build a chain specific txwrapper.
