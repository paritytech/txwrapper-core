**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/createSigningPayload"

# Module: "src/createSigningPayload"

## Index

### Functions

* [createSigningPayload](_src_createsigningpayload_.md#createsigningpayload)

## Functions

### createSigningPayload

▸ **createSigningPayload**(`unsigned`: [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md), `options`: [Options](../interfaces/_src_util_types_.options.md)): string

*Defined in [src/createSigningPayload.ts:45](https://github.com/paritytech/txwrapper/blob/ddb0953/src/createSigningPayload.ts#L45)*

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
`unsigned` | [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md) | The JSON representing the unsigned transaction. |
`options` | [Options](../interfaces/_src_util_types_.options.md) | Registry and metadata used for constructing the method.  |

**Returns:** string
