[txwrapper-core](../README.md) / [Modules](../modules.md) / txwrapper-polkadot/src

# Module: txwrapper-polkadot/src

## Table of contents

### References

- [Args](txwrapper_polkadot_src.md#args)
- [BaseTxInfo](txwrapper_polkadot_src.md#basetxinfo)
- [ChainProperties](txwrapper_polkadot_src.md#chainproperties)
- [DecodedSignedTx](txwrapper_polkadot_src.md#decodedsignedtx)
- [DecodedSigningPayload](txwrapper_polkadot_src.md#decodedsigningpayload)
- [DecodedUnsignedHexTx](txwrapper_polkadot_src.md#decodedunsignedhextx)
- [DecodedUnsignedTx](txwrapper_polkadot_src.md#decodedunsignedtx)
- [GetRegistryOptsCore](txwrapper_polkadot_src.md#getregistryoptscore)
- [IMethod](txwrapper_polkadot_src.md#imethod)
- [KeyringPair](txwrapper_polkadot_src.md#keyringpair)
- [Options](txwrapper_polkadot_src.md#options)
- [OptionsWithMeta](txwrapper_polkadot_src.md#optionswithmeta)
- [TxInfo](txwrapper_polkadot_src.md#txinfo)
- [TxMethod](txwrapper_polkadot_src.md#txmethod)
- [UnsignedTransaction](txwrapper_polkadot_src.md#unsignedtransaction)
- [construct](txwrapper_polkadot_src.md#construct)
- [decode](txwrapper_polkadot_src.md#decode)
- [defineMethod](txwrapper_polkadot_src.md#definemethod)
- [deriveAddress](txwrapper_polkadot_src.md#deriveaddress)
- [getRegistryBase](txwrapper_polkadot_src.md#getregistrybase)
- [importPrivateKey](txwrapper_polkadot_src.md#importprivatekey)
- [toTxMethod](txwrapper_polkadot_src.md#totxmethod)

### Interfaces

- [GetRegistryOpts](../interfaces/txwrapper_polkadot_src.GetRegistryOpts.md)

### Variables

- [methods](txwrapper_polkadot_src.md#methods)

### Functions

- [getRegistry](txwrapper_polkadot_src.md#getregistry)

## References

### Args

Re-exports [Args](txwrapper_core_src.md#args)

___

### BaseTxInfo

Re-exports [BaseTxInfo](../interfaces/txwrapper_core_src.BaseTxInfo.md)

___

### ChainProperties

Re-exports [ChainProperties](../interfaces/txwrapper_core_src.ChainProperties.md)

___

### DecodedSignedTx

Re-exports [DecodedSignedTx](txwrapper_core_src.md#decodedsignedtx)

___

### DecodedSigningPayload

Re-exports [DecodedSigningPayload](txwrapper_core_src.md#decodedsigningpayload)

___

### DecodedUnsignedHexTx

Re-exports [DecodedUnsignedHexTx](../interfaces/txwrapper_core_src.DecodedUnsignedHexTx.md)

___

### DecodedUnsignedTx

Re-exports [DecodedUnsignedTx](txwrapper_core_src.md#decodedunsignedtx)

___

### GetRegistryOptsCore

Re-exports [GetRegistryOptsCore](../interfaces/txwrapper_core_src.GetRegistryOptsCore.md)

___

### IMethod

Re-exports [IMethod](../interfaces/txwrapper_core_src.IMethod.md)

___

### KeyringPair

Re-exports [KeyringPair](txwrapper_core_src.md#keyringpair)

___

### Options

Re-exports [Options](../interfaces/txwrapper_core_src.Options.md)

___

### OptionsWithMeta

Re-exports [OptionsWithMeta](../interfaces/txwrapper_core_src.OptionsWithMeta.md)

___

### TxInfo

Re-exports [TxInfo](../interfaces/txwrapper_core_src.TxInfo.md)

___

### TxMethod

Re-exports [TxMethod](../interfaces/txwrapper_core_src.TxMethod.md)

___

### UnsignedTransaction

Re-exports [UnsignedTransaction](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

___

### construct

Re-exports [construct](txwrapper_core_src.md#construct)

___

### decode

Re-exports [decode](txwrapper_core_src.md#decode)

___

### defineMethod

Re-exports [defineMethod](txwrapper_core_src.md#definemethod)

___

### deriveAddress

Re-exports [deriveAddress](txwrapper_core_src.md#deriveaddress)

___

### getRegistryBase

Re-exports [getRegistryBase](txwrapper_core_src.md#getregistrybase)

___

### importPrivateKey

Re-exports [importPrivateKey](txwrapper_core_src.md#importprivatekey)

___

### toTxMethod

Re-exports [toTxMethod](txwrapper_core_src.md#totxmethod)

## Variables

### methods

• **methods**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assets` | [`assets`](txwrapper_substrate_src.methods.assets.md) |
| `balances` | [`balances`](txwrapper_substrate_src.methods.balances.md) |
| `crowdloan` | `__module` |
| `democracy` | [`democracy`](txwrapper_substrate_src.methods.democracy.md) |
| `multisig` | [`multisig`](txwrapper_substrate_src.methods.multisig.md) |
| `proxy` | [`proxy`](txwrapper_substrate_src.methods.proxy.md) |
| `session` | [`session`](txwrapper_substrate_src.methods.session.md) |
| `staking` | [`staking`](txwrapper_substrate_src.methods.staking.md) |
| `system` | [`system`](txwrapper_substrate_src.methods.system.md) |
| `utility` | [`utility`](txwrapper_substrate_src.methods.utility.md) |
| `vesting` | [`vesting`](txwrapper_substrate_src.methods.vesting.md) |

#### Defined in

[txwrapper-polkadot/src/index.ts:16](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-polkadot/src/index.ts#L16)

## Functions

### getRegistry

▸ **getRegistry**(`GetRegistryOptions`): `TypeRegistry`

Get a type registry for networks that txwrapper-polkadot supports.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GetRegistryOptions` | [`GetRegistryOpts`](../interfaces/txwrapper_polkadot_src.GetRegistryOpts.md) | specName, chainName, specVersion, and metadataRpc of the current runtime |

#### Returns

`TypeRegistry`

#### Defined in

[txwrapper-polkadot/src/index.ts:81](https://github.com/paritytech/txwrapper-core/blob/d3e4018/packages/txwrapper-polkadot/src/index.ts#L81)
