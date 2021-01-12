/**
 * Arguments for methods to use in testing.
 */
export const TEST_METHOD_ARGS = {
	balances: {
		transferKeepAlive: {
			dest: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s',
			value: 12,
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
			call:
				'0x0500306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc200f00a0be1c448399',
		},
		proxy: {
			real: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
			forceProxyType: 'Any',
			call:
				'0x0500306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc200f00a0be1c448399',
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
};
