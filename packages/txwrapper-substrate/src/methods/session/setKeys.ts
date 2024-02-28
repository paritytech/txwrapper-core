import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface SessionSetKeysArgs extends Args {
	/**
	 * The 5 keys to set.
	 */
	keys: {
		authority_discovery: string;
		babe: string;
		grandpa: string;
		im_online: string;
		para_assignment: string;
		para_validator: string;
	};
	/**
	 * Proof of key ownership (currently unused).
	 */
	proof?: string;
}

/**
 * Sets the session key(s) of the function caller to `key`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function setKeys(
	args: SessionSetKeysArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta,
): UnsignedTransaction {
	const { keys, proof = '0x' } = args;

	return defineMethod(
		{
			method: {
				args: {
					keys,
					proof,
				},
				name: 'setKeys',
				pallet: 'session',
			},
			...info,
		},
		options,
	);
}
