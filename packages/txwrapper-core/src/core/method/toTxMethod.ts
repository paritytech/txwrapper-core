/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/**
 * @ignore
 */ /** */
import { createTypeUnsafe, TypeRegistry } from '@polkadot/types';
import { Compact } from '@polkadot/types';
import { Call } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';
import { AbstractInt } from '@polkadot/types-codec/abstract/AbstractInt';
import { BN, stringCamelCase } from '@polkadot/util';

import { Args, TxMethod } from '../../types/method';

/**
 * From a PolkadotJs `Call` type, get a serializable object representing the
 * call. All integers are serialized to base 10 strings in order to be safe.
 *
 * @param registry - The type registry
 * @param method - The method to serialize
 */
export function toTxMethod(registry: TypeRegistry, method: Call): TxMethod {
	// Mapping of argName->argType
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const argsDef = JSON.parse(method.Type.args as unknown as string);
	// Mapping of argName->argValue
	const args = Object.keys(argsDef).reduce((accumulator, key, index) => {
		let codec: unknown = createTypeUnsafe(registry, argsDef[key], [
			method.args[index],
		]);

		if (codec instanceof Compact) {
			// Unwrap the compact so we can check the interior type
			codec = codec.unwrap() as Codec;
		}

		// Forcibly serialize all integers to strings
		const jsonArg =
			codec instanceof AbstractInt
				? codec.toString(10)
				: (codec as BN).toJSON();

		accumulator[stringCamelCase(key)] = jsonArg;
		return accumulator;
	}, {} as Args);

	return {
		args,
		name: method.method,
		pallet: method.section,
	};
}
