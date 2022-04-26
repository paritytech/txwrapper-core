[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-substrate/src](../modules/txwrapper_substrate_src.md) / [methods](../modules/txwrapper_substrate_src.methods.md) / [proxy](../modules/txwrapper_substrate_src.methods.proxy.md) / ProxyRejectAnnouncementArgs

# Interface: ProxyRejectAnnouncementArgs

[methods](../modules/txwrapper_substrate_src.methods.md).[proxy](../modules/txwrapper_substrate_src.methods.proxy.md).ProxyRejectAnnouncementArgs

## Hierarchy

- [`Args`](../modules/txwrapper_core_src.md#args)

  ↳ **`ProxyRejectAnnouncementArgs`**

## Table of contents

### Properties

- [callHash](txwrapper_substrate_src.methods.proxy.ProxyRejectAnnouncementArgs.md#callhash)
- [delegate](txwrapper_substrate_src.methods.proxy.ProxyRejectAnnouncementArgs.md#delegate)

## Properties

### callHash

• **callHash**: `string`

The hash of the call that the proxy wants to execute.

#### Defined in

[txwrapper-substrate/src/methods/proxy/rejectAnnouncement.ts:17](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/proxy/rejectAnnouncement.ts#L17)

___

### delegate

• **delegate**: `string`

The account that previously announced the call.

#### Defined in

[txwrapper-substrate/src/methods/proxy/rejectAnnouncement.ts:13](https://github.com/paritytech/txwrapper-core/blob/9387f90/packages/txwrapper-substrate/src/methods/proxy/rejectAnnouncement.ts#L13)
