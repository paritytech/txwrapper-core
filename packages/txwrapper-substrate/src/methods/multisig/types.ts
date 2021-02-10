/**
 * A global extrinsic index, formed as the extrinsic index within a block, together with that
 * block's height. This allows a transaction in which a multisig operation of a particular
 * composite was created to be uniquely identified.
 */
export type Timepoint = {
	/**
	 * The height of the chain at the point in time.
	 */
	height: number | string;
	/**
	 *  The index of the extrinsic in the block it was executed in.
	 */
	index: number | string;
};
