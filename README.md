# txwrapper packages

## Table of contents

- Overview
- End user guides
- Packages
- Chain builder guides
- Hack and maintain txwrapper-core

## Overview

The polkadot.js based txwrapper suite of packages provides chain builders with the tools to quickly create, test, and maintain a library of helper function offline transaction generation with their chain. For example, those looking to construct a transaction offline on Kusama or Polkadot would require @substrate/txwrapper-polkadot.

### Packages

#### Published

- [@substrate/txwrapper-polkadot](/packages/txwrapper-polkadot/README.md) Helper functions for Polkadot, Kusama, Rococo and Westend offline transaction generation.
- [@substrate/txwrapper-core](/packages/txwrapper-core/README.md) The essentials for creating a chain specific txwrapper lib.
- [@substrate/txwrapper-registry](/packages/txwrapper-registry/README.md) Registry creation support, catering to chains with types in [@polkadot/apps-config](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/README.md)
- [@substrate/txwrapper-substrate](/packages/txwrapper-substrate/README.md) Selected dispatchables of Substrate pallets, to be re-exported by chain specific libs (e.g. @substrate/txwrapper-polkadot)
- [@substrate/txwrapper-orml](/packages/txwrapper-orml/README.md) Selected dispatchables of ORML pallets, to be re-exported by chain specific libs (e.g. @substrate/txwrapper-acala)

#### Non-published

- [@substrate/txwrapper-example](/packages/txwrapper-example/README.md) Usage examples including how to construct, sign, and send an extrinsic with @substrate/txwrapper-polkadot
- [@acala-network/txwrapper-acala](/packages/txwrapper-acala/README.md) PoC of how a `FRAME`-based chain can leverage txwrapper packages to create a txwrapper lib. N.B. This is only temporary and will likely move soon

## End user guides

## Chain builder guides

## Hack and maintain txwrapper-core

### Develop

Install dependencies:

```bash
yarn install
```

Build all packages with distribution settings:

```bash
yarn run build
```

Run all tests:

```bash
yarn run test
```

### Contribute

We welcome contributions. Before submitting your PR, make sure to run the following commands:

- `yarn docs`: Will generate docs based on code comments.
- `yarn test`: Make sure all tests pass.
- `yarn lint`: Make sure your code follows our linting rules. You can also run `yarn lint --fix` to automatically fix some of those errors.

### Publish

Publish with lerna by running:

```bash
yarn deploy
```
