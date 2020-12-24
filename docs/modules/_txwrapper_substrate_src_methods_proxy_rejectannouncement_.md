**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / "txwrapper-substrate/src/methods/proxy/rejectAnnouncement"

# Module: "txwrapper-substrate/src/methods/proxy/rejectAnnouncement"

## Index

### Interfaces

* [ProxyRejectAnnouncementArgs](../interfaces/_txwrapper_substrate_src_methods_proxy_rejectannouncement_.proxyrejectannouncementargs.md)

### Functions

* [rejectAnnouncement](_txwrapper_substrate_src_methods_proxy_rejectannouncement_.md#rejectannouncement)

## Functions

### rejectAnnouncement

▸ **rejectAnnouncement**(`args`: [ProxyRejectAnnouncementArgs](../interfaces/_txwrapper_substrate_src_methods_proxy_rejectannouncement_.proxyrejectannouncementargs.md), `info`: [BaseTxInfo](../interfaces/_txwrapper_core_src_types_method_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md)

*Defined in [packages/txwrapper-substrate/src/methods/proxy/rejectAnnouncement.ts:27](https://github.com/paritytech/txwrapper-core/blob/731a943/packages/txwrapper-substrate/src/methods/proxy/rejectAnnouncement.ts#L27)*

Remove the given announcement of a delegate and return the deposit. Made by the proxied account.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyRejectAnnouncementArgs](../interfaces/_txwrapper_substrate_src_methods_proxy_rejectannouncement_.proxyrejectannouncementargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_txwrapper_core_src_types_method_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_txwrapper_core_src_types_method_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_txwrapper_core_src_types_method_.unsignedtransaction.md)
