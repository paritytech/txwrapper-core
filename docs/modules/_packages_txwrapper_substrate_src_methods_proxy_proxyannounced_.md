**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced"

# Module: "packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced"

## Index

### Interfaces

* [ProxyProxyAnnouncedArgs](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md)

### Functions

* [proxyAnnounced](_packages_txwrapper_substrate_src_methods_proxy_proxyannounced_.md#proxyannounced)

## Functions

### proxyAnnounced

▸ **proxyAnnounced**(`args`: [ProxyProxyAnnouncedArgs](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md), `info`: [BaseTxInfo](../interfaces/_packages_txwrapper_core_src_types_method_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_packages_txwrapper_core_src_types_method_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_packages_txwrapper_core_src_types_method_.unsignedtransaction.md)

*Defined in [packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts:41](https://github.com/paritytech/txwrapper-core/blob/a0a9a76/packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts#L41)*

Dispatch the given `call` from an account that the sender is authorised for through
`add_proxy`.

Removes any corresponding announcement(s).

The dispatch origin for this call must be _Signed_.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyProxyAnnouncedArgs](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md) |  |
`info` | [BaseTxInfo](../interfaces/_packages_txwrapper_core_src_types_method_.basetxinfo.md) |  |
`options` | [OptionsWithMeta](../interfaces/_packages_txwrapper_core_src_types_method_.optionswithmeta.md) |   |

**Returns:** [UnsignedTransaction](../interfaces/_packages_txwrapper_core_src_types_method_.unsignedtransaction.md)
