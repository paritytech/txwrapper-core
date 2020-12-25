<br /><br />

<h1 align="center">@substrate/txwrapper-orml</h1>
<h4 align="center">Selected dispatchables of ORML pallets, to be re-exported by chain specific txwrappers</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@substrate/txwrapper-orml">
    <img alt="npm" src="https://img.shields.io/npm/v/@substrate/txwrapper-core.svg" />
  </a>
  <a href="https://github.com/paritytech/txwrapper/actions">
    <img alt="Github Actions" src="https://github.com/paritytech/txwrapper-core/workflows/pr/badge.svg" />
  </a>
  <a href="https://david-dm.org/paritytech/txwrapper">
    <img alt="david-dm" src="https://img.shields.io/david/paritytech/txwrapper-core.svg" />
  </a>
</p>

<br /><br />

```bash
yarn add @substrate/txwrapper-orml
```

In a JS/TS index file of package:

```typescript
// Rexport all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
export * from '@substrate/txwrapper-core';
```

Have a look at the [txwrapper creation guide for chain builders](../../CHAIN_BUILDER.md) to see more guidance on how to use this package in a chain specific txwrapper.
