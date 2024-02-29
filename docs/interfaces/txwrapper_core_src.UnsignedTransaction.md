[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-core/src](../modules/txwrapper_core_src.md) / UnsignedTransaction

# Interface: UnsignedTransaction

[txwrapper-core/src](../modules/txwrapper_core_src.md).UnsignedTransaction

JSON format for an unsigned transaction.

## Hierarchy

- `SignerPayloadJSON`

  ↳ **`UnsignedTransaction`**

## Table of contents

### Properties

- [assetId](txwrapper_core_src.UnsignedTransaction.md#assetid)
- [metadataRpc](txwrapper_core_src.UnsignedTransaction.md#metadatarpc)

## Properties

### assetId

• `Optional` **assetId**: `number` \| `object`

The assetId used in ChargeAssetTxPayment

#### Defined in

[txwrapper-core/src/types/method.ts:73](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-core/src/types/method.ts#L73)

___

### metadataRpc

• **metadataRpc**: \`0x$\{string}\`

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

#### Defined in

[txwrapper-core/src/types/method.ts:78](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-core/src/types/method.ts#L78)
