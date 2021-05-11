"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolkadotSS58Format = exports.TEST_METHOD_ARGS = exports.POLKADOT_29_TEST_OPTIONS = exports.POLKADOT_25_TEST_OPTIONS = exports.TEST_BASE_TX_INFO_V29 = exports.TEST_BASE_TX_INFO = exports.metadataRpc = void 0;
const getRegistryPolkadot_1 = require("./getRegistryPolkadot");
const staticV3_1_1_1 = __importDefault(require("./staticV3-1-1"));
exports.metadataRpc = staticV3_1_1_1.default;
const staticV4_3_1_1 = __importDefault(require("./staticV4-3-1"));
/**
 * Base tx information common to all tested transactions
 */
exports.TEST_BASE_TX_INFO = {
    address: '15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5',
    blockHash: '0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
    blockNumber: 4302222,
    eraPeriod: 2400,
    genesisHash: '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
    metadataRpc: staticV3_1_1_1.default,
    nonce: 2,
    specVersion: 1019,
    tip: 0,
    transactionVersion: 6,
};
/**
 * Base tx information common to all tested transactions using runtime v29
 */
exports.TEST_BASE_TX_INFO_V29 = {
    address: '15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5',
    blockHash: '0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
    blockNumber: 4302222,
    eraPeriod: 2400,
    genesisHash: '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
    metadataRpc: staticV4_3_1_1.default,
    nonce: 2,
    specVersion: 1019,
    tip: 0,
    transactionVersion: 6,
};
/**
 * Use this registry in tests.
 */
exports.POLKADOT_25_TEST_OPTIONS = {
    metadataRpc: staticV3_1_1_1.default,
    registry: getRegistryPolkadot_1.getRegistryPolkadot(25, staticV3_1_1_1.default),
};
/**
 * Test options for runtime v29
 */
exports.POLKADOT_29_TEST_OPTIONS = {
    metadataRpc: staticV4_3_1_1.default,
    registry: getRegistryPolkadot_1.getRegistryPolkadot(29, staticV4_3_1_1.default),
};
/**
 * Dummy arguments for all methods we're testing.
 */
exports.TEST_METHOD_ARGS = {
    balances: {
        transfer: {
            dest: '14PiLtTQ3EBwsn6KimaBLH7qsZrryxFZtqFwAognHVZhFxU1',
            value: 12,
        },
    },
};
/**
 * Prefix for ss58-encoded addresses on Polkadot, Kusama, and Westend. Note:
 * 42, the Westend prefix, is also the default for Substrate-based chains.
 */
var PolkadotSS58Format;
(function (PolkadotSS58Format) {
    PolkadotSS58Format[PolkadotSS58Format["polkadot"] = 0] = "polkadot";
    PolkadotSS58Format[PolkadotSS58Format["kusama"] = 2] = "kusama";
    PolkadotSS58Format[PolkadotSS58Format["westend"] = 42] = "westend";
    PolkadotSS58Format[PolkadotSS58Format["substrate"] = 42] = "substrate";
})(PolkadotSS58Format = exports.PolkadotSS58Format || (exports.PolkadotSS58Format = {}));
//# sourceMappingURL=constants.js.map