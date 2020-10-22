**@substrate/txwrapper**

> [README](../README.md) / [Globals](../globals.md) / "src/methods/proxy/rejectAnnouncement"

# Module: "src/methods/proxy/rejectAnnouncement"

## Index

### Interfaces

* [ProxyRejectAnnouncementArgs](../interfaces/_src_methods_proxy_rejectannouncement_.proxyrejectannouncementargs.md)

### Functions

* [rejectAnnouncement](_src_methods_proxy_rejectannouncement_.md#rejectannouncement)

## Functions

### rejectAnnouncement

▸ **rejectAnnouncement**(`args`: [ProxyRejectAnnouncementArgs](../interfaces/_src_methods_proxy_rejectannouncement_.proxyrejectannouncementargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)

*Defined in [src/methods/proxy/rejectAnnouncement.ts:27](https://github.com/paritytech/txwrapper/blob/ddb0953/src/methods/proxy/rejectAnnouncement.ts#L27)*

Remove the given announcement of a delegate and return the deposit. Made by the proxied account.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [ProxyRejectAnnouncementArgs](../interfaces/_src_methods_proxy_rejectannouncement_.proxyrejectannouncementargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** [UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)
