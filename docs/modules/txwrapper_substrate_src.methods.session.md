[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](txwrapper_substrate_src.md) / [methods](txwrapper_substrate_src.methods.md) / session

# Namespace: session

[txwrapper-substrate/src](txwrapper_substrate_src.md).[methods](txwrapper_substrate_src.methods.md).session

## Table of contents

### Interfaces

- [SessionSetKeysArgs](../interfaces/txwrapper_substrate_src.methods.session.SessionSetKeysArgs.md)

### Functions

- [setKeys](txwrapper_substrate_src.methods.session.md#setkeys)

## Functions

### setKeys

▸ **setKeys**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Sets the session key(s) of the function caller to `key`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SessionSetKeysArgs`](../interfaces/txwrapper_substrate_src.methods.session.SessionSetKeysArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/session/setKeys.ts:34](https://github.com/paritytech/txwrapper-core/blob/fe8eeb2/packages/txwrapper-substrate/src/methods/session/setKeys.ts#L34)
