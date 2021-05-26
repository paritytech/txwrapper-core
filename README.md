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

- [@substrate/txwrapper-polkadot](/packages/txwrapper-polkadot/README.md) Helper functions for offline transaction generation for polkadot relay and system chains; specifically the following chains: Polkadot, Kusama, Rococo, Westend, Statemint and Statemine.
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

### Release & Publishing

#### Preparation

1. Checkout a branch `name-update-deps`, and ensure we have the latest polkadot-js dependencies by running the command below. If all packages are already up to date you may skip to the "Publishing" section below.

```bash
yarn up "@polkadot/*"
```

2. Ensure there are no issues by running the following commands. If any type errors occur due to the updated dependencies, you may file an issue [here](https://github.com/paritytech/txwrapper-core/issues).

```bash
yarn run build
yarn run test
yarn run lint
```

3. If all tests pass and all packages build successfully, commit your changes with the following format `fix(types): Update polkadot-js deps to get the latest types`. Then push your branch up to Github for review, then merge. 

#### Publishing

This libraries release process uses Lerna, and the following below is required to have a successful release.  

* **N.B.** Ensure you have [`GH_TOKEN` env variable set](https://github.com/lerna/lerna/tree/main/commands/version#--create-release-type) to a GitHub personal access token (PAT) so lerna can publish the release on github.

* The publisher will need publishing permissions to the @substrate npm org.

1. Make sure to be in the `main` branch, and `git pull origin main`. 

2. Before deploying a new release run the following sanity checks.

```bash
yarn run build
yarn run test
```

3. Deploy the new release.

```bash
yarn run deploy
```
