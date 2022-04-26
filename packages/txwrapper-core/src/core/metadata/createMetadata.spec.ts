import { Metadata } from '@polkadot/types';
import { MetadataVersioned } from '@polkadot/types/metadata/MetadataVersioned';
import { polkadotV9122MetadataHex, polkadotRegistryV9122 } from '@substrate/txwrapper-dev';

import { createMetadata, createMetadataUnmemoized } from './createMetadata';

describe('createMetadata', () => {
	const unmemoizedMetadata: Metadata = createMetadataUnmemoized(
		polkadotRegistryV9122,
		polkadotV9122MetadataHex
	);
	const unmemoizedMetadataAsCalls: MetadataVersioned = createMetadataUnmemoized(
		polkadotRegistryV9122,
		polkadotV9122MetadataHex,
		true
	);
	const memoizedMetadata: Metadata = createMetadata(
		polkadotRegistryV9122,
		polkadotV9122MetadataHex
	);
	const memoizedMetadataAsCalls: MetadataVersioned = createMetadata(
		polkadotRegistryV9122,
		polkadotV9122MetadataHex,
		true
	);

	it('Metadata should decrease in byte size when `asCallsOnlyArg` is true with `createMetadataUnmemoized`', () => {
		const metadataBuffer = Buffer.from(unmemoizedMetadata.toHex(), 'utf-8');
		const metadataAsCallsBuffer = Buffer.from(
			unmemoizedMetadataAsCalls.toHex(),
			'utf-8'
		);

		expect(metadataAsCallsBuffer.byteLength).toBeGreaterThan(0);
		expect(metadataBuffer.byteLength).toBeGreaterThan(
			metadataAsCallsBuffer.byteLength
		);
	});

	it('Metadata should decrease in byte size when `asCallsOnlyArg` is true with `createMetadata`', () => {
		const metadataBuffer = Buffer.from(memoizedMetadata.toHex(), 'utf-8');
		const metadataAsCallsBuffer = Buffer.from(
			memoizedMetadataAsCalls.toHex(),
			'utf-8'
		);

		expect(metadataAsCallsBuffer.byteLength).toBeGreaterThan(0);
		expect(metadataBuffer.byteLength).toBeGreaterThan(
			metadataAsCallsBuffer.byteLength
		);
	});
});
