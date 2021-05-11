"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTxMethod = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/**
 * @ignore
 */ /** */
const types_1 = require("@polkadot/types");
const types_2 = require("@polkadot/types");
const AbstractInt_1 = require("@polkadot/types/codec/AbstractInt");
const util_1 = require("@polkadot/util");
/**
 * From a PolkadotJs `Call` type, get a serializable object representing the
 * call. All integers are serialized to base 10 strings in order to be safe.
 *
 * @param registry - The type registry
 * @param method - The method to serialize
 */
function toTxMethod(registry, method) {
    // Mapping of argName->argType
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const argsDef = JSON.parse(method.Type.args);
    // Mapping of argName->argValue
    const args = Object.keys(argsDef).reduce((accumulator, key, index) => {
        let codec = types_1.createTypeUnsafe(registry, argsDef[key], [method.args[index]]);
        if (codec instanceof types_2.Compact) {
            // Unwrap the compact so we can check the interior type
            codec = codec.unwrap();
        }
        // Forcibly serialize all integers to strings
        const jsonArg = codec instanceof AbstractInt_1.AbstractInt ? codec.toString(10) : codec.toJSON();
        accumulator[util_1.stringCamelCase(key)] = jsonArg;
        return accumulator;
    }, {});
    return {
        args,
        name: method.method,
        pallet: method.section,
    };
}
exports.toTxMethod = toTxMethod;
//# sourceMappingURL=toTxMethod.js.map