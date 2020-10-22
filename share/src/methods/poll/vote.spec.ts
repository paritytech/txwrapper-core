import { getRegistry } from '../../util';
import {
  // cC1TestBaseTxInfo,
  TEST_METHOD_ARGS,
} from '../../util';
import metadataRpc from '../../util/metadataStatic_polkadotv0.8.14';
import { vote } from './vote';

// Not using the typical base tx info defined in `util` because we need the
// specific metadata that has `poll::vote`
const baseInfo = {
  address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // seed "//Alice"
  blockHash:
    '0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
  blockNumber: 4302222,
  eraPeriod: 2400,
  genesisHash:
    '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
  metadataRpc,
  nonce: 2,
  specVersion: 14,
  tip: 0,
  transactionVersion: 2,
};

const options = {
  metadataRpc,
  registry: getRegistry('Polkadot CC1', 'polkadot', 14, metadataRpc),
};

describe('poll::vote', () => {
  it('should work', () => {
    const unsigned = vote(TEST_METHOD_ARGS.poll.vote, baseInfo, options);

    // Below are the assertions that normally would happen in `testBaseTxInfo`
    // We do them differently here because we have different base tx info
    (['address', 'blockHash', 'genesisHash'] as const).forEach((key) =>
      expect(unsigned[key]).toBe(baseInfo[key])
    );

    expect(unsigned.blockNumber).toBe('0x0041a58e');
    expect(unsigned.era).toBe('0xeb58');
    expect(unsigned.nonce).toBe('0x00000002');
    expect(unsigned.specVersion).toBe('0x0000000e');
    expect(unsigned.tip).toBe('0x00000000000000000000000000000000');
    expect(unsigned.transactionVersion).toBe('0x00000002');
    expect(unsigned.version).toBe(4);

    expect(unsigned.method).toBe('0x1f0001000100');
  });

  it('errors with an `approvals` array of the incorrect length', () => {
    const approvalsLen3 = {
      approvals: [false, false, true],
    };
    expect(approvalsLen3.approvals.length).toBe(3);
    expect(() => vote(approvalsLen3, baseInfo, options)).toThrowError();

    const approvalsLen5 = {
      approvals: [false, false, true, false, true],
    };
    expect(approvalsLen5.approvals.length).toBe(5);
    expect(() => vote(approvalsLen5, baseInfo, options)).toThrowError();
  });
});
