import {
  DOT_23_TEST_OPTIONS,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { transfer } from '../balances/transfer';
import { asDerivative } from './asDerivative';

describe('utility::asDerivative', () => {
  it('should work', () => {
    const unsignedBalancesTransfer = transfer(
      TEST_METHOD_ARGS.balances.transfer,
      TEST_BASE_TX_INFO,
      DOT_23_TEST_OPTIONS
    );

    const unsigned = asDerivative(
      {
        index: 1,
        call: unsignedBalancesTransfer.method,
      },
      TEST_BASE_TX_INFO,
      DOT_23_TEST_OPTIONS
    );

    testBaseTxInfo(unsigned);

    expect(unsigned.method).toBe(
      '0x1a010100050096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
    );
  });
});
