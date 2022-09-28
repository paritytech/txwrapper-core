/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createMetadata, getRegistry } from '@substrate/txwrapper-polkadot';

import { rpcToLocalNode } from '../../common/util';

async function main(): Promise<void> {
	const metadataRpc: `0x${string}` = await rpcToLocalNode('state_getMetadata');
	const { specVersion, specName } = await rpcToLocalNode(
		'state_getRuntimeVersion'
	);

	const asSpecifiedCallsOnlyV14 = ['balances', 'system'];

	/**
	 * Create the type registry.
	 */
	const registry = getRegistry({
		chainName: 'Polkadot',
		specName,
		specVersion,
		metadataRpc,
	});

	/**
	 * Use `createMetadata` to create a new `MetadataVersioned` type that can be transformed to
	 * a hex value using `.toHex()`. You may then use this metadata to decode and encode all transactions.
	 */
	const metadata = createMetadata(
		registry,
		metadataRpc,
		false,
		asSpecifiedCallsOnlyV14
	);

	const oldMetadataByteSize = Buffer.from(metadataRpc, 'utf-8').byteLength;
	const newMetadataByteSize = Buffer.from(metadata.toHex(), 'utf-8').byteLength;

	console.log(`Original metadata byte size: ${oldMetadataByteSize}`);
	console.log(
		`Specified Calls Only V14 metadata byte size: ${newMetadataByteSize}`
	);

	const percentageDecrease =
		((oldMetadataByteSize - newMetadataByteSize) / oldMetadataByteSize) * 100;
	console.log(`Metadata size decreased by ${percentageDecrease.toFixed(2)}%`);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
