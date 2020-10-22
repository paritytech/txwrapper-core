**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/proxy/proxyAnnounced"

# Module: "src/methods/proxy/proxyAnnounced"

## Index

### Interfaces

* [ProxyProxyAnnouncedArgs](../interfaces/_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md)

### Functions

* [proxyAnnounced](_src_methods_proxy_proxyannounced_.md#proxyannounced)

## Functions

### proxyAnnounced

▸ **proxyAnnounced**(`args`: [ProxyProxyAnnouncedArgs](../interfaces/_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/proxy/proxyAnnounced.ts:41](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/proxy/proxyAnnounced.ts#L41)*

Dispatch the given `call` from an account that the sender is authorised for through
`add_proxy`.

Removes any corresponding announcement(s).

The dispatch origin for this call must be _Signed_.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyProxyAnnouncedArgs](../interfaces/_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md) |  |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) |  |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) |   |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
