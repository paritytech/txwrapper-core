[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-core/src](../modules/txwrapper_core_src.md) / BaseTxInfo

# Interface: BaseTxInfo

[txwrapper-core/src](../modules/txwrapper_core_src.md).BaseTxInfo

JSON format for information that is common to all transactions.

## Hierarchy

- **`BaseTxInfo`**

  ↳ [`TxInfo`](txwrapper_core_src.TxInfo.md)

## Table of contents

### Properties

- [address](txwrapper_core_src.BaseTxInfo.md#address)
- [blockHash](txwrapper_core_src.BaseTxInfo.md#blockhash)
- [blockNumber](txwrapper_core_src.BaseTxInfo.md#blocknumber)
- [eraPeriod](txwrapper_core_src.BaseTxInfo.md#eraperiod)
- [genesisHash](txwrapper_core_src.BaseTxInfo.md#genesishash)
- [metadataRpc](txwrapper_core_src.BaseTxInfo.md#metadatarpc)
- [nonce](txwrapper_core_src.BaseTxInfo.md#nonce)
- [specVersion](txwrapper_core_src.BaseTxInfo.md#specversion)
- [tip](txwrapper_core_src.BaseTxInfo.md#tip)
- [transactionVersion](txwrapper_core_src.BaseTxInfo.md#transactionversion)

## Properties

### address

• **address**: `string`

The ss-58 encoded address of the sending account.

#### Defined in

[txwrapper-core/src/types/method.ts:62](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L62)

___

### blockHash

• **blockHash**: `string`

The checkpoint hash of the block, in hex.

#### Defined in

[txwrapper-core/src/types/method.ts:66](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L66)

___

### blockNumber

• **blockNumber**: `number`

The checkpoint block number (u32), in hex.

#### Defined in

[txwrapper-core/src/types/method.ts:70](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L70)

___

### eraPeriod

• `Optional` **eraPeriod**: `number`

Describe the longevity of a transaction. It represents the validity from
the `blockHash` field, in number of blocks. Defaults to 64 blocks.

**`default`** 64

#### Defined in

[txwrapper-core/src/types/method.ts:77](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L77)

___

### genesisHash

• **genesisHash**: `string`

The genesis hash of the chain, in hex.

#### Defined in

[txwrapper-core/src/types/method.ts:81](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L81)

___

### metadataRpc

• **metadataRpc**: \`0x${string}\`

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

#### Defined in

[txwrapper-core/src/types/method.ts:86](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L86)

___

### nonce

• **nonce**: `number`

The nonce for this transaction.

#### Defined in

[txwrapper-core/src/types/method.ts:90](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L90)

___

### specVersion

• **specVersion**: `number`

The current spec version of the runtime.

#### Defined in

[txwrapper-core/src/types/method.ts:94](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L94)

___

### tip

• `Optional` **tip**: `number`

The tip for this transaction, in hex.

**`default`** 0

#### Defined in

[txwrapper-core/src/types/method.ts:100](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L100)

___

### transactionVersion

• **transactionVersion**: `number`

The current transaction version for the runtime.

#### Defined in

[txwrapper-core/src/types/method.ts:104](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L104)
