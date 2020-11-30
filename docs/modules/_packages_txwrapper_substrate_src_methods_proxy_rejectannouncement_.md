**[@substrate/txwrapper-substrate](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-substrate/src/methods/proxy/rejectAnnouncement"

# Module: "packages/txwrapper-substrate/src/methods/proxy/rejectAnnouncement"

## Index

### Interfaces

* [ProxyRejectAnnouncementArgs](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_rejectannouncement_.proxyrejectannouncementargs.md)

### Functions

* [rejectAnnouncement](_packages_txwrapper_substrate_src_methods_proxy_rejectannouncement_.md#rejectannouncement)

## Functions

### rejectAnnouncement

▸ **rejectAnnouncement**(`args`: [ProxyRejectAnnouncementArgs](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_rejectannouncement_.proxyrejectannouncementargs.md), `info`: BaseTxInfo, `options`: OptionsWithMeta): UnsignedTransaction

*Defined in [packages/txwrapper-substrate/src/methods/proxy/rejectAnnouncement.ts:27](https://github.com/paritytech/txwrapper-core/blob/32a3349/packages/txwrapper-substrate/src/methods/proxy/rejectAnnouncement.ts#L27)*

Remove the given announcement of a delegate and return the deposit. Made by the proxied account.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyRejectAnnouncementArgs](../interfaces/_packages_txwrapper_substrate_src_methods_proxy_rejectannouncement_.proxyrejectannouncementargs.md) | Arguments specific to this method. |
`info` | BaseTxInfo | Information required to construct the transaction. |
`options` | OptionsWithMeta | Registry and metadata used for constructing the method.  |

**Returns:** UnsignedTransaction
