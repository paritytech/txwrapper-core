**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/session/setKeys"

# Module: "src/methods/session/setKeys"

## Index

### Interfaces

* [SessionSetKeysArgs](../interfaces/_src_methods_session_setkeys_.sessionsetkeysargs.md)

### Functions

* [setKeys](_src_methods_session_setkeys_.md#setkeys)

## Functions

### setKeys

▸ **setKeys**(`args`: [SessionSetKeysArgs](../interfaces/_src_methods_session_setkeys_.sessionsetkeysargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/session/setKeys.ts:27](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/session/setKeys.ts#L27)*

Sets the session key(s) of the function caller to `key`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [SessionSetKeysArgs](../interfaces/_src_methods_session_setkeys_.sessionsetkeysargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
