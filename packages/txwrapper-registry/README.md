<br /><br />

<h1 align="center">@substrate/txwrapper-registry</h1>
<h4 align="center">Registry creation support, catering to chains with types in [@polkadot/apps-config](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/README.md)</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@substrate/txwrapper-registry">
    <img alt="npm" src="https://img.shields.io/npm/v/@substrate/txwrapper-registry.svg" />
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
yarn add @substrate/txwrapper-registry
```

In a JS/TS index file of package:

```typescript
import { getRegistry } from '@substrate/txwrapper-registry';

  // Create Polkadot's type registry.
  const registry = getRegistry({
    chainName: 'Polkadot',
    specName: 'polkadot',
    specVersion: 26,
    metadataRpc,
  });
```

Have a look at the [examples](/packages/txwrapper-examples/README.md) to see how `getRegistry` is used in the whole lifecycle of a transaction, from generation to signing to broadcast.

## **Config**

In order to instantiate a registry with your chains custom types you must pass in the path to your own types bundle file. If you would like to generate a types bundle file and don't know how to, feel free to use this helper library we have created to generate these types. [generate-type-bundle](https://github.com/paritytech/generate-type-bundle).

The following env variable is accepted:

`TX_TYPES_BUNDLE=/path-to-file` - Note: It must be a valid JSON file that has the same structure as the [`OverrideBundleTypes`](https://github.com/polkadot-js/api/blob/master/packages/types/src/types/registry.ts#L75-L78) in polkadot-js.
