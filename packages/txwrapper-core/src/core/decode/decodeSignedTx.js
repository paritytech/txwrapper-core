"use strict";
/**
 * @ignore
 */ /** */
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeSignedTx = void 0;
const util_1 = require("@polkadot/util");
const __1 = require("..");
/**
 * Parse the transaction information from a signed transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
function decodeSignedTx(signedTx, options) {
    const { metadataRpc, registry } = options;
    registry.setMetadata(__1.createMetadata(registry, metadataRpc));
    const tx = registry.createType('Extrinsic', util_1.hexToU8a(signedTx), {
        isSigned: true,
    });
    const methodCall = registry.createType('Call', tx.method);
    const method = __1.toTxMethod(registry, methodCall);
    return {
        address: tx.signer.toString(),
        eraPeriod: tx.era.asMortalEra.period.toNumber(),
        metadataRpc,
        method,
        nonce: tx.nonce.toNumber(),
        tip: tx.tip.toNumber(),
    };
}
exports.decodeSignedTx = decodeSignedTx;
//# sourceMappingURL=decodeSignedTx.js.map