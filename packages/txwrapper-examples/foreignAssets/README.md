# Asset Hub Kusama Foreign Asset Example

Note: this example uses the substrate chain `Paseo Asset Hub` which serves as a wrapper for a Asset Hub Polkadot/Asset Hub Kusama environment

## How to construct a foreign asset transfer

## Get Started

1) Clone & build Polkadot

    ```bash
    git clone https://github.com/paritytech/polkadot-sdk/tree/polkadot-stable2409
    cd polkadot-sdk
    cargo build --release --features fast-runtime --bin polkadot
    cargo build --release --features fast-runtime --bin polkadot-prepare-worker
    cargo build --release --features fast-runtime --bin polkadot-execute-worker
    cargo build --release -p polkadot-parachain-bin
    cp ./target/release/polkadot ../txwrapper-core/zombienet/bin/
    cp ./target/release/polkadot-execute-worker ../txwrapper-core/zombienet/bin/
    cp ./target/release/polkadot-prepare-worker ../txwrapper-core/zombienet/bin/
    cp ./target/release/polkadot-parachain ../txwrapper-core/zombienet/bin/
    ```

2) Install zombienet utility: download the latest binary for your operating system at `https://github.com/paritytech/zombienet/releases`

## Run Local Zombienet test nodes

5) Copy the zombienet binary in the zombienet directory of the Txwrapper-core repository, and then launch the local environment. Example:

    bash

    ```
    ./zombienet/<your-os-zombienet-executable> -p native spawn ./zombienet/config/medium-network.toml | tee zombienet.log
    ```

## Construct and mock an example foreign asset transfer transaction in Txwrapper-Core

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
