**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / ["src/util/types"](../modules/_src_util_types_.md) / BaseTxInfo

# Interface: BaseTxInfo

JSON format for information that is common to all transactions.

## Hierarchy

* **BaseTxInfo**

## Index

### Properties

* [address](_src_util_types_.basetxinfo.md#address)
* [blockHash](_src_util_types_.basetxinfo.md#blockhash)
* [blockNumber](_src_util_types_.basetxinfo.md#blocknumber)
* [eraPeriod](_src_util_types_.basetxinfo.md#eraperiod)
* [genesisHash](_src_util_types_.basetxinfo.md#genesishash)
* [metadataRpc](_src_util_types_.basetxinfo.md#metadatarpc)
* [nonce](_src_util_types_.basetxinfo.md#nonce)
* [specVersion](_src_util_types_.basetxinfo.md#specversion)
* [tip](_src_util_types_.basetxinfo.md#tip)
* [transactionVersion](_src_util_types_.basetxinfo.md#transactionversion)
* [validityPeriod](_src_util_types_.basetxinfo.md#validityperiod)

## Properties

### address

•  **address**: string

*Defined in [src/util/types.ts:22](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/types.ts#L22)*

The ss-58 encoded address of the sending account.

___

### blockHash

•  **blockHash**: string

*Defined in [src/util/types.ts:26](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/types.ts#L26)*

The checkpoint hash of the block, in hex.

___

### blockNumber

•  **blockNumber**: number

*Defined in [src/util/types.ts:30](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/types.ts#L30)*

The checkpoint block number (u32), in hex.

___

### eraPeriod

• `Optional` **eraPeriod**: undefined \| number

*Defined in [src/util/types.ts:37](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/types.ts#L37)*

Describe the longevity of a transaction. It represents the validity from
the `blockHash` field, in number of blocks. Defaults to 64 blocks.

**`default`** 64

___

### genesisHash

•  **genesisHash**: string

*Defined in [src/util/types.ts:41](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/types.ts#L41)*

The genesis hash of the chain, in hex.

___

### metadataRpc

•  **metadataRpc**: string

*Defined in [src/util/types.ts:46](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/types.ts#L46)*

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

___

### nonce

•  **nonce**: number

*Defined in [src/util/types.ts:50](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/types.ts#L50)*

The nonce for this transaction.

___

### specVersion

•  **specVersion**: number

*Defined in [src/util/types.ts:54](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/types.ts#L54)*

The current spec version for the runtime.

___

### tip

• `Optional` **tip**: undefined \| number

*Defined in [src/util/types.ts:60](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/types.ts#L60)*

The tip for this transaction, in hex.

**`default`** 0

___

### transactionVersion

•  **transactionVersion**: number

*Defined in [src/util/types.ts:64](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/types.ts#L64)*

The current transaction version for the runtime.

___

### validityPeriod

• `Optional` **validityPeriod**: undefined \| number

*Defined in [src/util/types.ts:72](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/types.ts#L72)*

The amount of time (in second) the transaction is valid for. Will be
translated into a mortal era. Defaults to 5 minutes.

**`deprecated`** Please use `eraPeriod` instead.

**`default`** 300
