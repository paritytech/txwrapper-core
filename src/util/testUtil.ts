/**
 * @ignore
 */ /** */

import { Keyring } from '@polkadot/api';
import metadataRpc from '@polkadot/metadata/Metadata/v11/static';
import { EXTRINSIC_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import * as methods from '../methods';
import { getRegistry } from './metadata';
// Static metadata from @polkadot/api v1.17.2. Useful for testing deprecated methods.
import apiV1_17_2MetadataRpc from './metadataStatic_api_v1_17_2';
// Static metadata from @polkadot/api v1.32.0. Useful for testing updated proxy methods.
import polkadot23MetadataRpc from './metadataStaticPolkadot23';
import { UnsignedTransaction } from './types';

export { metadataRpc };

/**
 * Base tx information common to all tested transactions
 */
export const TEST_BASE_TX_INFO = {
  address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
  blockHash:
    '0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
  blockNumber: 4302222,
  eraPeriod: 2400,
  genesisHash:
    '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
  metadataRpc,
  nonce: 2,
  specVersion: 1019,
  tip: 0,
  transactionVersion: 6,
};

/**
 * Same as TEXT_BASE_TX_INFO except that the SS58 encoding is polkadot specific and different spec version.
 */
export const CC1_TEST_BASE_TX_INFO = {
  address: '15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5', // seed "//Alice"
  blockHash:
    '0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
  blockNumber: 4302222,
  eraPeriod: 2400,
  genesisHash:
    '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
  metadataRpc,
  nonce: 2,
  specVersion: 6,
  tip: 0,
  transactionVersion: 6,
};

/**
 * Same as TEXT_BASE_TX_INFO except that the SS58 encoding is polkadot specific and different spec version.
 */
export const DOT_23_TEST_BASE_TX_INFO = {
  address: '15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5', // seed "//Alice"
  blockHash:
    '0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
  blockNumber: 4302222,
  eraPeriod: 2400,
  genesisHash:
    '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
  metadataRpc,
  nonce: 2,
  specVersion: 23,
  tip: 0,
  transactionVersion: 5,
};

/**
 * Use this registry in tests.
 */
export const KUSAMA_TEST_OPTIONS = {
  metadataRpc,
  registry: getRegistry('Kusama', 'kusama', 9999),
};

// Test options using the static metadata from @polkadot/api v1.17.2
export const API_V1_17_2_TEST_OPTIONS = {
  metadataRpc: apiV1_17_2MetadataRpc,
  registry: getRegistry('Kusama', 'kusama', 9999),
};

export const CC1_TEST_OPTIONS = {
  metadataRpc,
  registry: getRegistry('Polkadot CC1', 'polkadot', 6, metadataRpc),
};

export const DOT_23_TEST_OPTIONS = {
  metadataRpc: polkadot23MetadataRpc,
  registry: getRegistry('Polkadot', 'polkadot', 23, polkadot23MetadataRpc),
};

/**
 * Test helper to test that all base tx information is correctly populated.
 *
 * @param unsigned - Unsigned transaction to test
 */
export function testBaseTxInfo(unsigned: UnsignedTransaction): void {
  (['address', 'blockHash', 'genesisHash'] as const).forEach((key) =>
    expect(unsigned[key]).toBe(TEST_BASE_TX_INFO[key])
  );
  expect(unsigned.blockNumber).toBe('0x0041a58e');
  expect(unsigned.era).toBe('0xeb58');
  expect(unsigned.nonce).toBe('0x00000002');
  expect(unsigned.specVersion).toBe('0x000003fb');
  expect(unsigned.tip).toBe('0x00000000000000000000000000000000');
  expect(unsigned.transactionVersion).toBe('0x00000006');
  expect(unsigned.version).toBe(4);
}

/**
 * Test helper to test that all base CC1 tx information is correctly populated.
 *
 * @param unsigned - Unsigned transaction to test
 */
export function cC1TestBaseTxInfo(unsigned: UnsignedTransaction): void {
  (['address', 'blockHash', 'genesisHash'] as const).forEach((key) =>
    expect(unsigned[key]).toBe(CC1_TEST_BASE_TX_INFO[key])
  );
  expect(unsigned.blockNumber).toBe('0x0041a58e');
  expect(unsigned.era).toBe('0xeb58');
  expect(unsigned.nonce).toBe('0x00000002');
  expect(unsigned.specVersion).toBe('0x00000006');
  expect(unsigned.tip).toBe('0x00000000000000000000000000000000');
  expect(unsigned.transactionVersion).toBe('0x00000006');
  expect(unsigned.version).toBe(4);
}

/**
 * Return all methods available in txwrapper as [pallet, methodName]. Used for
 * testing decodes on all methods.
 */
export function getAllMethods(): [string, string][] {
  return Object.keys(methods)
    .reduce((acc, pallet) => {
      return acc.concat(
        Object.keys(methods[pallet as keyof typeof methods]).map((name) => [
          pallet,
          name,
        ])
      );
    }, [] as [string, string][])
    .filter(
      ([pallet, name]) =>
        !(
          // Skipping until Vote has correct JSON serialization in polkadot-api.
          (
            (pallet === 'democracy' && name === 'proxyVote') ||
            (pallet === 'democracy' && name === 'vote')
          )
        )
    )
    .filter(([_, name]) => name === 'transfer');
}

/**
 * Dummy arguments for all methods we're testing.
 */
export const TEST_METHOD_ARGS = {
  balances: {
    transfer: {
      dest: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s',
      value: 12,
    },
    transferKeepAlive: {
      dest: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s',
      value: 12,
    },
  },
  democracy: {
    activateProxy: {
      proxy: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
    },
    closeProxy: {},
    deactivateProxy: {
      proxy: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
    },
    openProxy: {
      target: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
    },
    proxyVote: {
      refIndex: 0,
      vote: {
        Standard: {
          balance: 1234,
          vote: { aye: true, conviction: 'Locked1x' },
        },
      },
    },
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
    announce: {
      real: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
      callHash:
        '0x474235772ae94433aee7d1befac0bfcc35fd0b5dfcf0cfc14bba7d5bbe35b778',
    },
    proxy: {
      real: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
      forceProxyType: 'Any',
      call:
        '0x0500306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc200f00a0be1c448399',
    },
    proxyAnnounced: {
      delegate: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
      real: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
      forceProxyType: 'Any',
      call:
        '0x0500306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc200f00a0be1c448399',
    },
    removeProxies: {},
    rejectAnnouncement: {
      delegate: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
      callHash:
        '0x474235772ae94433aee7d1befac0bfcc35fd0b5dfcf0cfc14bba7d5bbe35b778',
    },
  },
  poll: {
    vote: {
      approvals: [true, false, true, false],
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
      controller: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
      value: 100,
      payee: 'Staked',
    },
    bondExtra: {
      maxAdditional: 100,
    },
    chill: {},
    nominate: {
      targets: [
        'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
        'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P', // seed "//Charlie"
      ],
    },
    payoutNominator: {
      era: 100,
      validators: [['FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', 2]] as [
        string,
        number
      ][],
    },
    payoutValidator: {
      era: 100,
    },
    payoutStakers: {
      validatorStash: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
      era: 100,
    },
    rebond: {
      value: 100,
    },
    setController: {
      controller: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', // seed "//Bob"
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
};

/**
 * Sign a payload with seed `//Alice`.
 */
export async function signWithAlice(signingPayload: string): Promise<string> {
  // We're creating an Alice account that will sign the payload
  // Wait for the promise to resolve async WASM
  await cryptoWaitReady();

  const registry = getRegistry('Kusama', 'kusama', 9999);
  // Use ed25519 because it has deterministic signatures
  const keyring = new Keyring({ type: 'ed25519' });
  const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

  const { signature } = registry
    .createType('ExtrinsicPayload', signingPayload, {
      version: EXTRINSIC_VERSION,
    })
    .sign(alice);

  return signature;
}
