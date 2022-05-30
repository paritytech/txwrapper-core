/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createMetadata, getRegistry } from '@substrate/txwrapper-polkadot';

import { rpcToLocalNode } from '../../common/util';

async function main(): Promise<void> {
	const metadataRpc = await rpcToLocalNode('state_getMetadata');
	const { specVersion, specName } = await rpcToLocalNode(
		'state_getRuntimeVersion'
	);

	/**
	 * Create the type registry.
	 *
	 * In order to minimize the metadata, add the asSpecifiedCallsOnlyV14 option
	 * which will point to an array that will contain pallets names as strings. Each pallet
	 * specified will include the types needed for constructing transactions for those pallets only
	 * within the metadata.
	 */
	const registry = getRegistry({
		chainName: 'Polkadot',
		specName,
		specVersion,
		metadataRpc,
		asSpecifiedCallsOnlyV14: ['balances'],
	});

	/**
	 * Use `createMetadata` to create a new `MetadataVersioned` type that can be transformed to
	 * a hex value using `.toHex()`. You may then use this metadata to decode and encode all transactions.
	 */
	const metadata = createMetadata(registry, metadataRpc, false, ['balances']);

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
