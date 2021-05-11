"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_METHOD_ARGS = exports.MANDALA_602_TEST_OPTIONS = void 0;
const getRegistryMandala_1 = require("./getRegistryMandala");
// Static metadata from mandala, an acala test network that uses ORML pallets
const mandala602MetadataRpc_1 = require("./mandala602MetadataRpc");
/**
 * Test options for the mandala v602 runtime.
 */
exports.MANDALA_602_TEST_OPTIONS = {
    metadataRpc: mandala602MetadataRpc_1.mandala602MetadataRpc,
    registry: getRegistryMandala_1.getRegistryMandala(602, mandala602MetadataRpc_1.mandala602MetadataRpc),
};
/**
 * Centralized source for all arguments used in specs for methods.
 */
exports.TEST_METHOD_ARGS = {
    currencies: {
        transfer: {
            amount: 12,
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            currencyId: { Token: 'ACA' },
        },
        transferNativeCurrency: {
            amount: 12,
            dest: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
        },
    },
};
//# sourceMappingURL=constants.js.map