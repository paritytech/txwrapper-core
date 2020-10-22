import * as methods from './methods';

export * from './createSignedTx';
export * from './createSigningPayload';
export * from './inspect/decode';
export * from './deriveAddress';
export * from './getTxHash';
export * from './importPrivateKey';
export * from './methods'; // We can remove this export, since we export `methods`
export * from './util/claims';
export * from './util/encodeUnsignedTx';
export {
  KUSAMA_SS58_FORMAT,
  POLKADOT_SS58_FORMAT,
  WESTEND_SS58_FORMAT,
} from './customTypes/constants';
export { getRegistry } from './util/metadata';
export { Args, TxMethod, TxInfo } from './util/method';
export * from './util/types';

export { methods };
