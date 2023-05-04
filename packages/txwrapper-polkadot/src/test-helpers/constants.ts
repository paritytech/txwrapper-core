/**
 * Centralized source for all arguments used in specs for methods.
 */
export const TEST_METHOD_ARGS = {
	crowdloan: {
		contribute: {
			value: '90071992547409910',
			index: 12,
			signature: {
				Sr25519:
					'0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
			},
		},
		withdraw: {
			index: 12,
			who: 'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P', // seed "//Charlie"
		},
		addMemo: {
			index: 12,
			memo: '0xFFFFFFFFFFFFFFFF',
		},
	},
	xcmPallet: {
		V2: {
			dest: {
				V2: {
					parents: 1,
					interior: {
						here: null,
					},
				},
			},
			beneficiary: {
				V2: {
					parents: 0,
					interior: {
						x1: {
							accountId32: {
								id: '0xf5d5714c084c112843aca74f8c498da06cc5a2d63153b825189baa51043b1f0b',
								network: {
									any: null,
								},
							},
						},
					},
				},
			},
			assets: {
				V2: [
					{
						id: {
							concrete: {
								parents: 1,
								interior: {
									here: null,
								},
							},
						},
						fun: {
							fungible: 100,
						},
					},
				],
			},
			feeAssetItem: 0,
		},
		V3: {
			dest: {
				V3: {
					parents: 1,
					interior: {
						here: null,
					},
				},
			},
			beneficiary: {
				V3: {
					parents: 0,
					interior: {
						x1: {
							accountId32: {
								id: '0xf5d5714c084c112843aca74f8c498da06cc5a2d63153b825189baa51043b1f0b',
								network: null,
							},
						},
					},
				},
			},
			assets: {
				V3: [
					{
						id: {
							concrete: {
								parents: 1,
								interior: {
									here: null,
								},
							},
						},
						fun: {
							fungible: 100,
						},
					},
				],
			},
			feeAssetItem: 0,
		},
	},
};
