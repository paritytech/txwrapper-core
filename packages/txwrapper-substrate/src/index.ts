/**
 * Selected dispatchables of Substrate pallets, to be re-exported by chain specific txwrappers.
 * 
 * @module txwrapper-substrate
 */
// Note: In the future we may re-export txwrapper-core if this library makes
// sense to expose as standalone to end users (and not just chain builders).
export * as methods from './methods';
