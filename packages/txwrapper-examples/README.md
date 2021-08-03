# Examples for end users of txwrapper-* libraries

## How to use `txwrapper-polkadot`

Here's a mini-tutorial on how `txwrapper-polkadot` can interact with a Polkadot chain. We're using a Polkadot/Kusama dev chain (https://github.com/paritytech/polkadot/)

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
    # NOTE: This does not need to be run unless you have made changes to the example as the package will already be built via the command thats ran from the root directory above.
    yarn run build
    ```

3) Run the example script (see [src/polkadot.ts](src/polkadot.ts)). It will interact with your local node.

    ```bash
    yarn run polkadot
    ```

## Expected Output

Here's a sample output of the above script, using a Polkadot node. Your payload to sign and signature will of course differ from this example.

```
Alice's SS58-Encoded Address: 15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5

Decoded Transaction
  To: 14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3
  Amount: 90071992547409910

Payload to Sign: 0xac05008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4813f6ffffffffff3f01150000001a00000005000000ddb9934d1ef19d9b1cb1e10857b6e4a24fe6c495d7a8632288235c1412538b84d49fc48791a7363c88217b950bb63b858acd20696237443813af262eb8d0ef2e

Decoded Transaction
  To: 14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3
  Amount: 90071992547409910

Signature: 0x01f4d3bbf7915b37af7fd1459f12c19bc2cba7e6cee80db52b2798ac80eb8dd81cae95d56faae244bf7d7bf53f944c43b22885de53206d1de119f3af036bd06985

Transaction to Submit: 0x450284d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d01f4d3bbf7915b37af7fd1459f12c19bc2cba7e6cee80db52b2798ac80eb8dd81cae95d56faae244bf7d7bf53f944c43b22885de53206d1de119f3af036bd069851500000005008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4813f6ffffffffff3f01

Expected Tx Hash: 0x38700fcb3ad9fcd20f1102907963a6e0edc0ea986950a010e3ddce787a2cf7bc
Actual Tx Hash: 0x38700fcb3ad9fcd20f1102907963a6e0edc0ea986950a010e3ddce787a2cf7bc

Decoded Transaction
  To: 14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3
  Amount: 90071992547409910
```

## Offline vs. Online

In the examples, the `rpcToLocalNode` function is the only function that needs to be called with internet access. Everything else can be performed offline. In particular, this example shows how to perform the following operations offline:

- Generate a tx
- Create its signing payload
- Sign the signing payload
- Derive the tx hash
- Decode at various points in the tx lifecycle

## Questions?

Open up a github issue [here](https://github.com/paritytech/txwrapper-core/issues)
