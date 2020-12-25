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
