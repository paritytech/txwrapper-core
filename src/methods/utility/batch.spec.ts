import {
  CC1_TEST_BASE_TX_INFO,
  CC1_TEST_OPTIONS,
  cC1TestBaseTxInfo,
  TEST_METHOD_ARGS,
} from '../../util';
import { transfer } from '../balances/transfer';
import { batch } from './batch';

describe('utility::batch', () => {
  it('should work', () => {
    const unsignedBalancesTransfer = transfer(
      TEST_METHOD_ARGS.balances.transfer,
      CC1_TEST_BASE_TX_INFO,
      CC1_TEST_OPTIONS
    );

    const unsignedBatch = batch(
      {
        calls: [unsignedBalancesTransfer.method],
      },
      CC1_TEST_BASE_TX_INFO,
      CC1_TEST_OPTIONS
    );

    cC1TestBaseTxInfo(unsignedBatch);

    expect(unsignedBatch.method).toBe(
      '0x010004060096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
    );
  });
});
