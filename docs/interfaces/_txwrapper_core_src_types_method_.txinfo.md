**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / ["txwrapper-core/src/types/method"](../modules/_txwrapper_core_src_types_method_.md) / TxInfo

# Interface: TxInfo

Complete information about a tx
Complete information about a tx

## Hierarchy

* [BaseTxInfo](_txwrapper_core_src_types_method_.basetxinfo.md)

* [BaseTxInfo](_txwrapper_core_src_types_method_.basetxinfo.md)

  ↳ **TxInfo**

## Index

### Properties

* [address](_txwrapper_core_src_types_method_.txinfo.md#address)
* [blockHash](_txwrapper_core_src_types_method_.txinfo.md#blockhash)
* [blockNumber](_txwrapper_core_src_types_method_.txinfo.md#blocknumber)
* [eraPeriod](_txwrapper_core_src_types_method_.txinfo.md#eraperiod)
* [genesisHash](_txwrapper_core_src_types_method_.txinfo.md#genesishash)
* [metadataRpc](_txwrapper_core_src_types_method_.txinfo.md#metadatarpc)
* [method](_txwrapper_core_src_types_method_.txinfo.md#method)
* [nonce](_txwrapper_core_src_types_method_.txinfo.md#nonce)
* [specVersion](_txwrapper_core_src_types_method_.txinfo.md#specversion)
* [tip](_txwrapper_core_src_types_method_.txinfo.md#tip)
* [transactionVersion](_txwrapper_core_src_types_method_.txinfo.md#transactionversion)

## Properties

### address

•  **address**: string

*Inherited from [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[address](_txwrapper_core_src_types_method_.txinfo.md#address)*

*Overrides [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[address](_txwrapper_core_src_types_method_.txinfo.md#address)*

*Defined in [packages/txwrapper-core/src/types/method.ts:65](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/types/method.ts#L65)*

The ss-58 encoded address of the sending account.

___

### blockHash

•  **blockHash**: string

*Inherited from [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[blockHash](_txwrapper_core_src_types_method_.txinfo.md#blockhash)*

*Overrides [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[blockHash](_txwrapper_core_src_types_method_.txinfo.md#blockhash)*

*Defined in [packages/txwrapper-core/src/types/method.ts:69](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/types/method.ts#L69)*

The checkpoint hash of the block, in hex.

___

### blockNumber

•  **blockNumber**: number

*Inherited from [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[blockNumber](_txwrapper_core_src_types_method_.txinfo.md#blocknumber)*

*Overrides [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[blockNumber](_txwrapper_core_src_types_method_.txinfo.md#blocknumber)*

*Defined in [packages/txwrapper-core/src/types/method.ts:73](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/types/method.ts#L73)*

The checkpoint block number (u32), in hex.

___

### eraPeriod

• `Optional` **eraPeriod**: undefined \| number

*Inherited from [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[eraPeriod](_txwrapper_core_src_types_method_.txinfo.md#eraperiod)*

*Overrides [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[eraPeriod](_txwrapper_core_src_types_method_.txinfo.md#eraperiod)*

*Defined in [packages/txwrapper-core/src/types/method.ts:80](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/types/method.ts#L80)*

Describe the longevity of a transaction. It represents the validity from
the `blockHash` field, in number of blocks. Defaults to 64 blocks.

**`default`** 64

___

### genesisHash

•  **genesisHash**: string

*Inherited from [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[genesisHash](_txwrapper_core_src_types_method_.txinfo.md#genesishash)*

*Overrides [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[genesisHash](_txwrapper_core_src_types_method_.txinfo.md#genesishash)*

*Defined in [packages/txwrapper-core/src/types/method.ts:84](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/types/method.ts#L84)*

The genesis hash of the chain, in hex.

___

### metadataRpc

•  **metadataRpc**: string

*Inherited from [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[metadataRpc](_txwrapper_core_src_types_method_.txinfo.md#metadatarpc)*

*Overrides [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[metadataRpc](_txwrapper_core_src_types_method_.txinfo.md#metadatarpc)*

*Defined in [packages/txwrapper-core/src/types/method.ts:89](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/types/method.ts#L89)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

### method

•  **method**: [TxMethod](_txwrapper_core_src_types_method_.txmethod.md)

*Defined in [packages/txwrapper-core/src/types/method.ts:28](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/types/method.ts#L28)*

*Defined in [packages/txwrapper-core/src/types/method.ts:44](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/types/method.ts#L44)*

___

### nonce

•  **nonce**: number

*Inherited from [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[nonce](_txwrapper_core_src_types_method_.txinfo.md#nonce)*

*Overrides [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[nonce](_txwrapper_core_src_types_method_.txinfo.md#nonce)*

*Defined in [packages/txwrapper-core/src/types/method.ts:93](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/types/method.ts#L93)*

The nonce for this transaction.

___

### specVersion

•  **specVersion**: number

*Inherited from [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[specVersion](_txwrapper_core_src_types_method_.txinfo.md#specversion)*

*Overrides [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[specVersion](_txwrapper_core_src_types_method_.txinfo.md#specversion)*

*Defined in [packages/txwrapper-core/src/types/method.ts:97](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/types/method.ts#L97)*

The current spec version of the runtime.

___

### tip

• `Optional` **tip**: undefined \| number

*Inherited from [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[tip](_txwrapper_core_src_types_method_.txinfo.md#tip)*

*Overrides [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[tip](_txwrapper_core_src_types_method_.txinfo.md#tip)*

*Defined in [packages/txwrapper-core/src/types/method.ts:103](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/types/method.ts#L103)*

The tip for this transaction, in hex.

**`default`** 0

___

### transactionVersion

•  **transactionVersion**: number

*Inherited from [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[transactionVersion](_txwrapper_core_src_types_method_.txinfo.md#transactionversion)*

*Overrides [TxInfo](_txwrapper_core_src_types_method_.txinfo.md).[transactionVersion](_txwrapper_core_src_types_method_.txinfo.md#transactionversion)*

*Defined in [packages/txwrapper-core/src/types/method.ts:107](https://github.com/paritytech/txwrapper-core/blob/2862592/packages/txwrapper-core/src/types/method.ts#L107)*

The current transaction version for the runtime.
