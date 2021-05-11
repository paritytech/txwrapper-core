"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_METHOD_ARGS = exports.WESTEND_50_TEST_OPTIONS = void 0;
const index_1 = require("../index");
const westendMetadataRpc50_1 = __importDefault(require("./westendMetadataRpc50"));
exports.WESTEND_50_TEST_OPTIONS = {
    metadataRpc: westendMetadataRpc50_1.default,
    registry: index_1.getRegistry({
        specName: 'westend',
        chainName: 'Westend',
        specVersion: 50,
        metadataRpc: westendMetadataRpc50_1.default,
    }),
};
/**
 * Centralized source for all arguments used in specs for methods.
 */
exports.TEST_METHOD_ARGS = {
    crowdloan: {
        contribute: {
            value: '90071992547409910',
            index: 12,
            signature: {
                Sr25519: '0xFFFFFFFFFFFFFFFF',
            },
        },
        withdraw: {
            index: 12,
            who: 'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P', // seed "//Charlie"
        },
    },
};
//# sourceMappingURL=constants.js.map