import {
	KUSAMA_SPEC_VERSION,
	kusamaMetadataHex,
	memoizedKusamaGetRegistry,
	mockCreateMetadata,
} from '@substrate/txwrapper-dev';

import mockToSpecifiedCallsV14 from '../../test-helpers/mock/toSpecifiedCallsOnlyV14.json';
import { toSpecifiedCallsOnlyV14 } from './';

describe('toSpecifiedCallsOnly', () => {
	const registry = memoizedKusamaGetRegistry(
		KUSAMA_SPEC_VERSION,
		kusamaMetadataHex
	);
	it('Should correctly parse the metadata', () => {
		const metadata = mockCreateMetadata(registry, kusamaMetadataHex);
		const callsOnly = toSpecifiedCallsOnlyV14(registry, metadata.asLatest, [
			'balances',
			'system',
		]);

		expect(callsOnly).toStrictEqual(mockToSpecifiedCallsV14);
	});
});
