# Options Examples

## Description
Example that shows how to use the `options` specific to generating a registry and metadata. 

## Get Started

1) Fetch the latest Substrate or Polkadot/Kusama node from the above link. Follow instructions to build it, and start a dev chain.

    ```bash
    target/release/polkadot --dev
    ```

2) Install dependencies and build the JS target

    ```bash
    # from this repos root directory run
    yarn install && yarn build

    # change to the examples directory
    cd packages/txwrapper-examples

    # build the JS target
    # NOTE: This does not need to be run unless you have made changes to the example as the package will already be built via the command that ran from the root directory above.
    yarn run build
    ```

3) Run the example script (see [src/asSpecifiedCallsOnlyV14.ts](src/asSpecifiedCallsOnlyV14.ts)). It will interact with your local node.

    ```bash
    yarn run asSpecifiedCallsOnlyV14
    ```