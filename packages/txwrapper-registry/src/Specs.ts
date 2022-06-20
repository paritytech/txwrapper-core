import { ConfigSpecs, SpecsFactory } from 'confmgr';

const APPEND_SPEC_ERROR = 'Must create SpecFactory first.';

export enum MODULES {
	SUBSTRATE = 'SUBSTRATE',
}

export enum CONFIG {
	TYPES_BUNDLE = 'TYPES_BUNDLE',
	TYPES_CHAIN = 'TYPES_CHAIN',
}

export class Specs {
	private static _specs: SpecsFactory | undefined;

	private static create(): SpecsFactory {
		this._specs = new SpecsFactory({ prefix: 'STX' });
		this.appendSubstrateSpecs();

		return this._specs;
	}

	/**
	 * Configurable enviroment variable specifications.
	 */
	static get specs(): ConfigSpecs {
		return this._specs?.getSpecs() || this.create().getSpecs();
	}

	private static appendSubstrateSpecs() {
		if (!this._specs) {
			throw APPEND_SPEC_ERROR;
		}

		// TYPES_BUNDLE
		this._specs.appendSpec(
			MODULES.SUBSTRATE,
			this._specs.getSpec(
				CONFIG.TYPES_BUNDLE,
				'absolute path to file with `typesBundle` type definitions for createRegistry',
				{
					default: '',
					mandatory: false,
				}
			)
		);

		// TYPES_CHAIN
		this._specs.appendSpec(
			MODULES.SUBSTRATE,
			this._specs.getSpec(
				CONFIG.TYPES_CHAIN,
				'absolute path to file with `typesChain` type definitions for createRegistry',
				{
					default: '',
					mandatory: false,
				}
			)
		);
	}
}
