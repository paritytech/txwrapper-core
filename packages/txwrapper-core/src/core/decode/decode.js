"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = void 0;
const decodeSignedTx_1 = require("./decodeSignedTx");
const decodeSigningPayload_1 = require("./decodeSigningPayload");
const decodeUnsignedTx_1 = require("./decodeUnsignedTx");
function decode(data, options) {
    if (typeof data === 'string') {
        let decodedInfo;
        try {
            decodedInfo = decodeSigningPayload_1.decodeSigningPayload(data, options);
        }
        catch {
            decodedInfo = decodeSignedTx_1.decodeSignedTx(data, options);
        }
        return decodedInfo;
    }
    return decodeUnsignedTx_1.decodeUnsignedTx(data, options);
}
exports.decode = decode;
//# sourceMappingURL=decode.js.map