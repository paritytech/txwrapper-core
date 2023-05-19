# Statemint/Statemine Sufficient Asset Example:

Note: this example uses the substrate chain `trappist-rococo` which serves as a wrapper for a statemint/statemine environment

## How to construct a transaction using a sufficient asset to pay fees in `txwrapper-core`

## Get Started

1) Clone & build Trappist

    ```bash
    git clone -b xcm-demo --depth 1 https://github.com/paritytech/trappist
    cd trappist && cargo build –-release
    cp ./target/release/trappist-collator ./bin
    ```

2) Clone & build Polkadot

    ```bash
    git clone -b release-v0.9.23 --depth 1 https://github.com/paritytech/polkadot
    cd polkadot && cargo build –-release
    cp ./target/release/polkadot ../trappist/bin
    ```

3) Clone & build Cumulus (*)

    ```bash
    git clone -b xcm-demo --depth 1 https://github.com/stiiifff/cumulus-asset-fees
    cd cumulus-asset-fees && cargo build –-release
    cp ./target/release/polkadot-parachain ../trappist/bin/polkadot-collator
    cp ./target/release/parachain-collator ../trappist/bin
    ```

4) Install zombienet utility: download the latest binary for your operating system at `https://github.com/paritytech/zombienet/releases`

## Run Local Zombienet test nodes

5) Copy the zombienet binary in the root directory of the Trappist repository, and then launch the local environment. Example:

    bash
    ```
    ./zombienet-macos -p native spawn xcm-playground.toml | tee zombienet.log
    ```

6) Open the `Trappist Local` node in `Polkadot.js` apps: Once the various test nodes have been started, open a browser window with the Polkadot.js apps for the node you wish to use (e.g. check the ws port for `trappist-collator01` in the zombienet console output and provide it as a custom port in polkadot.js).

    Mac: cat zombienet.log | grep -Eo 'https://polkadot.js.org/apps/.+' | xargs open -a /Applications/Google\ Chrome.app
    Linux: cat zombienet.log | grep -Eo 'https://polkadot.js.org/apps/.+' | xargs google-chrome

    Alternatively, use the direct link given in zombienets console output: (example direct link output: https://polkadot.js.org/apps/?rpc=ws://127.0.0.1:54303#/explorer. Note: your ws port will be different.)

## Create a test Asset in Polkadot.js Apps

7) In Polkadot.js apps, click the `Network` menu and select `Assets`. On the Assets overview page, click `Create` and provide an asset name (e.g. TEST), symbol (e.g. TEST), number of decimals (e.g. 12), minimum balance (e.g. 10000) and id (e.g. 1). Click next, then confirm the admin, issuer and freezer accounts (or use default of ALICE). Afterwards, click `Create` to create your test asset.

## Make your Test Asset Sufficient

8) In order to use your asset to pay for tx fees it must have a status of `sufficient`(see `https://wiki.polkadot.network/docs/build-integrate-assets#assets-basics` for more details). With your test asset created, select the `Developer` menu and select `Sudo`. Under the section labeled `Submit the following change` select `sudo` and in the dropdown menu next to this label select `sudo(call)`. In the section labeled `call: Call` select `assets` and in the dropdown menu next to this select `forceAssetStatus(id, owner, issuer, admin, freezer, minBalance, isSufficient, isFrozen)`. In the field labeled `id` enter the id you provided for your test asset. For all account related fields ensure that `Alice` is the account selected. Set `minBalance` to 10000, change `isSuffcient` from `No` to `Yes` and then click `Submit sudo` at the bottom right corner. Once the transaction appears click `Sign and Submit` to submit the transaction to the node.

Note for this step: If an `orange` icon appears in the top right after submitting the transaction that shows `error badOrigin`, refresh and resubmit the transaction until it succeeds.

## Mint some test Asset to Alice's account

9) After creating and making your test asset sufficient, it's time to mint some of your asset to `Alice`'s account. Click the `Network` menu and select `Assets`. Here you should see your created test asset and on the far right a `Mint` button. Click `Mint`, ensure `Alice` is the `mint to address`, enter the amount to mint(e.g. 100000) then click Mint and sign the transaction.

## Construct and submit example transaction in Txwrapper-Core

10) Install dependencies and build the JS target

    ```bash
    # from this repos root directory run
    yarn install && yarn build

    # change to the examples directory
    cd packages/txwrapper-examples

    # build the JS target
    # NOTE: This does not need to be run unless you have made changes to the example as the package will already be built via the command that ran from the root directory above.
    yarn run build
    ```

11) In `txwrapper-core/packages/txwrapper-examples/common/util.ts`, update the http port in the `rpcToLocalNode` function to your `trappist-collator1` node's ws port + 1(e.g. given a `trappist-local` ws port of `54600`, update txwrapper-cores http port to `54601`)

12) In `txwrapper-core/packages/txwrapper-examples/statemint/src/statemint.ts`, update the `assetId` in the `transferKeepAlive` function to the asset id you provided for your test asset.

13) After upodating the http port in the previous step and adding the correct `assetId` to the `transferKeepAlive` function in `statemint.ts`, run the example script in the `txwrapper-examples` package (see [txwrapper-core/packages/txwrapper-examples/statemint/src/statemint.ts](txwrapper-core/packages/txwrapper-examples/statemint/src/statemint.ts)). It will interact with your local node.

From the root of `txwrapper-examples`

    ```bash
    yarn run statemint
    ```

## Example Output

Alice's SS58-Encoded Address: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY

Decoded Transaction
  To: 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty
  Amount: 10000000000000

Payload to Sign: 0xa80a03008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480b00a0724e1809b50128000101000000010000000100000075c76a73e7c27e00e1df318ab3df8fbdf63971a631015bba54af8b35e6764cedd23a9634ed20f3da6cd80f3116786d2524cfb9d7b9e9e077846faf364a170ec7

Decoded Transaction
  To: 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty
  Amount: 10000000000000
  AssetId: 1

Signature: 0x01e481eae76f12d11d603130e75d0cade65228da517048fa7c9c64014f20dc0e2ad69f754ee1bb661a049ad0fec2349ff067b8a73c79f61e61d359802778576c8e

Transaction to Submit: 0x59028400d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d01e481eae76f12d11d603130e75d0cade65228da517048fa7c9c64014f20dc0e2ad69f754ee1bb661a049ad0fec2349ff067b8a73c79f61e61d359802778576c8eb501280001010000000a03008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480b00a0724e1809

Expected Tx Hash: 0x85af8647ba03f4437709f95cdaae27350cb6bfa20abdf4ba5819c0548af23d31
Actual Tx Hash: 0x85af8647ba03f4437709f95cdaae27350cb6bfa20abdf4ba5819c0548af23d31

Decoded Transaction
  To: 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty
  Amount: 10000000000000
