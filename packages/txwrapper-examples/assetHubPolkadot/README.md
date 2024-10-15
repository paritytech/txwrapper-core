# Asset Hub Polkadot/Asset Hub Kusama Sufficient Asset Example:

Note: this example uses the substrate chain `Paseo Asset Hub` which serves as a wrapper for a Asset Hub Polkadot/Asset Hub Kusama environment

## How to construct a transaction using a sufficient asset to pay fees in `txwrapper-core`

## Get Started

1) First you need to clone the repo for the [node](https://github.com/paritytech/polkadot-sdk/tree/polkadot-stable2409) and build the binaries, with `features=fast-runtime` in order to shorten the session duration: polkadot, polkadot-parachain, polkadot-prepare-worker and polkadot-execute-worker, and place them in the `zombienet/bin/` directory.

2) You will also need the zombienet executable for your os, which you can download [here](https://github.com/paritytech/zombienet/releases), and place it in the `zombienet` folder.

3) Run the test network from the root of this project with the command `./zombienet/<your-os-zombienet-executable> -p native spawn ./zombienet/config/medium-network.toml | tee zombienet.log`

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
    # from this repo\'s root directory run
    yarn install && yarn build

    # change to the examples directory
    cd packages/txwrapper-examples

    # build the JS target
    # NOTE: This does not need to be run unless you have made changes to the example as the package will already be built via the command that ran from the root directory above.
    yarn run build
    ```

11) In `txwrapper-core/packages/txwrapper-examples/common/util.ts`, update the http port in the `rpcToLocalNode` function to your `trappist-collator1` node's ws port + 1(e.g. given a `trappist-local` ws port of `54600`, update txwrapper-cores http port to `54601`)

12) In `txwrapper-core/packages/txwrapper-examples/assetHubPolkadot/src/assetHubPolkadot.ts`, update the `assetId` in the `transferKeepAlive` function to the asset id you provided for your test asset.

13) After updating the http port in the previous step and adding the correct `assetId` to the `transferKeepAlive` function in `assetHubPolkadot.ts`, run the example script in the `txwrapper-examples` package (see [txwrapper-core/packages/txwrapper-examples/assetHubPolkadot/src/assetHubPolkadot.ts](txwrapper-core/packages/txwrapper-examples/assetHubPolkadot/src/assetHubPolkadot.ts)). It will interact with your local node.

From the root of `txwrapper-examples`

    ```bash
    yarn run assetHubPolkadot
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
