import { Metadata } from '@polkadot/types';
import { MetadataVersioned } from '@polkadot/types/metadata/MetadataVersioned';
import {
	KUSAMA_SPEC_VERSION,
	kusamaMetadataHex,
	memoizedKusamaGetRegistry,
} from '@substrate/txwrapper-dev';

import { createMetadata, createMetadataUnmemoized } from './createMetadata';

describe('createMetadata', () => {
	const registry = memoizedKusamaGetRegistry(
		KUSAMA_SPEC_VERSION,
		kusamaMetadataHex
	);
	const unmemoizedMetadata: Metadata = createMetadataUnmemoized(
		registry,
		kusamaMetadataHex
	);
	const unmemoizedMetadataAsCalls: MetadataVersioned = createMetadataUnmemoized(
		registry,
		kusamaMetadataHex,
		true
	);
	const memoizedMetadata: Metadata = createMetadata(
		registry,
		kusamaMetadataHex
	);
	const memoizedMetadataAsCalls: MetadataVersioned = createMetadata(
		registry,
		kusamaMetadataHex,
		true
	);
	const memoizedMetadataAsSpecifiedCalls: MetadataVersioned = createMetadata(
		registry,
		kusamaMetadataHex,
		false,
		['balances', 'system']
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

	it('Metadata should decrease in byte size when `asSpecifiedCallsOnlyV14` is used', () => {
		const metadataAsSpecifiedCallsBuffer = Buffer.from(
			memoizedMetadataAsSpecifiedCalls.toHex(),
			'utf-8'
		);
		const metadataAsCallsBuffer = Buffer.from(
			memoizedMetadataAsCalls.toHex(),
			'utf-8'
		);

		expect(metadataAsCallsBuffer.byteLength).toBeGreaterThan(0);
		expect(metadataAsSpecifiedCallsBuffer.byteLength).toBeLessThan(
			metadataAsCallsBuffer.byteLength
		);
	});
});
