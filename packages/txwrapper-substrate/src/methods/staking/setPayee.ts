import {
    Args,
    BaseTxInfo,
    defineMethod,
    OptionsWithMeta,
    UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface StakingSetPayeeArgs extends Args {
    /**
     * The `RewardDestination`. It can be one of 'Staking', 'Stash', or 'Controller'.
     */
    payee: string;
}

/**
 * (Re-)set the payment target for staking rewards.
 *
 * Effects will be felt at the beginning of the next era.
 *
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function setPayee(
    args: StakingSetPayeeArgs,
    info: BaseTxInfo,
    options: OptionsWithMeta
): UnsignedTransaction {
    return defineMethod(
        {
            method: {
                args,
                name: 'setPayee',
                pallet: 'staking',
            },
            ...info,
        },
        options
    );
}