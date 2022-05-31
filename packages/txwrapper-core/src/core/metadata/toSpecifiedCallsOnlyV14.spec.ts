import {
	kusamaRegistryV9160,
	kusamaV9160MetadataHex,
	mockCreateMetadata,
} from '@substrate/txwrapper-dev';

import mockToSpecifiedCallsV14 from '../../test-helpers/mock/toSpecifiedCallsOnlyV14.json';
import { toSpecifiedCallsOnlyV14 } from './toSpecifiedCallsOnlyV14';

describe('toSpecifiedCallsOnly', () => {
	it('Should correctly parse the metadata', () => {
		const metadata = mockCreateMetadata(
			kusamaRegistryV9160,
			kusamaV9160MetadataHex
		);
		const callsOnly = toSpecifiedCallsOnlyV14(
			kusamaRegistryV9160,
			metadata.asLatest,
			['balances', 'system']
		);

		expect(callsOnly).toStrictEqual(mockToSpecifiedCallsV14);
	});
});
