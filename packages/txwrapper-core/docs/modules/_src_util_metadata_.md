**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/util/metadata"

# Module: "src/util/metadata"

## Index

### Interfaces

* [ChainProperties](../interfaces/_src_util_metadata_.chainproperties.md)

### Functions

* [getRegistry](_src_util_metadata_.md#getregistry)

## Functions

### getRegistry

▸ **getRegistry**(`chainName`: \"Kusama\" \| \"Polkadot\" \| \"Polkadot CC1\" \| \"Westend\", `specName`: \"kusama\" \| \"polkadot\" \| \"westend\", `specVersion`: number, `metadataRpc?`: undefined \| string): TypeRegistry

*Defined in [src/util/metadata.ts:112](https://github.com/paritytech/txwrapper/blob/ddb0953/src/util/metadata.ts#L112)*

Given a chain name, a spec name, and a spec version, return the
corresponding type registry. This function only returns the correct type
registry for the following chains:
- Kusama,
- Polkadot (incl. when running a dev node),
- Westend.
For other chains, please use `@polkadot/api`s `TypeRegistry` directly:
`const registry = new TypeRegistry()`. If needed, you should also register
your chain's custom types using `registry.register()`.

**`see`** https://github.com/polkadot-js/api/tree/master/packages/types-known

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`chainName` | \"Kusama\" \| \"Polkadot\" \| \"Polkadot CC1\" \| \"Westend\" | The chain to create the type registry for. Returned by RPC `system_chain`. |
`specName` | \"kusama\" \| \"polkadot\" \| \"westend\" | The name of the runtime spec. Returned by RPC `state_getRuntimeVersion`. |
`specVersion` | number | The spec version of that chain for which we want to create a type registry. Returned by RPC `state_getRuntimeVersion`. |
`metadataRpc?` | undefined \| string | If you pass the optional `metadataRpc` argument, then this function will run `registry.setMetadata()`. **Important!** If you don't pass this argument, make sure to call `registry.setMetadata()` yourself!  |

**Returns:** TypeRegistry
