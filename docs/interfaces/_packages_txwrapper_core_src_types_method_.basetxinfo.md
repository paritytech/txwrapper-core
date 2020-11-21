**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / ["packages/txwrapper-core/src/types/method"](../modules/_packages_txwrapper_core_src_types_method_.md) / BaseTxInfo

# Interface: BaseTxInfo

JSON format for information that is common to all transactions.

## Hierarchy

* **BaseTxInfo**

  ↳ [TxInfo](_packages_txwrapper_core_src_types_method_.txinfo.md)

  ↳ [TxInfo](_packages_txwrapper_core_src_types_method_.txinfo.md)

## Index

### Properties

* [address](_packages_txwrapper_core_src_types_method_.basetxinfo.md#address)
* [blockHash](_packages_txwrapper_core_src_types_method_.basetxinfo.md#blockhash)
* [blockNumber](_packages_txwrapper_core_src_types_method_.basetxinfo.md#blocknumber)
* [eraPeriod](_packages_txwrapper_core_src_types_method_.basetxinfo.md#eraperiod)
* [genesisHash](_packages_txwrapper_core_src_types_method_.basetxinfo.md#genesishash)
* [metadataRpc](_packages_txwrapper_core_src_types_method_.basetxinfo.md#metadatarpc)
* [nonce](_packages_txwrapper_core_src_types_method_.basetxinfo.md#nonce)
* [specVersion](_packages_txwrapper_core_src_types_method_.basetxinfo.md#specversion)
* [tip](_packages_txwrapper_core_src_types_method_.basetxinfo.md#tip)
* [transactionVersion](_packages_txwrapper_core_src_types_method_.basetxinfo.md#transactionversion)

## Properties

### address

•  **address**: string

*Defined in [packages/txwrapper-core/src/types/method.ts:65](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/types/method.ts#L65)*

The ss-58 encoded address of the sending account.

___

### blockHash

•  **blockHash**: string

*Defined in [packages/txwrapper-core/src/types/method.ts:69](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/types/method.ts#L69)*

The checkpoint hash of the block, in hex.

___

### blockNumber

•  **blockNumber**: number

*Defined in [packages/txwrapper-core/src/types/method.ts:73](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/types/method.ts#L73)*

The checkpoint block number (u32), in hex.

___

### eraPeriod

• `Optional` **eraPeriod**: undefined \| number

*Defined in [packages/txwrapper-core/src/types/method.ts:80](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/types/method.ts#L80)*

Describe the longevity of a transaction. It represents the validity from
the `blockHash` field, in number of blocks. Defaults to 64 blocks.

**`default`** 64

___

### genesisHash

•  **genesisHash**: string

*Defined in [packages/txwrapper-core/src/types/method.ts:84](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/types/method.ts#L84)*

The genesis hash of the chain, in hex.

___

### metadataRpc

•  **metadataRpc**: string

*Defined in [packages/txwrapper-core/src/types/method.ts:89](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/types/method.ts#L89)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

### nonce

•  **nonce**: number

*Defined in [packages/txwrapper-core/src/types/method.ts:93](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/types/method.ts#L93)*

The nonce for this transaction.

___

### specVersion

•  **specVersion**: number

*Defined in [packages/txwrapper-core/src/types/method.ts:97](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/types/method.ts#L97)*

The current spec version of the runtime.

___

### tip

• `Optional` **tip**: undefined \| number

*Defined in [packages/txwrapper-core/src/types/method.ts:103](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/types/method.ts#L103)*

The tip for this transaction, in hex.

**`default`** 0

___

### transactionVersion

•  **transactionVersion**: number

*Defined in [packages/txwrapper-core/src/types/method.ts:107](https://github.com/paritytech/txwrapper-core/blob/95825c7/packages/txwrapper-core/src/types/method.ts#L107)*

The current transaction version for the runtime.
