import { AllConvictions } from '@polkadot/types/interfaces/democracy/definitions';
import { ArrayElementType } from '@polkadot/types/types';

/**
 * A vote in a referendum
 */
type Vote = {
	/*
	 * Whether the vote is to enact the proposal (true) or keep the status quo (false).
	 */
	aye: boolean;
	/*
	 * A value denoting the strength of conviction of a vote. Can be "None", "Locked1x",
	 * "Locked2x", "Locked3x", "Locked4x", or "Locked5x".
	 */
	conviction: ArrayElementType<typeof AllConvictions>;
};

/**
 * A vote in a referendum. Can be one of:
 * - Standard: A standard vote, one-way (approve or reject) with a given amount
 * of conviction.
 * - Split: A split vote with balances given for both ways, and with no
 * conviction. This is useful for parachains, which vote on behalf of their 
participants and are free to choose their own way of splitting up the total
balance. The stake behind a parachain can e.g. be split e.g. 2/3 aye and
1/3 nay.
 */

export type AccountVote =
	| {
			Standard: {
				balance: number;
				vote: Vote;
			};
	  }
	| {
			Split: {
				aye: number;
				nay: number;
			};
	  };
