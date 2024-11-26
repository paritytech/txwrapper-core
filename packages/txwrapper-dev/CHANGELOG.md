# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [7.5.3](https://github.com/paritytech/txwrapper-core/compare/v7.5.2...v7.5.3) (2024-11-26)

**Note:** Version bump only for package @substrate/txwrapper-dev





## [7.5.2](https://github.com/paritytech/txwrapper-core/compare/v7.5.1...v7.5.2) (2024-10-15)


### Bug Fixes

* add `assets::transferAll` call ([#405](https://github.com/paritytech/txwrapper-core/issues/405)) ([0142e0a](https://github.com/paritytech/txwrapper-core/commit/0142e0afe5028f86746d73a45dd8adc37008adaf))





# [7.5.0](https://github.com/paritytech/txwrapper-core/compare/v7.4.0...v7.5.0) (2024-06-11)


### Bug Fixes

* add support for `CheckMetadataHash` `signedExtension` ([#377](https://github.com/paritytech/txwrapper-core/issues/377)) ([6632dd0](https://github.com/paritytech/txwrapper-core/commit/6632dd0034e9f55349b76bd65c2ce80152a78517))





# [7.5.0](https://github.com/paritytech/txwrapper-core/compare/v7.4.0...v7.5.0) (2024-06-11)


### Bug Fixes

* add support for `CheckMetadataHash` `signedExtension` ([#377](https://github.com/paritytech/txwrapper-core/issues/377)) ([6632dd0](https://github.com/paritytech/txwrapper-core/commit/6632dd0034e9f55349b76bd65c2ce80152a78517))





# [7.4.0](https://github.com/paritytech/txwrapper-core/compare/v7.3.0...v7.4.0) (2024-04-25)


### Features

* add support for `poolAssets` pallet ([#370](https://github.com/paritytech/txwrapper-core/issues/370)) ([e310844](https://github.com/paritytech/txwrapper-core/commit/e310844adc04d1341232d470a1b36e07863b6ae0))





# [7.3.0](https://github.com/paritytech/txwrapper-core/compare/v7.2.1...v7.3.0) (2024-03-19)


### Features

* add support for `foreignAssets ` pallet ([#362](https://github.com/paritytech/txwrapper-core/issues/362)) ([2fa941e](https://github.com/paritytech/txwrapper-core/commit/2fa941e695e2a24d0658ff6d6147143f3a1e0755))





## [7.2.1](https://github.com/paritytech/txwrapper-core/compare/v7.2.0...v7.2.1) (2024-02-29)


### Bug Fixes

* **deps:** bumped `@substrate/dev` to `v0.7.1` ([#357](https://github.com/paritytech/txwrapper-core/issues/357)) ([47bda87](https://github.com/paritytech/txwrapper-core/commit/47bda87d427adf77bdbd7233668da1e0c931e1cf))





# [7.2.0](https://github.com/paritytech/txwrapper-core/compare/v7.1.1...v7.2.0) (2023-12-19)


### Features

* added support for large tip ([#343](https://github.com/paritytech/txwrapper-core/issues/343)) ([bb9e677](https://github.com/paritytech/txwrapper-core/commit/bb9e677624c168f2e735383821c44eda191e52d3))





## [7.1.1](https://github.com/paritytech/txwrapper-core/compare/v7.1.0...v7.1.1) (2023-10-23)

**Note:** Version bump only for package @substrate/txwrapper-dev





# [7.1.0](https://github.com/paritytech/txwrapper-core/compare/v7.0.1...v7.1.0) (2023-10-16)


### Bug Fixes

* **txwrapper-dev:** Add `@polkadot/api` dependency ([#315](https://github.com/paritytech/txwrapper-core/issues/315)) ([2e19ac5](https://github.com/paritytech/txwrapper-core/commit/2e19ac5da03a03b59230f6d8cb1b6085325a0df4))





## [7.0.1](https://github.com/paritytech/txwrapper-core/compare/v7.0.0...v7.0.1) (2023-07-04)


### Bug Fixes

* rename state{mint, mine} to asset-hub-* ([#307](https://github.com/paritytech/txwrapper-core/issues/307)) ([3a1822a](https://github.com/paritytech/txwrapper-core/commit/3a1822a4fca281f4ad4dffc9ee97bdcd10504094))
* **txwrapper-dev:** fix `tokenDecimals` and `ss58Format` value of westend registry ([#311](https://github.com/paritytech/txwrapper-core/issues/311)) ([5ced6d3](https://github.com/paritytech/txwrapper-core/commit/5ced6d396d52494a3810213dc6d8eaa33cdac815))





# [7.0.0](https://github.com/paritytech/txwrapper-core/compare/v6.0.1...v7.0.0) (2023-07-03)


### Features

* add `balances::transferAllowDeath` ([#299](https://github.com/paritytech/txwrapper-core/issues/299)) ([d96fe8c](https://github.com/paritytech/txwrapper-core/commit/d96fe8cd317c741b017fd89b4788c934f9bf4a10))





# [6.0.0](https://github.com/paritytech/txwrapper-core/compare/v5.0.1...v6.0.0) (2023-05-08)


* fix!: refactor the whole testing system with metadata, remove old calls, and fix some types (#295) ([58d026a](https://github.com/paritytech/txwrapper-core/commit/58d026ad7c0d9eaa0816fddf33735d4015e22edd)), closes [#295](https://github.com/paritytech/txwrapper-core/issues/295)


### Features

* add `additionalTypes`, and `typesBundle` to `getRegistryBase` ([#294](https://github.com/paritytech/txwrapper-core/issues/294)) ([671a2d1](https://github.com/paritytech/txwrapper-core/commit/671a2d168a114866455aff2f01d0d019eeeed2d3))


### BREAKING CHANGES

* fix balances

* metadata and decode

* method

* remove constants

* remove a large amount of bloat

* ensure setKets kets type is correct





# [5.0.0](https://github.com/paritytech/txwrapper-core/compare/v4.1.0...v5.0.0) (2023-01-13)


### Bug Fixes

* remove `store_call` from `asMulti` ([#280](https://github.com/paritytech/txwrapper-core/issues/280)) ([c4ce505](https://github.com/paritytech/txwrapper-core/commit/c4ce505fa96917ac20da5aa5621196fbff83fd38))





# [4.1.0](https://github.com/paritytech/txwrapper-core/compare/v4.0.3...v4.1.0) (2022-12-29)


### Features

* Add create pure and kill pure transaction for version > 0.9.30 ([#276](https://github.com/paritytech/txwrapper-core/issues/276)) ([8af876e](https://github.com/paritytech/txwrapper-core/commit/8af876ee76e2c572f16c06ca838eecd020eaa3b9))





## [4.0.3](https://github.com/paritytech/txwrapper-core/compare/v4.0.2...v4.0.3) (2022-12-07)


### Bug Fixes

* **bug:** give WeightsV2 support for multisig  ([#269](https://github.com/paritytech/txwrapper-core/issues/269)) ([82150bb](https://github.com/paritytech/txwrapper-core/commit/82150bb06ccad6ef691affab98922266efe0e48b))





## [4.0.2](https://github.com/paritytech/txwrapper-core/compare/v4.0.1...v4.0.2) (2022-11-28)

**Note:** Version bump only for package @substrate/txwrapper-dev





## [4.0.1](https://github.com/paritytech/txwrapper-core/compare/v4.0.0...v4.0.1) (2022-10-03)

**Note:** Version bump only for package @substrate/txwrapper-dev





# [4.0.0](https://github.com/paritytech/txwrapper-core/compare/v3.2.2...v4.0.0) (2022-09-21)

**Note:** Version bump only for package @substrate/txwrapper-dev





## [3.2.2](https://github.com/paritytech/txwrapper-core/compare/v3.2.1...v3.2.2) (2022-09-06)

**Note:** Version bump only for package @substrate/txwrapper-dev





# [3.2.0](https://github.com/paritytech/txwrapper-core/compare/v3.1.7...v3.2.0) (2022-08-16)

**Note:** Version bump only for package @substrate/txwrapper-dev





## [3.0.2](https://github.com/paritytech/txwrapper-core/compare/v3.0.1...v3.0.2) (2022-05-09)


### Bug Fixes

* **types:** Update pjs deps to get ([#217](https://github.com/paritytech/txwrapper-core/issues/217)) ([247ce58](https://github.com/paritytech/txwrapper-core/commit/247ce5869081f24ded7ae7f35703df6907a05273))





# [3.0.0](https://github.com/paritytech/txwrapper-core/compare/v2.0.3...v3.0.0) (2022-05-04)

**Note:** Version bump only for package @substrate/txwrapper-dev
