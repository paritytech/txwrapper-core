import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface NominationPoolsSetClaimPermission extends Args {
	/**
	 * Account to claim reward. The value will either be:
     * `Permissioned` | `PermissionlessCompound` | `PermissionlessWithdraw` | `PermissionlessAll`
	 */
    permission: string;
}

/**
 * Allows a pool member to set a claim permission to allow or disallow permissionless
 * bonding and withdrawing.
 *
 * By default, this is `Permissioned`, which implies only the pool member themselves can
 * claim their pending rewards. If a pool member wishes so, they can set this to
 * `PermissionlessAll` to allow any account to claim their rewards and bond extra to the
 * pool.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function setClaimPermission(
	args: NominationPoolsSetClaimPermission,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'setClaimPermission',
				pallet: 'nominationPools',
			},
			...info,
		},
		options
	);
}
