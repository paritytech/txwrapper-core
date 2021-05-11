"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vesting = exports.utility = exports.system = exports.staking = exports.session = exports.proxy = exports.multisig = exports.democracy = exports.balances = exports.assets = void 0;
// Name exports to create namespaces that map to pallets
exports.assets = __importStar(require("./assets"));
exports.balances = __importStar(require("./balances"));
exports.democracy = __importStar(require("./democracy"));
exports.multisig = __importStar(require("./multisig"));
exports.proxy = __importStar(require("./proxy"));
exports.session = __importStar(require("./session"));
exports.staking = __importStar(require("./staking"));
exports.system = __importStar(require("./system"));
exports.utility = __importStar(require("./utility"));
exports.vesting = __importStar(require("./vesting"));
//# sourceMappingURL=index.js.map