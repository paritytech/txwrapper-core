import * as create from './create';
import * as inspect from './inspect';
import * as metadata from './metadata';
import * as method from './method';
import * as util from './util';

export interface Core {
	/**
	 * Tools for generating metadata, decorated metadata, registries.
	 */
	metadata: typeof metadata;
	/**
	 * Tools for decoding and deriving info from transacšions at different stages
	 * of construction.
	 */
	inspect: typeof inspect;
	/**
	 * Tools for constructing the transaction at various stages.
	 */
	create: typeof create;
	/**
	 * Various utilities adjacent to txwrapper's purpose.
	 */
	util: typeof util;
	/**
	 * Tools to define the dispatchable methods.
	 */
	method: typeof method;
}

export const core: Core = {
	metadata,
	inspect,
	create,
	util,
	method,
};
