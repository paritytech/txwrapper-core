# How to use `txwrapper`

Here's a mini-tutorial on how `txwrapper` can interact with a Substrate chain. We're using a dev chain, and you can use:

- either a Substrate dev chain (https://github.com/paritytech/substrate)
- or a Polkadot/Kusama dev chain (https://github.com/paritytech/polkadot/)

## Get Started

1. Fetch the latest Substrate or Polkadot/Kusama node from the above links. Follow instructions to build it, and start a dev chain.

```bash
substrate --dev
# or
polkadot --dev
```

2. Run the example script in this folder. It will interact with your local node.

```bash
./node_modules/.bin/ts-node examples/substrateMaster.ts
# or
./node_modules/.bin/ts-node examples/polkadot.ts
```

## Expected Output

Here's a sample output of the above script, using a Substrate node. Your payload to sign and signature will of course differ from this example.

```
Alice's SS58-Encoded Address: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY

Decoded Transaction
  To: 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty
  Amount: 12

Payload to Sign: 0x900400ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a483015010400ec03000091568ed8f5a0f9eb181a160515f2e5b948276b44fd18bfe7ed248ea9631300f7d2ad861d30ca45c2dbd962576e96fda39d12c5c7ab13bf6c2e63d351c8daf41f

Decoded Transaction
  To: 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty
  Amount: 12

Signature: 0x0128c2f5359f1c70c5b2d25c18471a779040b46b7104f865ba6fe3429b0592b80d6dc623ae91b1cf09a56841c1727ea910c2f515690c6cd77532828d406e6dcb83

Transaction to Submit: 0x2d0284ffd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0128c2f5359f1c70c5b2d25c18471a779040b46b7104f865ba6fe3429b0592b80d6dc623ae91b1cf09a56841c1727ea910c2f515690c6cd77532828d406e6dcb83150104000400ff8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4830

Expected Tx Hash: 0x44bdad63f335b3e6b4563cad48c6d58b6e5c2c1f7da07216226f60191d9d9035

Actual Tx Hash: 0x44bdad63f335b3e6b4563cad48c6d58b6e5c2c1f7da07216226f60191d9d9035

Decoded Transaction
  To: 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty
  Amount: 12
```

## Offline vs. Online

In the examples, the `rpcToNode` function is the only function that needs to be called with internet access. Everything else can be performed offline. In particular, this example shows how to perform the following operations offline:

- Generate a tx,
- Create its signing payload,
- Sign the signing payload,
- Derive the tx hash,
- Decode at various levels of the tx lifecycle.
