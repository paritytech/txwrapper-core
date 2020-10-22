**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/util/claims"

# Module: "src/util/claims"

## Index

### Interfaces

* [PolkadotStatement](../interfaces/_src_util_claims_.polkadotstatement.md)

### Functions

* [getEthereumPayload](_src_util_claims_.md#getethereumpayload)
* [getPolkadotStatement](_src_util_claims_.md#getpolkadotstatement)

## Functions

### getEthereumPayload

▸ **getEthereumPayload**(`dest`: string, `statement`: [PolkadotStatement](../interfaces/_src_util_claims_.polkadotstatement.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): string

*Defined in [src/util/claims.ts:61](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/claims.ts#L61)*

Generate the payload that needs to be signed with the Ethereum key that made
a claim. The returned signature is needed as argument for
`claims.claimAttest`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`dest` | string | The destination account to which to pay out the claim. |
`statement` | [PolkadotStatement](../interfaces/_src_util_claims_.polkadotstatement.md) | The identity of the statement that is being attested to in the signature. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the payload.  |

**Returns:** string

___

### getPolkadotStatement

▸ **getPolkadotStatement**(`statementKind`: StatementKind \| \"Regular\" \| \"Saft\"): [PolkadotStatement](../interfaces/_src_util_claims_.polkadotstatement.md)

*Defined in [src/util/claims.ts:32](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/claims.ts#L32)*

Retrieve the statements to sign with `claims.claimAttest` and
`claims.attest`. These statements are hardcoded in txwrapper.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`statementKind` | StatementKind \| \"Regular\" \| \"Saft\" | The statement kind, can be 'Regular' or 'Saft'.  |

**Returns:** [PolkadotStatement](../interfaces/_src_util_claims_.polkadotstatement.md)
