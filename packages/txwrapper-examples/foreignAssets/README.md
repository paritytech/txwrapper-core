# Asset Hub Kusama Foreign Asset Example

Note: this example uses the substrate chain `Asset Hub Rococo` which serves as a wrapper for a Asset Hub Polkadot/Asset Hub Kusama environment.

## Construct and mock an example foreign asset transaction in Txwrapper-Core

1) Install dependencies and build the JS target

    ```bash
    # from this repos root directory run
    yarn install && yarn build

    # change to the examples directory
    cd packages/txwrapper-examples

    # build the JS target
    # NOTE: This does not need to be run unless you have made changes to the example as the package will already be built via the command that ran from the root directory above.
    yarn run build
    ```

3) Run the example script in the `txwrapper-examples` package (see [txwrapper-core/packages/txwrapper-examples/foreignAssets/src/foreignAssets.ts](txwrapper-core/packages/txwrapper-examples/foreignAssets/src/foreignAssets.ts)). It will interact with your local node.

From the root of `txwrapper-examples`

    ```bash
    yarn run foreignAssets
    ```
