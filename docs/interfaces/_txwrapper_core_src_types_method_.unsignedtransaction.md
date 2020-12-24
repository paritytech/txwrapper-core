**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / ["txwrapper-core/src/types/method"](../modules/_txwrapper_core_src_types_method_.md) / UnsignedTransaction

# Interface: UnsignedTransaction

JSON format for an unsigned transaction.

## Hierarchy

* SignerPayloadJSON

  ↳ **UnsignedTransaction**

## Index

### Properties

* [address](_txwrapper_core_src_types_method_.unsignedtransaction.md#address)
* [blockHash](_txwrapper_core_src_types_method_.unsignedtransaction.md#blockhash)
* [blockNumber](_txwrapper_core_src_types_method_.unsignedtransaction.md#blocknumber)
* [era](_txwrapper_core_src_types_method_.unsignedtransaction.md#era)
* [genesisHash](_txwrapper_core_src_types_method_.unsignedtransaction.md#genesishash)
* [metadataRpc](_txwrapper_core_src_types_method_.unsignedtransaction.md#metadatarpc)
* [method](_txwrapper_core_src_types_method_.unsignedtransaction.md#method)
* [nonce](_txwrapper_core_src_types_method_.unsignedtransaction.md#nonce)
* [signedExtensions](_txwrapper_core_src_types_method_.unsignedtransaction.md#signedextensions)
* [specVersion](_txwrapper_core_src_types_method_.unsignedtransaction.md#specversion)
* [tip](_txwrapper_core_src_types_method_.unsignedtransaction.md#tip)
* [transactionVersion](_txwrapper_core_src_types_method_.unsignedtransaction.md#transactionversion)
* [version](_txwrapper_core_src_types_method_.unsignedtransaction.md#version)

## Properties

### address

•  **address**: string

*Inherited from [UnsignedTransaction](_txwrapper_core_src_types_method_.unsignedtransaction.md).[address](_txwrapper_core_src_types_method_.unsignedtransaction.md#address)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:26*

**`description`** The ss-58 encoded address

___

### blockHash

•  **blockHash**: string

*Inherited from [UnsignedTransaction](_txwrapper_core_src_types_method_.unsignedtransaction.md).[blockHash](_txwrapper_core_src_types_method_.unsignedtransaction.md#blockhash)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:30*

**`description`** The checkpoint hash of the block, in hex

___

### blockNumber

•  **blockNumber**: string

*Inherited from [UnsignedTransaction](_txwrapper_core_src_types_method_.unsignedtransaction.md).[blockNumber](_txwrapper_core_src_types_method_.unsignedtransaction.md#blocknumber)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:34*

**`description`** The checkpoint block number, in hex

___

### era

•  **era**: string

*Inherited from [UnsignedTransaction](_txwrapper_core_src_types_method_.unsignedtransaction.md).[era](_txwrapper_core_src_types_method_.unsignedtransaction.md#era)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:38*

**`description`** The era for this transaction, in hex

___

### genesisHash

•  **genesisHash**: string

*Inherited from [UnsignedTransaction](_txwrapper_core_src_types_method_.unsignedtransaction.md).[genesisHash](_txwrapper_core_src_types_method_.unsignedtransaction.md#genesishash)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:42*

**`description`** The genesis hash of the chain, in hex

___

### metadataRpc

•  **metadataRpc**: string

*Defined in [packages/txwrapper-core/src/types/method.ts:55](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/types/method.ts#L55)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

### method

•  **method**: string

*Inherited from [UnsignedTransaction](_txwrapper_core_src_types_method_.unsignedtransaction.md).[method](_txwrapper_core_src_types_method_.unsignedtransaction.md#method)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:46*

**`description`** The encoded method (with arguments) in hex

___

### nonce

•  **nonce**: string

*Inherited from [UnsignedTransaction](_txwrapper_core_src_types_method_.unsignedtransaction.md).[nonce](_txwrapper_core_src_types_method_.unsignedtransaction.md#nonce)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:50*

**`description`** The nonce for this transaction, in hex

___

### signedExtensions

•  **signedExtensions**: string[]

*Inherited from [UnsignedTransaction](_txwrapper_core_src_types_method_.unsignedtransaction.md).[signedExtensions](_txwrapper_core_src_types_method_.unsignedtransaction.md#signedextensions)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:66*

**`description`** The applicable signed extensions for this runtime

___

### specVersion

•  **specVersion**: string

*Inherited from [UnsignedTransaction](_txwrapper_core_src_types_method_.unsignedtransaction.md).[specVersion](_txwrapper_core_src_types_method_.unsignedtransaction.md#specversion)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:54*

**`description`** The current spec version for the runtime

___

### tip

•  **tip**: string

*Inherited from [UnsignedTransaction](_txwrapper_core_src_types_method_.unsignedtransaction.md).[tip](_txwrapper_core_src_types_method_.unsignedtransaction.md#tip)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:58*

**`description`** The tip for this transaction, in hex

___

### transactionVersion

•  **transactionVersion**: string

*Inherited from [UnsignedTransaction](_txwrapper_core_src_types_method_.unsignedtransaction.md).[transactionVersion](_txwrapper_core_src_types_method_.unsignedtransaction.md#transactionversion)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:62*

**`description`** The current transaction version for the runtime

___

### version

•  **version**: number

*Inherited from [UnsignedTransaction](_txwrapper_core_src_types_method_.unsignedtransaction.md).[version](_txwrapper_core_src_types_method_.unsignedtransaction.md#version)*

*Defined in node_modules/@polkadot/types/types/extrinsic.d.ts:70*

**`description`** The version of the extrinsic we are dealing with
