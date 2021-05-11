"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineMethod = void 0;
const Extrinsic_1 = require("@polkadot/types/extrinsic/v4/Extrinsic");
const util_1 = require("@polkadot/util");
const metadata_1 = require("../metadata");
/**
 * Default values for tx info, if the user doesn't specify any
 */
const DEFAULTS = {
    /**
     * Don't add any tip by default.
     */
    tip: 0,
    /**
     * Construct a mortal extrinsic of ~6m24s minutes.
     */
    eraPeriod: 64,
};
/**
 * Helper function to construct an offline method.
 *
 * @param info - All info necessary to construct a method. That includes base
 * tx info, as well as method name & arguments.
 */
function defineMethod(info, options) {
    const { metadataRpc, registry } = options;
    registry.setMetadata(metadata_1.createMetadata(registry, metadataRpc));
    const tx = metadata_1.createDecoratedTx(registry, metadataRpc);
    const methodFunction = !!tx[info.method.pallet] &&
        tx[info.method.pallet][info.method.name];
    if (!methodFunction) {
        throw new Error('pallet or method not found in metadata');
    }
    const method = methodFunction(...methodFunction.meta.args.map((arg) => {
        if (info.method.args[util_1.stringCamelCase(arg.name.toString())] === undefined) {
            throw new Error(`Method ${info.method.pallet}::${info.method.name} expects argument ${arg.toString()}, but got undefined`);
        }
        return info.method.args[util_1.stringCamelCase(arg.name.toString())];
    })).toHex();
    const eraPeriod = 
    // If `info.eraPeriod` is set, use it.
    info.eraPeriod ||
        // As last resort, take the default value.
        DEFAULTS.eraPeriod;
    return {
        address: info.address,
        blockHash: info.blockHash,
        blockNumber: registry.createType('BlockNumber', info.blockNumber).toHex(),
        era: registry
            .createType('ExtrinsicEra', {
            current: info.blockNumber,
            period: eraPeriod,
        })
            .toHex(),
        genesisHash: info.genesisHash,
        metadataRpc,
        method,
        nonce: registry.createType('Compact<Index>', info.nonce).toHex(),
        signedExtensions: registry.signedExtensions,
        specVersion: registry.createType('u32', info.specVersion).toHex(),
        tip: registry
            .createType('Compact<Balance>', info.tip || DEFAULTS.tip)
            .toHex(),
        transactionVersion: registry
            .createType('u32', info.transactionVersion)
            .toHex(),
        version: Extrinsic_1.EXTRINSIC_VERSION,
    };
}
exports.defineMethod = defineMethod;
//# sourceMappingURL=defineMethod.js.map