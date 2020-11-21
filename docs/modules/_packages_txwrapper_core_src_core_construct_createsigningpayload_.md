**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-core/src/core/construct/createSigningPayload"

# Module: "packages/txwrapper-core/src/core/construct/createSigningPayload"

## Index

### Functions

* [createSigningPayload](_packages_txwrapper_core_src_core_construct_createsigningpayload_.md#createsigningpayload)

## Functions

### createSigningPayload

▸ **createSigningPayload**(`unsigned`: [UnsignedTransaction](../interfaces/_packages_txwrapper_core_src_types_method_.unsignedtransaction.md), `options`: [Options](../interfaces/_packages_txwrapper_core_src_types_method_.options.md)): string

*Defined in [packages/txwrapper-core/src/core/construct/createSigningPayload.ts:45](https://github.com/paritytech/txwrapper-core/blob/a5bee61/packages/txwrapper-core/src/core/construct/createSigningPayload.ts#L45)*

Construct the signing payload from an unsigned transaction and export it to
a remote signer (this is often called "detached signing").

**Important!** The registry needs to be passed into the `options` argument.
This registry needs to be updated with latest metadata, so before calling
this function, make sure to run `registry.setMetadata(metadata)` first.

**Important!** The return value of this function is **NOT** the actual
payload to sign: the actual payload to sign includes `method` which should
not be length-prefixed. To construct the actual payload to sign, see the
example.

**`example`** 
```ts
// Serialized signing payload.
const signingPayload = createSigningPayload(unsigned, {
  metadataRpc,
  registry
});

// Construct an `ExtrinsicPayload` class. Careful, the `version` here is the
// `TRANSACTION_VERSION` format version, and **NOT** the
// `transaction_version` field from the `state_getRuntimeVersion` RPC
// endpoint.
const extrinsicPayload = registry
  .createType('ExtrinsicPayload', unsigned, {
    version: unsigned.version,
 });

// With the `ExtrinsicPayload` class, construct the actual payload to sign.
const actualPayload = extrinsicPayload.toU8a({ method: true });
// You can now sign `actualPayload` with you private key.

// Alternatively, call the `.sign()` method directly on the
`ExtrinsicPayload` class.
const { signature } = extrinsicPayload.sign(myKeyPair);
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`unsigned` | [UnsignedTransaction](../interfaces/_packages_txwrapper_core_src_types_method_.unsignedtransaction.md) | The JSON representing the unsigned transaction. |
`options` | [Options](../interfaces/_packages_txwrapper_core_src_types_method_.options.md) | Registry and metadata used for constructing the method.  |

**Returns:** string
