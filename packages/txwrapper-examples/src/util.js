"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signWith = exports.rpcToLocalNode = void 0;
const Extrinsic_1 = require("@polkadot/types/extrinsic/v4/Extrinsic");
const txwrapper_polkadot_1 = require("@substrate/txwrapper-polkadot");
const node_fetch_1 = __importDefault(require("node-fetch"));
/**
 * Send a JSONRPC request to the node at http://localhost:9933.
 *
 * @param method - The JSONRPC request method.
 * @param params - The JSONRPC request params.
 */
function rpcToLocalNode(method, params = []) {
    return node_fetch_1.default('http://localhost:9933', {
        body: JSON.stringify({
            id: 1,
            jsonrpc: '2.0',
            method,
            params,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    })
        .then((response) => response.json())
        .then(({ error, result }) => {
        if (error) {
            throw new Error(`${error.code} ${error.message}: ${JSON.stringify(error.data)}`);
        }
        return result;
    });
}
exports.rpcToLocalNode = rpcToLocalNode;
/**
 * Signing function. Implement this on the OFFLINE signing device.
 *
 * @param pair - The signing pair.
 * @param signingPayload - Payload to sign.
 */
function signWith(pair, signingPayload, options) {
    const { registry, metadataRpc } = options;
    // Important! The registry needs to be updated with latest metadata, so make
    // sure to run `registry.setMetadata(metadata)` before signing.
    registry.setMetadata(txwrapper_polkadot_1.createMetadata(registry, metadataRpc));
    const { signature } = registry
        .createType('ExtrinsicPayload', signingPayload, {
        version: Extrinsic_1.EXTRINSIC_VERSION,
    })
        .sign(pair);
    return signature;
}
exports.signWith = signWith;
//# sourceMappingURL=util.js.map