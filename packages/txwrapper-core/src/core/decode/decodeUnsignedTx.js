"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeUnsignedTx = void 0;
const __1 = require("..");
/**
 * Parse the transaction information from an unsigned transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
function decodeUnsignedTx(unsigned, options) {
    const { metadataRpc, registry } = options;
    registry.setMetadata(__1.createMetadata(registry, metadataRpc));
    const methodCall = registry.createType('Call', unsigned.method);
    const method = __1.toTxMethod(registry, methodCall);
    return {
        address: unsigned.address,
        blockHash: unsigned.blockHash,
        blockNumber: registry
            .createType('BlockNumber', unsigned.blockNumber)
            .toNumber(),
        eraPeriod: registry.createType('MortalEra', unsigned.era).period.toNumber(),
        genesisHash: unsigned.genesisHash,
        metadataRpc,
        method,
        nonce: registry.createType('Compact<Index>', unsigned.nonce).toNumber(),
        specVersion: registry.createType('u32', unsigned.specVersion).toNumber(),
        tip: registry.createType('Compact<Balance>', unsigned.tip).toNumber(),
        transactionVersion: registry
            .createType('u32', unsigned.transactionVersion)
            .toNumber(),
    };
}
exports.decodeUnsignedTx = decodeUnsignedTx;
//# sourceMappingURL=decodeUnsignedTx.js.map