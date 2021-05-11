"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.announce = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Publish the hash of a proxy-call that will be made in the future.
 *
 * This must be called `ProxyDefinition.delay` blocks before the corresponding
 * `proxy` is attempted if the delay associated with the proxy relationship is
 * greater than zero. When a `ProxyDefinition.delay` is 0 `announce` is not neccesary
 * and `proxy` can be called at any time.
 *
 * No more than `MaxPending` announcements may be made at any one time. On Kusama and Polkadot
 * `MaxPending` is set to 32.
 *
 * This will take a deposit of `AnnouncementDepositFactor` as well as
 * `AnnouncementDepositBase` if there are no other pending announcements.
 *
 * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function announce(args, info, options) {
    return txwrapper_core_1.defineMethod({
        method: {
            args,
            name: 'announce',
            pallet: 'proxy',
        },
        ...info,
    }, options);
}
exports.announce = announce;
//# sourceMappingURL=announce.js.map