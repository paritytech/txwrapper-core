# txwrapper-core

Tools for FRAME chain builders to publish chain specific offline transaction generation libraries.

## Table of contents

- [Overview](#overview)
- [End user examples](packages/txwrapper-examples/README.md)
- [Chain builder guide](CHAIN_BUILDER.md)
- [Develop, contribute, and maintain](#develop-contribute-and-maintain)

## Overview

The polkadot.js based txwrapper suite of packages provides chain builders with the tools to quickly create, test, and maintain a library of helper functions for offline transaction generation with their chain. End users can then use these chain specific packages to create an offline transaction workflow. (We sometimes refer to chain specific libs as txwrappers.)

For example, those looking to construct a transaction offline on Polkadot would require @substrate/txwrapper-polkadot. @substrate/txwrapper-polkadot is built by requiring @substrate/txwrapper-core, @substrate/txwrapper-registry, @substrate/txwrapper-substrate and re-exporting utilities and dispatchables relevant to Polkadot.

### Packages

#### Published

- [@substrate/txwrapper-polkadot](/packages/txwrapper-polkadot/README.md) Helper functions for offline transaction generation for polkadot relay and system chains; specifically the following chains: Polkadot, Kusama, Rococo, Westend, Statemint and Statemine .
- [@substrate/txwrapper-core](/packages/txwrapper-core/README.md) The essentials for creating a chain specific txwrapper lib.
- [@substrate/txwrapper-registry](/packages/txwrapper-registry/README.md) Registry creation support, catering to chains with types in [@polkadot/apps-config](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/README.md).
- [@substrate/txwrapper-substrate](/packages/txwrapper-substrate/README.md) Selected dispatchables of Substrate pallets, to be re-exported by txwrappers (e.g. @substrate/txwrapper-polkadot).
- [@substrate/txwrapper-orml](/packages/txwrapper-orml/README.md) Selected dispatchables of ORML pallets, to be re-exported by txwrappers (e.g. txwrapper-acala).

#### Non-published

- [@substrate/txwrapper-example](/packages/txwrapper-examples/README.md) Usage examples including how to construct, sign, and decode an extrinsic with @substrate/txwrapper-polkadot.
- [@substrate/txwrapper-template](/packages/txwrapper-template/README.md) Template package for chain builders.
- [txwrapper-acala](/packages/txwrapper-acala/README.md) PoC of how a `FRAME`-based chain can leverage txwrapper packages to create a txwrapper. **N.B.** This is only for PoC usage and not intended to be published by txwrapper-core repo maintainers.

## End user examples

[Click here for examples on how to use txwrappers for constructing, signing, and decoding transactions.](packages/txwrapper-examples/README.md)

## Chain builder guide

[Click here to find our guide for chain builders.](CHAIN_BUILDER.md) The guide explains how to make a chain specific txwrapper.

## Develop, contribute, and maintain

### Develop

Install dependencies:

```bash
yarn install
```

Build all packages:

```bash
yarn run build
```

### Contribute

We welcome contributions!

#### Before submitting your PR, make sure to run the following commands

Run all tests:

```bash
yarn run test
```

Run the linter:

```bash
yarn run lint

# or to automatically fix warnings:

yarn run lint --fix
```

### Maintain

Bump `polkadot-js` scoped deps

```bash
yarn up "@polkadot/*"
```

Publish with lerna by running:*

```bash
yarn run deploy
```

**N.B.** Ensure you have [`GH_TOKEN` env variable set](https://github.com/lerna/lerna/tree/main/commands/version#--create-release-type) to a GitHub personal access token (PAT) so lerna can publish the release on github.

*The publisher will need publishing permissions to the @substrate npm org.
