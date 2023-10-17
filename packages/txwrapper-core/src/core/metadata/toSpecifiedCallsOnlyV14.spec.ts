import {
	memoizedPolkadotGetRegistry,
	mockCreateMetadata,
	POLKADOT_SPEC_VERSION,
	polkadotMetadataHex,
} from '@substrate/txwrapper-dev';

import mockToSpecifiedCallsV14 from '../../test-helpers/mock/toSpecifiedCallsOnlyV14.json';
import { toSpecifiedCallsOnlyV14 } from './';

describe('toSpecifiedCallsOnly', () => {
	const registry = memoizedPolkadotGetRegistry(
		POLKADOT_SPEC_VERSION,
		polkadotMetadataHex
	);
	it('Should correctly parse the metadata', () => {
		const metadata = mockCreateMetadata(registry, polkadotMetadataHex);
		const callsOnly = toSpecifiedCallsOnlyV14(registry, metadata.asV14, [
			'balances',
			'system',
		]);

		expect(callsOnly).toStrictEqual(mockToSpecifiedCallsV14);
	});
});
