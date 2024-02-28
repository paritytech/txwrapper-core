import { Metadata } from '@polkadot/types';
import { MetadataVersioned } from '@polkadot/types/metadata/MetadataVersioned';
import {
	memoizedPolkadotGetRegistry,
	POLKADOT_SPEC_VERSION,
	polkadotMetadataHex,
} from '@substrate/txwrapper-dev';

import { createMetadata, createMetadataUnmemoized } from './createMetadata';

describe('createMetadata', () => {
	const registry = memoizedPolkadotGetRegistry(
		POLKADOT_SPEC_VERSION,
		polkadotMetadataHex,
	);
	const unmemoizedMetadata: Metadata = createMetadataUnmemoized(
		registry,
		polkadotMetadataHex,
	);
	const unmemoizedMetadataAsCalls: MetadataVersioned = createMetadataUnmemoized(
		registry,
		polkadotMetadataHex,
		true,
	);
	const memoizedMetadata: Metadata = createMetadata(
		registry,
		polkadotMetadataHex,
	);
	const memoizedMetadataAsCalls: MetadataVersioned = createMetadata(
		registry,
		polkadotMetadataHex,
		true,
	);
	const memoizedMetadataAsSpecifiedCalls: MetadataVersioned = createMetadata(
		registry,
		polkadotMetadataHex,
		false,
		['balances', 'system'],
	);

	it('Metadata should decrease in byte size when `asCallsOnlyArg` is true with `createMetadataUnmemoized`', () => {
		const metadataBuffer = Buffer.from(unmemoizedMetadata.toHex(), 'utf-8');
		const metadataAsCallsBuffer = Buffer.from(
			unmemoizedMetadataAsCalls.toHex(),
			'utf-8',
		);

		expect(metadataAsCallsBuffer.byteLength).toBeGreaterThan(0);
		expect(metadataBuffer.byteLength).toBeGreaterThan(
			metadataAsCallsBuffer.byteLength,
		);
	});

	it('Metadata should decrease in byte size when `asCallsOnlyArg` is true with `createMetadata`', () => {
		const metadataBuffer = Buffer.from(memoizedMetadata.toHex(), 'utf-8');
		const metadataAsCallsBuffer = Buffer.from(
			memoizedMetadataAsCalls.toHex(),
			'utf-8',
		);

		expect(metadataAsCallsBuffer.byteLength).toBeGreaterThan(0);
		expect(metadataBuffer.byteLength).toBeGreaterThan(
			metadataAsCallsBuffer.byteLength,
		);
	});

	it('Metadata should decrease in byte size when `asSpecifiedCallsOnlyV14` is used', () => {
		const metadataAsSpecifiedCallsBuffer = Buffer.from(
			memoizedMetadataAsSpecifiedCalls.toHex(),
			'utf-8',
		);
		const metadataAsCallsBuffer = Buffer.from(
			memoizedMetadataAsCalls.toHex(),
			'utf-8',
		);

		expect(metadataAsCallsBuffer.byteLength).toBeGreaterThan(0);
		expect(metadataAsSpecifiedCallsBuffer.byteLength).toBeLessThan(
			metadataAsCallsBuffer.byteLength,
		);
	});
});
