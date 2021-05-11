"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSignedTx = void 0;
const __1 = require("..");
/**
 * Serialize a signed transaction in a format that can be submitted over the
 * Node RPC Interface from the signing payload and signature produced by the
 * remote signer.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param signature - Signature of the signing payload produced by the remote
 * signer.
 * @param options - Registry and metadata used for constructing the method.
 */
function createSignedTx(unsigned, signature, options) {
    const { metadataRpc, registry } = options;
    registry.setMetadata(__1.createMetadata(registry, metadataRpc));
    const extrinsic = registry.createType('Extrinsic', { method: unsigned.method }, { version: unsigned.version });
    extrinsic.addSignature(unsigned.address, signature, unsigned);
    return extrinsic.toHex();
}
exports.createSignedTx = createSignedTx;
//# sourceMappingURL=createSignedTx.js.map