# txwrapper-core

Tools for FRAME chain builders to publish chain specific offline transaction generation libraries.

## Table of contents

- [Overview](#overview)
- [Modules](#modules)
- [End user examples](packages/txwrapper-examples/README.md)
- [Chain builder guide](CHAIN_BUILDER.md)
- [Develop, contribute, and maintain](#develop-contribute-and-maintain)

## Overview

The polkadot.js based txwrapper suite of packages provides chain builders with the tools to quickly create, test, and maintain a library of helper functions for offline transaction generation with their chain. End users can then use these chain specific packages to create an offline transaction workflow. (We sometimes refer to chain specific libs as txwrappers.)

For example, those looking to construct a transaction offline on Polkadot would require @substrate/txwrapper-polkadot. @substrate/txwrapper-polkadot is built by requiring @substrate/txwrapper-core, @substrate/txwrapper-registry, @substrate/txwrapper-substrate and re-exporting utilities and dispatchables relevant to Polkadot.

### Packages

#### Published

- [@substrate/txwrapper-polkadot](/packages/txwrapper-polkadot/README.md) Helper functions for offline transaction generation for polkadot relay and system chains; specifically the following chains: Polkadot, Kusama, Rococo, Westend, Asset Hub Polkadot and Asset Hub Kusama.
- [@substrate/txwrapper-core](/packages/txwrapper-core/README.md) The essentials for creating a chain specific txwrapper lib.
- [@substrate/txwrapper-registry](/packages/txwrapper-registry/README.md) Registry creation support, catering to chains with types in [@polkadot/apps-config](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/README.md).
- [@substrate/txwrapper-substrate](/packages/txwrapper-substrate/README.md) Selected dispatchables of Substrate pallets, to be re-exported by txwrappers (e.g. @substrate/txwrapper-polkadot).
- [@substrate/txwrapper-orml](/packages/txwrapper-orml/README.md) Selected dispatchables of ORML pallets, to be re-exported by txwrappers (e.g. txwrapper-acala).

#### Non-published

- [@substrate/txwrapper-dev](/packages/txwrapper-dev/README.md) Exported development helpers such as registries and metadata.
- [@substrate/txwrapper-example](/packages/txwrapper-examples/README.md) Usage examples including how to construct, sign, and decode an extrinsic with @substrate/txwrapper-polkadot.
- [@substrate/txwrapper-template](/packages/txwrapper-template/README.md) Template package for chain builders.

## Modules

- [txwrapper-core/src](modules/txwrapper_core_src.md)
- [txwrapper-polkadot/src](modules/txwrapper_polkadot_src.md)
- [txwrapper-substrate/src](modules/txwrapper_substrate_src.md)

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

#### Commits

All the commits in this repo follow the [Conventional Commits spec](https://www.conventionalcommits.org/en/v1.0.0/#summary). When merging a PR, make sure 1) to use squash merge and 2) that the title of the PR follows the Conventional Commits spec.

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

### Maintenance

#### Yarn

Txwrapper-core runs on yarn berry. It is a package manager local to the repo, and requires updating from time to time. The releases for yarn berry can be found [here](https://github.com/yarnpkg/berry/releases). Below are the steps to updating yarn. 

```bash
$ yarn set version <version>
$ yarn
$ yarn dedupe
```

### Release & Publishing

#### Preparation

1. Ensure that your version of `npm` is 7 or above. Check with `npm --version` and, if needed, upgrade with `npm install -g npm` (which may need to be prefixed with `sudo` depending on the permissions set on your global `node_modules` folder). **If this is not true, an empty binary will be pushed on publish.**

2. Checkout a branch `name-update-deps`.

3. In order to update all the polkadot-js dependencies and resolutions, run `yarn up '@polkadot/*'`.

5. Ensure there are no issues by running the following commands. If any type errors occur due to the updated dependencies, please file an issue [here](https://github.com/paritytech/txwrapper-core/issues).

    ```bash
    yarn run build
    yarn dedupe
    yarn run test
    yarn run lint
    ```

6. If all tests pass and all packages build successfully, commit your changes with the following format `fix(types): Update polkadot-js deps to get the latest types`. Then push your branch up to Github for review, then merge. The release tooling takes care of bumping the version so no need for a manual update (see below).

#### Publishing

This libraries release process uses Lerna, and the following below is required to have a successful release.

* **N.B.** Ensure you have [`GH_TOKEN` env variable set](https://github.com/lerna/lerna/tree/main/commands/version#--create-release-type) to a GitHub personal access token (PAT) so lerna can publish the release on github.

* The publisher will need publishing permissions to the @substrate npm org.

1. Make sure you're logged in to `npm` using `npm login`.

2. Make sure to be in the `main` branch, and `git pull origin main`.

3. Before deploying a new release run the following sanity checks.

    ```bash
    yarn run build
    yarn run test
    ```

4. Deploy the new release. It is important to note there will be a step that asks you to confirm whether or not the version bump is correct. Please confirm with the maintainers the suggested versions are correct.

    ```bash
    yarn run deploy
    ```

    **NOTES:**

    This repo requires signed and verified commits, so when using a yubikey there are several points where you are required to sign a commit while Lerna sets up the github release. The output from Lerna won't warn you that you have to sign it, so the `deploy` step will error if you forget. I'd advise keeping an eye on your Yubikey; it'll start flashing when it's needed to sign something.

    If you don't sign a commit in time and get an error, you may need to "undo" some steps:
    - If a new commit was created locally, `git reset --hard HEAD~1` to undo it.
    - If a new tag was created locally, `git tag -d <new-version>` to remove it.
    - If `lerna-debug.log` was created, `rm -rf lerna-debug.log` to remove it.

    If you forget to login to NPM, the GitHub steps will all complete successfully, but the publishing step will fail. In that case, you can do the following:
    - run `yarn run build` to ensure that all packages are built and ready to be published (**This is important; `yarn run deploy` does this for us, but if we skip to publishing, we must ensure that the packages are in a good state ourselves**).
    - run `npx lerna publish from-package` to publish the packages.

    If you don't have the permissions you need on the GitHub repository, you may find that you're able to push a tag but not the actual commit. In this case, you can delete the version tag on GitHub with `git push origin :<new-version>`.