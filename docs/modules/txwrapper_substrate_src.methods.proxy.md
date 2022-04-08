[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](txwrapper_substrate_src.md) / [methods](txwrapper_substrate_src.methods.md) / proxy

# Namespace: proxy

[txwrapper-substrate/src](txwrapper_substrate_src.md).[methods](txwrapper_substrate_src.methods.md).proxy

## Table of contents

### Interfaces

- [ProxyAddProxy](../interfaces/txwrapper_substrate_src.methods.proxy.ProxyAddProxy.md)
- [ProxyProxy](../interfaces/txwrapper_substrate_src.methods.proxy.ProxyProxy.md)
- [ProxyProxyAnnouncedArgs](../interfaces/txwrapper_substrate_src.methods.proxy.ProxyProxyAnnouncedArgs.md)
- [ProxyRejectAnnouncementArgs](../interfaces/txwrapper_substrate_src.methods.proxy.ProxyRejectAnnouncementArgs.md)

### Functions

- [addProxy](txwrapper_substrate_src.methods.proxy.md#addproxy)
- [announce](txwrapper_substrate_src.methods.proxy.md#announce)
- [anonymous](txwrapper_substrate_src.methods.proxy.md#anonymous)
- [killAnonymous](txwrapper_substrate_src.methods.proxy.md#killanonymous)
- [proxy](txwrapper_substrate_src.methods.proxy.md#proxy)
- [proxyAnnounced](txwrapper_substrate_src.methods.proxy.md#proxyannounced)
- [rejectAnnouncement](txwrapper_substrate_src.methods.proxy.md#rejectannouncement)
- [removeProxies](txwrapper_substrate_src.methods.proxy.md#removeproxies)
- [removeProxy](txwrapper_substrate_src.methods.proxy.md#removeproxy)

## Functions

### addProxy

▸ **addProxy**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Register a proxy account for the sender that is able to make calls on its behalf.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`ProxyAddProxy`](../interfaces/txwrapper_substrate_src.methods.proxy.ProxyAddProxy.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/proxy/addProxy.ts:32](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/proxy/addProxy.ts#L32)

___

### announce

▸ **announce**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Publish the hash of a proxy-call that will be made in the future.

This must be called `ProxyDefinition.delay` blocks before the corresponding
`proxy` is attempted if the delay associated with the proxy relationship is
greater than zero. When a `ProxyDefinition.delay` is 0 `announce` is not neccesary
and `proxy` can be called at any time.

No more than `MaxPending` announcements may be made at any one time. On Kusama and Polkadot
`MaxPending` is set to 32.

This will take a deposit of `AnnouncementDepositFactor` as well as
`AnnouncementDepositBase` if there are no other pending announcements.

The dispatch origin for this call must be _Signed_ and a proxy of `real`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`ProxyAnnounceArgs`](../interfaces/txwrapper_substrate_src._internal_.ProxyAnnounceArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/proxy/announce.ts:40](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/proxy/announce.ts#L40)

___

### anonymous

▸ **anonymous**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
initialize it with a proxy of `proxy_type` for `origin` sender.

Requires a `Signed` origin

Fails with `Duplicate` if this has already been called in this transaction, from the
same sender, with the same parameters.

Fails if there are insufficient funds to pay for deposit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`ProxyAnonymousArgs`](../interfaces/txwrapper_substrate_src._internal_.ProxyAnonymousArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/proxy/anonymous.ts:44](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/proxy/anonymous.ts#L44)

___

### killAnonymous

▸ **killAnonymous**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Removes a previously spawned anonymous proxy.

WARNING: **All access to this account will be lost.** Any funds held in it will be
inaccessible.

Requires a `Signed` origin, and the sender account must have been created by a call to
`anonymous` with corresponding parameters.

Fails with `NoPermission` in case the caller is not a previously created anonymous
account whose `anonymous` call has corresponding parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`ProxyKillAnonymousArgs`](../interfaces/txwrapper_substrate_src._internal_.ProxyKillAnonymousArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/proxy/killAnonymous.ts:49](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/proxy/killAnonymous.ts#L49)

___

### proxy

▸ **proxy**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Dispatch the given `call` from an account for which the sender is authorized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`ProxyProxy`](../interfaces/txwrapper_substrate_src.methods.proxy.ProxyProxy.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/proxy/proxy.ts:33](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/proxy/proxy.ts#L33)

___

### proxyAnnounced

▸ **proxyAnnounced**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Dispatch the given `call` from an account that the sender is authorised for through
`add_proxy`.

Removes any corresponding announcement(s).

The dispatch origin for this call must be _Signed_.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ProxyProxyAnnouncedArgs`](../interfaces/txwrapper_substrate_src.methods.proxy.ProxyProxyAnnouncedArgs.md) |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts:41](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/proxy/proxyAnnounced.ts#L41)

___

### rejectAnnouncement

▸ **rejectAnnouncement**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Remove the given announcement of a delegate and return the deposit. Made by the proxied account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`ProxyRejectAnnouncementArgs`](../interfaces/txwrapper_substrate_src.methods.proxy.ProxyRejectAnnouncementArgs.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/proxy/rejectAnnouncement.ts:27](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/proxy/rejectAnnouncement.ts#L27)

___

### removeProxies

▸ **removeProxies**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Unregister all proxy accounts for the sender.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/proxy/removeProxies.ts:15](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/proxy/removeProxies.ts#L15)

___

### removeProxy

▸ **removeProxy**(`args`, `info`, `options`): [`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

Unregister a proxy account for the sender.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`ProxyAddProxy`](../interfaces/txwrapper_substrate_src.methods.proxy.ProxyAddProxy.md) | Arguments specific to this method. |
| `info` | [`BaseTxInfo`](../interfaces/txwrapper_core_src.BaseTxInfo.md) | Information required to construct the transaction. |
| `options` | [`OptionsWithMeta`](../interfaces/txwrapper_core_src.OptionsWithMeta.md) | Registry and metadata used for constructing the method. |

#### Returns

[`UnsignedTransaction`](../interfaces/txwrapper_core_src.UnsignedTransaction.md)

#### Defined in

[txwrapper-substrate/src/methods/proxy/removeProxy.ts:17](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/proxy/removeProxy.ts#L17)
