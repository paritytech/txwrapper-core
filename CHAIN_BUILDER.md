# txwrapper creation guide for chain builders

This guide walks through the steps that a chain builder will need to take in order to create, publish, and maintain a chain specific txwrapper package.

## Motivation: why would I want to create a txwrapper for my chain?

Creating a txwrapper package will expand the offline signing options for users of your chain. This is important for security conscious users who need to facilitate transaction signing, construction and/or decoding with an air-gapped device(s). This includes (but is not limited to) custodians, exchanges, and cold storage users.

## Note

This guide has very specific instructions on how to structure the public API of a chain's txwrapper package. This approach is taken by txwrapper-core's maintainers so users of existing txwrappers can quickly integrate with newly created txwrappers for `FRAME`-based chains. Feel free to open up a github issue in this repo to discuss any of these aspects.

## Template project

We provide the [txwrapper-template](packages/txwrapper-template) directory to use as a starting point for your own package.

## Steps

**Note:** Prior to building a txwrapper for your own chain we highly encourage you to take a look at the [txwrapper-examples](/packages/txwrapper-examples/README.md). Make sure you understand at least the Polkadot example and take a look at the `txwrapper-core` methods an end user is expected to use (see `decode`, `construct.{signingPayload, signedTx, txHash}`). You package will be re-exporting these so take care to understand the public API you will create.

1) **Create a repo from the template**
For this demo we will assume you have copied the [txwrapper-template](packages/txwrapper-template) directory, are using the yarn package manager, and have the repos remote on github. In the repo we give you the basics of a typescript package near ready for being published to NPM. The exports show some methods that are relevant to a `FRAME` based chain using at least the `balances`, `proxy`, and `utility` pallets. We re-export all of txwrapper-core at the top level to give the user access to its tools.

2) **Update the template**
Update `package.json` to reflect your chains information. You need to modify the following fields with relevant information: `name`, `author`, `description`, `repository`, `bugs`, `homepage`, and `private` (mark as false). Additionally, you will need to add the following field to give publishing permission:

    ```JSON
      "publishConfig": {
        "access": "public"
      },
    ```

3) **Choose relevant methods to re-export**
You will need to choose what pallet methods you want your txwrapper to expose. If you just need methods from Substrate or ORML pallets, checkout txwrapper-substrate and txwrapper-orml to see if the methods are already defined.
    - If a method is already defined in txwrapper-substrate or txwrapper-orml you can simply re-export methods.{pallet name} as a property in the `method` object export. (This will re-export all the methods defined for that pallet, which should be fine as long as you are not using a forked version).
    - If a Substrate or ORML pallet method is not already defined you can either make a github issue or submit a PR in this repo for the new method.
    - If you need methods that do not exist in a Substrate or ORML pallet you will then need to add the method directly to your package. See the [Adding a method](#adding-a-method) section for details.
    - The template already requires @substrate/txwrapper-substrate, but if you do not need and methods for Substrate pallets ensure to remove that dependency.

4) **Create a working example**
Create an end-to-end example so users have a clear understanding of the full flow for offline transaction generation for your chain. A good example can ease user friction and reduce workload for maintainers.
In the template we provide an example directory that should have all the pieces to create a running example. You will need to rename `template-example.ts` with your chains name, and update all the areas within the file marked `TODO`. The file `examples/README.md` will need to updated as well in the sections marked `TODO`. Finally, make sure the example is fully run-able using a development node for your chain.

5) **Publish**
  Prior to every publish make sure the package works locally, ([npm pack](https://docs.npmjs.com/cli/v6/commands/npm-pack) command may be useful) and the versioning makes sense. Once you complete those tasks go ahead and [publish your package to NPM](https://docs.npmjs.com/cli/v6/commands/npm-publish).

6) **Maintain**
Keep dependencies up to date, paying special attention to security vulnerability warnings.
If polkadot-js API types for your chain are coming from @polkadot/apps-config you may need to update the `package.json` [resolutions](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/) with the @polkadot/apps-config version that includes your chain's latest types.
Also keep in mind that if method signatures change by adding or removing an argument, the corresponding txwrapper method definition will need to be updated as well.

## Adding a method

In some circumstances you may want to add a methods for a pallet that does not exist in Substrate or ORML. As an example we will build and test the [ORML `Currencies` pallet `transfer` method](https://github.com/open-web3-stack/open-runtime-module-library/blob/de2c87064161595b5f6cc9d3e163e576247ff88f/currencies/src/lib.rs#L143-L169).

Note: you will need to create unit tests as well to ensure consistent serialization/ deserialization. Creating unit tests is a bit more involved and we do not go into detail here. Take a look at [packages/txwrapper-orml/src/methods/currencies/transfer.spec.ts](packages/txwrapper-orml/src/methods/currencies/transfer.spec.ts) to see how the unit testing is done with jest. Among other things, you will need static metadata stored in the repo to use as the `metadataRpc`, which is used to create the type registry, and past in as options to the method. In general, the unit tests follow a consistent pattern and should be understandable by looking at all the components.

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
// typing that polkadot-js has for the method. In this case, we can refer to the types generated
// for Acala since the runtime uses the ORML currencies pallets. We find the definitions here:
// https://github.com/AcalaNetwork/acala.js/blob/4fe5881058003fdb5bc9e3b0c505f3846426db96/packages/types/src/interfaces/augment-api-tx.ts#L213
export interface CurrenciesTransferArgs {
  /**
   * The recipient address, SS-58 encoded.
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

Once you have completed writing unit tests and testing it against at least a dev node it should be good to go.
