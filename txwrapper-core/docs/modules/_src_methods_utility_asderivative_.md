**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/utility/asDerivative"

# Module: "src/methods/utility/asDerivative"

## Index

### Interfaces

* [UtilityAsDerivativeArgs](../interfaces/_src_methods_utility_asderivative_.utilityasderivativeargs.md)

### Functions

* [asDerivative](_src_methods_utility_asderivative_.md#asderivative)

## Functions

### asDerivative

▸ **asDerivative**(`args`: [UtilityAsDerivativeArgs](../interfaces/_src_methods_utility_asderivative_.utilityasderivativeargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/utility/asDerivative.ts:41](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/utility/asDerivative.ts#L41)*

Send a call through an indexed pseudonym of the sender.

Proxy filters from the origin are passed along. The call will be dispatched
with an origin which uses the same proxy filters as the origin of this call.

NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
because you expect `proxy` to have been used prior in the call stack and you do not want
the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
in the Multisig pallet instead.

NOTE: Prior to version *12, this was called `as_limited_sub`.

The dispatch origin for this call must be _Signed_.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [UtilityAsDerivativeArgs](../interfaces/_src_methods_utility_asderivative_.utilityasderivativeargs.md) |  |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) |  |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) |   |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
