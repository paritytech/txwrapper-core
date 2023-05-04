/**
 * Arguments for methods to use in testing.
 */
export const TEST_METHOD_ARGS = {
	assets: {
		transfer: {
			id: 10,
			target: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob"
			amount: 1234,
		},
		transferKeepAlive: {
			id: 10,
			target: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob"
			amount: 1234,
		},
		approveTransfer: {
			id: 10,
			delegate: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob"
			amount: 1234,
		},
		transferApproved: {
			id: 10,
			owner: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
			destination: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
			amount: 1234,
		},
		cancelApproval: {
			id: 10,
			delegate: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob"
		},
	},
	balances: {
		transferKeepAlive: {
			dest: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s',
			value: 12,
		},
		transferAll: {
			dest: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s',
			keepAlive: true,
		},
	},
	democracy: {
		vote: {
			refIndex: 0,
			vote: {
				Standard: {
					balance: 1234,
					vote: { aye: true, conviction: 'Locked1x' },
				},
			},
		},
	},
	proxy: {
		addProxy: {
			delegate: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
			proxyType: 'Any',
			delay: 12345,
		},
		rejectAnnouncement: {
			delegate: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
			callHash:
				'0x474235772ae94433aee7d1befac0bfcc35fd0b5dfcf0cfc14bba7d5bbe35b778',
		},
		announce: {
			real: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
			callHash:
				'0x474235772ae94433aee7d1befac0bfcc35fd0b5dfcf0cfc14bba7d5bbe35b778',
		},
		proxyAnnounced: {
			delegate: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
			real: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
			forceProxyType: 'Any',
			call: '0x0400004aca27604ad033f7c45b1cfc23b55520826db4abb69a8a7c165461c40f330c6b0700e8764817',
		},
		proxy: {
			real: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
			forceProxyType: 'Any',
			call: '0x0400004aca27604ad033f7c45b1cfc23b55520826db4abb69a8a7c165461c40f330c6b0700e8764817',
		},
		createPure: {
			proxyType: 'Any',
			delay: 30,
			index: 1,
		},
		killPure: {
			spawner: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3',
			proxyType: 'Any',
			index: 0,
			height: 1000000,
			extIndex: 0,
		},
	},
	session: {
		setKeys: {
			keys: [
				'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
				'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
				'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P', // seed "//Charlie"
				'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
				'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
			],
			proof: '0x',
		},
	},
	staking: {
		bond: {
			controller: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob"
			value: 100,
			payee: 'Staked',
		},
		bondExtra: {
			maxAdditional: 100,
		},
		chill: {},
		nominate: {
			targets: [
				'14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob"
				'14Gjs1TD93gnwEBfDMHoCgsuf1s2TVKUP6Z1qKmAZnZ8cW5q', // seed "//Charlie"
			],
		},
		payoutStakers: {
			validatorStash: '15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5', // seed "//Alice"
			era: 100,
		},
		rebond: {
			value: 100,
		},
		setController: {
			controller: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob"
		},
		setPayee: {
			payee: 'Staked',
		},
		unbond: { value: 100 },
		validate: {
			prefs: { commission: 5 },
		},
		withdrawUnbonded: { numSlashingSpans: 11 },
	},
	system: {
		remark: {
			remark: '0x42194253', // random bytes
		},
	},
	vesting: {
		vest: {},
		vestOther: {
			target: 'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P', // seed "//Charlie"
		},
	},
	multisig: {
		cancelAsMulti: {
			threshold: 2,
			otherSignatories: [
				'15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5', // seed "//Alice"
				'14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
				'14Gjs1TD93gnwEBfDMHoCgsuf1s2TVKUP6Z1qKmAZnZ8cW5q', // seed "//Charlie"
			],
			timepoint: {
				height: 123,
				index: 3,
			},
			callHash:
				'0x804b66bc425a85fecc2a575b797dc043618ff5b8fb189a2ccc9d04148024742a',
		},
		approveAsMulti: {
			threshold: 2,
			otherSignatories: [
				'15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5', // seed "//Alice"
				'14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
				'14Gjs1TD93gnwEBfDMHoCgsuf1s2TVKUP6Z1qKmAZnZ8cW5q', // seed "//Charlie"
			],
			maybeTimepoint: {
				height: 123,
				index: 3,
			},
			callHash:
				'0xd4e2732526969517357298ac70357e6cfa78b6ce2282b55de4143168667f4f49',
			maxWeight: { refTime: '90071992547409910', proofSize: '0' },
		},
		asMulti: {
			threshold: 2,
			otherSignatories: [
				'15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5', // seed "//Alice"
				'14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
				'14Gjs1TD93gnwEBfDMHoCgsuf1s2TVKUP6Z1qKmAZnZ8cW5q', // seed "//Charlie"
			],
			maybeTimepoint: {
				height: 123,
				index: 3,
			},
			call: '0x040300cc5fc7439d3c49984e7345319de148561cd930748fb401276d289f714acdd50c28',
			maxWeight: { refTime: '90071992547409910', proofSize: '0' },
		},
	},
};
