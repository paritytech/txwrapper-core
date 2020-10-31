**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/claims/attest"

# Module: "src/methods/claims/attest"

## Index

### Interfaces

* [ClaimsAttestArgs](../interfaces/_src_methods_claims_attest_.claimsattestargs.md)

### Functions

* [attest](_src_methods_claims_attest_.md#attest)

## Functions

### attest

▸ **attest**(`args`: [ClaimsAttestArgs](../interfaces/_src_methods_claims_attest_.claimsattestargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/claims/attest.ts:24](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/claims/attest.ts#L24)*

Attest to a statement, needed to finalize the claims process. This method is
only available on Polkadot.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ClaimsAttestArgs](../interfaces/_src_methods_claims_attest_.claimsattestargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
