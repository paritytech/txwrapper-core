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

Have a look at the [txwrapper creation guide for chain builders](../../CHAIN_BUILDER.md) to see more guidance on how to use this package to build a chain specific txwrapper.

## Env Variables

This is a list of env variables that are used inside of txwrapper-core.


### `createMetadata` specific env vars.

**Summary**: 
`createMetadata` memoizes the call to ensure metadata is not reallocated in memory if it is the same call.

Methods that actively use `createMetadata` and are affected are:
- `defineMethod`
- `createDecoratedTx`
- `createDecoratedConstants`
- `createSignedTx`
- `decodeSignedTx`
- `decodeSigningPayload`
- `decodeUnsignedTx`

NOTE: `getRegistryBase` uses `createMetadataUnmemoized`

#### `TXWRAPPER_METADATA_CACHE_MAX`

**Summary**: 
Set the max amount of memoized calls we want in the cache. It uses an LRU cache to handle the input and output of values. This takes in an integer. Ex: `export TXWRAPPER_METADATA_CACHE_MAX=10`. This will default to unlimited size if the value is not inputted.

NOTES: 

- It is recommended to use a value greater 2 for the cache size as regressions have been seen in some cases for 2 or lower.

#### `TXWRAPPER_METADATA_CACHE_MAX_AGE`

**Summary**:
Set the TTL (Time To Live) for items in the memoized cache. This takes in an integer in the measurement of milliseconds. Ex: `export TXWRAPPER_METADATA_CACHE_MAX_AGE=1000` for 1 second.
