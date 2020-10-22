**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/claims/claimAttest"

# Module: "src/methods/claims/claimAttest"

## Index

### Interfaces

* [ClaimsClaimAttestArgs](../interfaces/_src_methods_claims_claimattest_.claimsclaimattestargs.md)

### Functions

* [claimAttest](_src_methods_claims_claimattest_.md#claimattest)

## Functions

### claimAttest

▸ **claimAttest**(`args`: [ClaimsClaimAttestArgs](../interfaces/_src_methods_claims_claimattest_.claimsclaimattestargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/claims/claimAttest.ts:35](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/claims/claimAttest.ts#L35)*

Make a claim to collect your DOTs by signing a statement.

The dispatch origin for this call must be _None_.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ClaimsClaimAttestArgs](../interfaces/_src_methods_claims_claimattest_.claimsclaimattestargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
