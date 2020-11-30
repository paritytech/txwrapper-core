**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced"

# Module: "packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced"

## Index

### Interfaces

* [ProxyProxyAnnouncedArgs](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md)

### Functions

* [proxyAnnounced](_packages_txwrapper_substrate_src_methods_proxy_proxyannounced_.md#proxyannounced)

## Functions

### proxyAnnounced

▸ **proxyAnnounced**(`args`: [ProxyProxyAnnouncedArgs](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md), `info`: BaseTxInfo, `options`: OptionsWithMeta): UnsignedTransaction

*Defined in [packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts:41](https://github.com/paritytech/txwrapper-core/blob/1c09a0e/packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts#L41)*

Dispatch the given `call` from an account that the sender is authorised for through
`add_proxy`.

Removes any corresponding announcement(s).

The dispatch origin for this call must be _Signed_.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyProxyAnnouncedArgs](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_proxyannounced_.proxyproxyannouncedargs.md) |  |
`info` | BaseTxInfo |  |
`options` | OptionsWithMeta |   |

**Returns:** UnsignedTransaction
