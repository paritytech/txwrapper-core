# txwrapper creation guide for chain builders

This guide walks through the steps that a chain builder will need to take in order to create, publish, and maintain a chain specific txwrapper package.

## Table of contents

- [Motivation](#motivation)
- [Note](#note)
- [Template project](#template-project)
- [Steps](#steps)
- [Create `getRegistry`](#create-getregistry)
- [Adding a method](#adding-a-method)

## Motivation

**Why would I want to create a txwrapper for my chain?**

Creating a txwrapper package will expand the offline signing options for users of your chain. This is important for security conscious users who need to facilitate transaction signing, construction and/or decoding with an air-gapped device(s). This includes (but is not limited to) custodians, exchanges, and cold storage users.

## Note

This guide has very specific instructions on how to structure the public API of a chain's txwrapper package. This approach is taken so existing txwrapper users can easily integrate new txwrappers. Feel free to open a github issue in this repo to discuss any of these aspects.

## Template project

The [txwrapper-template](packages/txwrapper-template) directory is provided to use as a starting point for your own package.

## Steps

**Note:** Prior to building a txwrapper for your own chain we highly encourage you to take a look at the [txwrapper-examples](/packages/txwrapper-examples/README.md). Make sure you understand at least the Polkadot example and take a look at the `txwrapper-core` methods an end user is expected to use (see `decode`, `construct.{signingPayload, signedTx, txHash}`). You package will be re-exporting these so take care to understand the public API you will create.

1) **Create a repo from the template**
For this demo we will assume you have copied the [txwrapper-template](packages/txwrapper-template) directory, are using the yarn package manager, and have the repos remote on github. In the repo we give you the basics of a typescript package near ready for being published to NPM. The exports show some methods that are relevant to a `FRAME` based chain using at least the `balances`, `proxy`, and `utility` pallets. We re-export all of txwrapper-core at the top level to give the user access to its tools.

1) **Update the template**
Update `package.json` to reflect your chains information. You need to modify the following fields with relevant information: `name`, `author`, `description`, `repository`, `bugs`, `homepage`, and `private` (mark as false). Additionally, you will need to add the following field to give publishing permission:

    ```JSON
      "publishConfig": {
        "access": "public"
      },
    ```

1) **Choose relevant methods to re-export**
You will need to choose what pallet methods you want your txwrapper to expose. We recommend choosing methods that are likely to be signed by keys stored offline. If you just need methods from Substrate or ORML pallets, checkout [txwrapper-substrate](packages/txwrapper-substrate/README.md) and [txwrapper-orml](packages/txwrapper-orml/README.md) to see if the methods are already defined.
    - If a method is already defined in txwrapper-substrate or txwrapper-orml you can simply re-export methods.{pallet name} as a property in the `method` object export. (This will re-export all the methods defined for that pallet, which should be fine as long as you are not using a modified version of the pallet).
    - If a Substrate or ORML pallet method you need is not already defined you can either make a github issue or submit a PR in this repo for the new method.
    - If you need methods that do not exist in a Substrate or ORML pallet you have to add what you need directly to your package. See the [Adding a method](#adding-a-method) section for details.
    - The template already imports @substrate/txwrapper-substrate, but if you do not need any methods from Substrate pallets feel free to remove that dependency.

1) **Create a `getRegistry` function**
Your txwrapper will need to export a `getRegistry` method so users can get a polkadot-js `TypeRegistry` with the most up-to-date types for your chain. There are two primary options for how to approach this:
    1) Create your own `getRegistry` method, pulling types directly from your chain's type package (or simply defining the types directly in txwrapper). This is the recommended approach as it reduces supply-chain complexity for your chain's types. Using txwrapper-registry the supply-chain for types would be: `@your-chain/types => @polkadot/apps-config => @substrate/txwrapper-regsitry => @your-chain/txwrapper-your-chain`. If you define your own `getRegistry` method and import types directly your supply-chain for types is reduced to: `@your-chain/types => @your-chain/txwrapper-your-chain`. See the [Create `getRegistry`](#create-getregistry) section for details on how to implement a `getRegistry` function.
    1) Leave the template as is, re-exporting `getRegistry` from txwrapper-registry. txwrapper-registry gets chain types from @polkadot/apps-config, so your chain will need to have its most recent types defined in @polkadot/apps-config.

1) **Create a working example**
Create an end-to-end example so users have a clear understanding of the full flow for offline transaction generation for your chain. A good example can ease user friction and reduce workload for maintainers.
In the template we provide an example directory that has all the pieces you need to create a running example. You need to rename `template-example.ts` to something appropriate to your chain and update all the sections in the file marked `TODO`. The file `examples/README.md` will need to be updated as well in the sections marked `TODO`. Finally, make sure the example is fully runable using a development node for your chain.

1) **Publish**
Prior to publishing, make sure the package works locally, ([npm pack](https://docs.npmjs.com/cli/v6/commands/npm-pack) command may be useful) and that the versioning makes sense. Once you complete those tasks go ahead and [publish your package to NPM](https://docs.npmjs.com/cli/v6/commands/npm-publish).

1) **Maintain**
Keep dependencies up to date, paying special attention to security vulnerability warnings.
If polkadot-js API types for your chain are coming from @polkadot/apps-config you may need to update the `package.json` [resolutions](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/) with the @polkadot/apps-config version that includes your chain's latest types.
Also keep in mind that if method signatures change (e.g. arguments were added/removed or the return value changed), the corresponding txwrapper method definition will need to be updated as well.

## Create `getRegistry`

In this example we will build a `getRegistry` function, using polkadot-js api types imported directly from a chain's type-definitions package. We use the fictional foo network for this example, but with some small modifications this example can be applied to any `FRAME`-based chain that plays friendly with polkadot-js types.

```typescript
// src/index.ts

import { typesBundleForPolkadot } from '@foo-network/type-definitions';
import { OverrideBundleType } from '@polkadot/types/types';
import {
  getRegistryBase,
  GetRegistryOptsCore,
  getSpecTypes,
  TypeRegistry,
} from '@substrate/txwrapper-core';

// As a convenience to users we can provide them with hardcoded chain properties
// as these rarely change.
/**
 * `ChainProperties` for networks that txwrapper-foo supports. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty safe to hardcode them.
 */
const KNOWN_CHAIN_PROPERTIES = {
  foo: {
    ss58Format: 3,
    tokenDecimals: 18,
    tokenSymbol: 'FOO',
  },
  bar: {
    ss58Format: 42,
    tokenDecimals: 18,
    tokenSymbol: 'FOO',
  },
};

// We override the `specName` property of `GetRegistryOptsCore` in order to get narrower type specificity,
// hopefully creating a better experience for users.
/**
 * Options for the `getRegistry` function.
 */
export interface GetRegistryOpts extends GetRegistryOptsCore {
  specName: keyof typeof KNOWN_CHAIN_PROPERTIES;
}

/**
 * Get a type registry for networks that txwrapper-foo supports.
 *
 * @param GetRegistryOptions specName, chainName, specVersion, and metadataRpc of the current runtime.
 * It also allows you to pass in a `asCallsOnlyArg` boolean. This gives you the options to reduce
 * the size of the metadata passed in to only include the calls. This will overall reduce the size of the
 * unsigned transaction.
 */
export function getRegistry({
  specName,
  chainName,
  specVersion,
  metadataRpc,
  properties,
  asCallsOnlyArg
}: GetRegistryOpts): TypeRegistry {
  const registry = new TypeRegistry();
  registry.setKnownTypes({
    // If your types are not packaged in the `OverrideBundleType` format, you can
    // specify types in any of the formats supported by `RegisteredTypes`:
    // https://github.com/polkadot-js/api/blob/4ff9b51af2c49294c676cc80abc6476565c70b11/packages/types/src/types/registry.ts#L59
    typesBundle: (typesBundleForPolkadot as unknown) as OverrideBundleType,
  });

  return getRegistryBase({
    chainProperties: properties || KNOWN_CHAIN_PROPERTIES[specName],
    specTypes: getSpecTypes(registry, chainName, specName, specVersion),
    metadataRpc,
    asCallsOnlyArg
  });
}
```

## Adding a method

In some circumstances you may want to add a method for a pallet that does not exist in Substrate or ORML. As an example we will build and test the [ORML `Currencies` pallet's `transfer` method](https://github.com/open-web3-stack/open-runtime-module-library/blob/de2c87064161595b5f6cc9d3e163e576247ff88f/currencies/src/lib.rs#L143-L169).

Note: you will need to create unit tests as well to ensure consistent serialization/deserialization. Creating unit tests is a bit more involved and we do not go into detail here. Take a look at [packages/txwrapper-orml/src/methods/currencies/transfer.spec.ts](packages/txwrapper-orml/src/methods/currencies/transfer.spec.ts) for an example of how unit testing is done using `jest`. Among other things, you will need static metadata stored in the repo to use as the `metadataRpc`, which is used to create the type registry, and passed in as options to the method. In general, the unit tests follow a consistent pattern and should be understandable by looking at all the components.

```typescript
// src/methods/currencies/transfer.ts

import {
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '@substrate/txwrapper-core';

// We take care to build an explicit interface with docstrings that will make it easy for users to
// understand the arguments they need to provide (docstrings also play nice with IDEs).
//
// For choosing what type to give each argument it is very helpful to look at the auto-generated
// typing that polkadot-js typegen creates for each method. In this case, we can refer to the types generated
// for Acala since the runtime uses the ORML currencies pallets. We find the definitions here:
// https://github.com/AcalaNetwork/acala.js/blob/4fe5881058003fdb5bc9e3b0c505f3846426db96/packages/types/src/interfaces/augment-api-tx.ts#L213
//
// Note: An `augment-api-tx.ts` file (where we find this definitions) is generated by polkadot-js typegen: 
// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface CurrenciesTransferArgs {
  /**
   * The recipient address, SS58 encoded.
   */
  dest: string;
  /**
   * The amount to send.
   */
  amount: number | string;
  /**
   * The `CurrencyId` of the token to send.
   */
  currencyId: string | { Token: string } | { DEXShare: string };
}

// Define the method
export function transfer(
  args: CurrenciesTransferArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'transfer',
        pallet: 'currencies',
      },
      ...info,
    },
    options
  );
}
```

```typescript
// src/methods/currencies/index.ts

// export the method, effectively making available under the `currencies` namespace
export * from './transfer';
```

```typescript
// src/methods

// Export everything from within `methods`, including the `currencies` namespace, making it so we can
// access the method via `methods.currencies.transfer`
export * as methods from './methods';
```

Once it is successfully passing unit tests and it works against a dev node it should be good to go.
