**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / ["packages/txwrapper-core/src/types/method"](../modules/_packages_txwrapper_core_src_types_method_.md) / UnsignedTransaction

# Interface: UnsignedTransaction

JSON format for an unsigned transaction.

## Hierarchy

* SignerPayloadJSON

  ↳ **UnsignedTransaction**

## Index

### Properties

* [address](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#address)
* [blockHash](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#blockhash)
* [blockNumber](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#blocknumber)
* [era](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#era)
* [genesisHash](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#genesishash)
* [metadataRpc](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#metadatarpc)
* [method](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#method)
* [nonce](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#nonce)
* [signedExtensions](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#signedextensions)
* [specVersion](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#specversion)
* [tip](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#tip)
* [transactionVersion](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#transactionversion)
* [version](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#version)

## Properties

### address

•  **address**: string

*Inherited from [UnsignedTransaction](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md).[address](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#address)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:24*

**`description`** The ss-58 encoded address

___

### blockHash

•  **blockHash**: string

*Inherited from [UnsignedTransaction](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md).[blockHash](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#blockhash)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:28*

**`description`** The checkpoint hash of the block, in hex

___

### blockNumber

•  **blockNumber**: string

*Inherited from [UnsignedTransaction](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md).[blockNumber](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#blocknumber)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:32*

**`description`** The checkpoint block number, in hex

___

### era

•  **era**: string

*Inherited from [UnsignedTransaction](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md).[era](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#era)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:36*

**`description`** The era for this transaction, in hex

___

### genesisHash

•  **genesisHash**: string

*Inherited from [UnsignedTransaction](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md).[genesisHash](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#genesishash)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:40*

**`description`** The genesis hash of the chain, in hex

___

### metadataRpc

•  **metadataRpc**: string

*Defined in [packages/txwrapper-core/src/types/method.ts:55](https://github.com/paritytech/txwrapper-core/blob/e071077/packages/txwrapper-core/src/types/method.ts#L55)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

### method

•  **method**: string

*Inherited from [UnsignedTransaction](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md).[method](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#method)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:44*

**`description`** The encoded method (with arguments) in hex

___

### nonce

•  **nonce**: string

*Inherited from [UnsignedTransaction](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md).[nonce](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#nonce)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:48*

**`description`** The nonce for this transaction, in hex

___

### signedExtensions

•  **signedExtensions**: string[]

*Inherited from [UnsignedTransaction](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md).[signedExtensions](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#signedextensions)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:64*

**`description`** The applicable signed extensions for this runtime

___

### specVersion

•  **specVersion**: string

*Inherited from [UnsignedTransaction](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md).[specVersion](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#specversion)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:52*

**`description`** The current spec version for the runtime

___

### tip

•  **tip**: string

*Inherited from [UnsignedTransaction](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md).[tip](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#tip)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:56*

**`description`** The tip for this transaction, in hex

___

### transactionVersion

•  **transactionVersion**: string

*Inherited from [UnsignedTransaction](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md).[transactionVersion](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#transactionversion)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:60*

**`description`** The current transaction version for the runtime

___

### version

•  **version**: number

*Inherited from [UnsignedTransaction](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md).[version](_packages_txwrapper_core_src_types_method_.unsignedtransaction.md#version)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:68*

**`description`** The version of the extrinsic we are dealing with
