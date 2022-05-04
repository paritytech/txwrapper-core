[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-core/src](../modules/txwrapper_core_src.md) / TxInfo

# Interface: TxInfo

[txwrapper-core/src](../modules/txwrapper_core_src.md).TxInfo

Complete information about a tx

## Hierarchy

- [`BaseTxInfo`](txwrapper_core_src.BaseTxInfo.md)

  ↳ **`TxInfo`**

## Table of contents

### Properties

- [address](txwrapper_core_src.TxInfo.md#address)
- [blockHash](txwrapper_core_src.TxInfo.md#blockhash)
- [blockNumber](txwrapper_core_src.TxInfo.md#blocknumber)
- [eraPeriod](txwrapper_core_src.TxInfo.md#eraperiod)
- [genesisHash](txwrapper_core_src.TxInfo.md#genesishash)
- [metadataRpc](txwrapper_core_src.TxInfo.md#metadatarpc)
- [method](txwrapper_core_src.TxInfo.md#method)
- [nonce](txwrapper_core_src.TxInfo.md#nonce)
- [specVersion](txwrapper_core_src.TxInfo.md#specversion)
- [tip](txwrapper_core_src.TxInfo.md#tip)
- [transactionVersion](txwrapper_core_src.TxInfo.md#transactionversion)

## Properties

### address

• **address**: `string`

The ss-58 encoded address of the sending account.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[address](txwrapper_core_src.BaseTxInfo.md#address)

#### Defined in

[txwrapper-core/src/types/method.ts:71](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-core/src/types/method.ts#L71)

___

### blockHash

• **blockHash**: `string`

The checkpoint hash of the block, in hex.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[blockHash](txwrapper_core_src.BaseTxInfo.md#blockhash)

#### Defined in

[txwrapper-core/src/types/method.ts:75](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-core/src/types/method.ts#L75)

___

### blockNumber

• **blockNumber**: `number`

The checkpoint block number (u32), in hex.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[blockNumber](txwrapper_core_src.BaseTxInfo.md#blocknumber)

#### Defined in

[txwrapper-core/src/types/method.ts:79](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-core/src/types/method.ts#L79)

___

### eraPeriod

• `Optional` **eraPeriod**: `number`

Describe the longevity of a transaction. It represents the validity from
the `blockHash` field, in number of blocks. Defaults to 64 blocks.

**`default`** 64

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[eraPeriod](txwrapper_core_src.BaseTxInfo.md#eraperiod)

#### Defined in

[txwrapper-core/src/types/method.ts:86](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-core/src/types/method.ts#L86)

___

### genesisHash

• **genesisHash**: `string`

The genesis hash of the chain, in hex.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[genesisHash](txwrapper_core_src.BaseTxInfo.md#genesishash)

#### Defined in

[txwrapper-core/src/types/method.ts:90](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-core/src/types/method.ts#L90)

___

### metadataRpc

• **metadataRpc**: \`0x${string}\`

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[metadataRpc](txwrapper_core_src.BaseTxInfo.md#metadatarpc)

#### Defined in

[txwrapper-core/src/types/method.ts:95](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-core/src/types/method.ts#L95)

___

### method

• **method**: [`TxMethod`](txwrapper_core_src.TxMethod.md)

#### Defined in

[txwrapper-core/src/types/method.ts:50](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-core/src/types/method.ts#L50)

___

### nonce

• **nonce**: `number`

The nonce for this transaction.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[nonce](txwrapper_core_src.BaseTxInfo.md#nonce)

#### Defined in

[txwrapper-core/src/types/method.ts:99](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-core/src/types/method.ts#L99)

___

### specVersion

• **specVersion**: `number`

The current spec version of the runtime.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[specVersion](txwrapper_core_src.BaseTxInfo.md#specversion)

#### Defined in

[txwrapper-core/src/types/method.ts:103](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-core/src/types/method.ts#L103)

___

### tip

• `Optional` **tip**: `number`

The tip for this transaction, in hex.

**`default`** 0

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[tip](txwrapper_core_src.BaseTxInfo.md#tip)

#### Defined in

[txwrapper-core/src/types/method.ts:109](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-core/src/types/method.ts#L109)

___

### transactionVersion

• **transactionVersion**: `number`

The current transaction version for the runtime.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[transactionVersion](txwrapper_core_src.BaseTxInfo.md#transactionversion)

#### Defined in

[txwrapper-core/src/types/method.ts:113](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-core/src/types/method.ts#L113)
