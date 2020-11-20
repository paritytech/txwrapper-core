/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/**
 * @ignore
 */ /** */
import { createTypeUnsafe, TypeRegistry } from '@polkadot/types';
import { Compact } from '@polkadot/types';
import { AbstractInt } from '@polkadot/types/codec/AbstractInt';
import { Call } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';
import { stringCamelCase } from '@polkadot/util';

import { Args, TxMethod } from '../../types/method';

/**
 * From a PolkadotJs `Call` type, get a serializable object representing the
 * call. All integers are also serialized to base 10 strings in order to be safe.
 *
 * @param registry - The type registry
 * @param method - The method to serialize
 * @param toInt - Whether or not to forcibly serialize integers in the call args
 * to base-10 strings. If false, integers will either be a number or hex.
 * Defaults to false
 */
export function toTxMethod(registry: TypeRegistry, method: Call): TxMethod {
	// Mapping of argName->argType
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const argsDef = JSON.parse(method.Type.args);
	// Mapping of argName->argValue
	const args = Object.keys(argsDef).reduce((accumulator, key, index) => {
		let codec = createTypeUnsafe(registry, argsDef[key], [
			method.args[index],
		]);

		if (codec instanceof Compact) {
			// Unwrap the compact so we can check the interior type
			codec = codec.unwrap() as Codec;
		}

		// Forcibly serialize all integers to strings
		const jsonArg =
			codec instanceof AbstractInt ? codec.toString(10) : codec.toJSON();

		accumulator[stringCamelCase(key)] = jsonArg;
		return accumulator;
	}, {} as Args);

	return {
		args,
		name: method.methodName,
		pallet: method.sectionName,
	};
}
