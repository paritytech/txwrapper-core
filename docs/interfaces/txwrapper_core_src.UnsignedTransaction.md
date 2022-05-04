[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-core/src](../modules/txwrapper_core_src.md) / UnsignedTransaction

# Interface: UnsignedTransaction

[txwrapper-core/src](../modules/txwrapper_core_src.md).UnsignedTransaction

JSON format for an unsigned transaction.

## Hierarchy

- `SignerPayloadJSON`

  ↳ **`UnsignedTransaction`**

## Table of contents

### Properties

- [metadataRpc](txwrapper_core_src.UnsignedTransaction.md#metadatarpc)

## Properties

### metadataRpc

• **metadataRpc**: \`0x${string}\`

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

#### Defined in

[txwrapper-core/src/types/method.ts:61](https://github.com/paritytech/txwrapper-core/blob/54903b8/packages/txwrapper-core/src/types/method.ts#L61)
