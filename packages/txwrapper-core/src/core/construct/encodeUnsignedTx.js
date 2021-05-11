"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeUnsignedTransaction = void 0;
/**
 * Encode an unsigned transaction to submit.
 *
 * @param unsigned - An Unsigned Transaction that will be encoded.
 * @param options - Registry used for constructing the payload.
 */
function encodeUnsignedTransaction(unsigned, options) {
    const tx = options.registry.createType('Extrinsic', { method: unsigned.method }, { version: unsigned.version });
    return tx.toHex();
}
exports.encodeUnsignedTransaction = encodeUnsignedTransaction;
//# sourceMappingURL=encodeUnsignedTx.js.map