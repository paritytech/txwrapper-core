**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / ["src/methods/claims/claimAttest"](../modules/_src_methods_claims_claimattest_.md) / ClaimsClaimAttestArgs

# Interface: ClaimsClaimAttestArgs

## Hierarchy

* {}

  ↳ **ClaimsClaimAttestArgs**

## Index

### Properties

* [dest](_src_methods_claims_claimattest_.claimsclaimattestargs.md#dest)
* [ethereumSignature](_src_methods_claims_claimattest_.claimsclaimattestargs.md#ethereumsignature)
* [statement](_src_methods_claims_claimattest_.claimsclaimattestargs.md#statement)

## Properties

### dest

•  **dest**: string

*Defined in [src/methods/claims/claimAttest.ts:14](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/claims/claimAttest.ts#L14)*

The destination account to which to pay out the claim. This method is only
available on Polkadot.

___

### ethereumSignature

•  **ethereumSignature**: string

*Defined in [src/methods/claims/claimAttest.ts:19](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/claims/claimAttest.ts#L19)*

The signature of an Ethereum signed message matching the format described
above.

___

### statement

•  **statement**: string

*Defined in [src/methods/claims/claimAttest.ts:23](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/claims/claimAttest.ts#L23)*

The identity of the statement that is being attested to in the signature.
