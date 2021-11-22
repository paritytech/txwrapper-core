import { Metadata } from '@polkadot/types';
import { MetadataVersioned } from '@polkadot/types/metadata/MetadataVersioned';

import { polkadotV9122MetadataHex } from '../../test-helpers/metadata/polkadotV9122MetadataHex';
import { polkadotRegistryV9122 } from '../../test-helpers/registries';
import { createMetadataUnmemoized } from './createMetadata';

describe('createMetadata', () => {
	const metadata: Metadata = createMetadataUnmemoized(
		polkadotRegistryV9122,
		polkadotV9122MetadataHex
	);
	const metadataAsCalls: MetadataVersioned = createMetadataUnmemoized(
		polkadotRegistryV9122,
		polkadotV9122MetadataHex,
		true
	);

	it('Metadata should decrease in byte size when `asCallsOnlyArg is true`', () => {
		const metadataBuffer = Buffer.from(metadata.toHex(), 'utf-8');
		const metadataAsCallsBuffer = Buffer.from(metadataAsCalls.toHex(), 'utf-8');

		expect(metadataAsCallsBuffer.byteLength).toBeGreaterThan(0);
		expect(metadataBuffer.byteLength).toBeGreaterThan(
			metadataAsCallsBuffer.byteLength
		);
	});
});
