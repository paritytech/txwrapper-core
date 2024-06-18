# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [7.5.0](https://github.com/paritytech/txwrapper-core/compare/v7.4.0...v7.5.0) (2024-06-11)


### Bug Fixes

* add support for `CheckMetadataHash` `signedExtension` ([#377](https://github.com/paritytech/txwrapper-core/issues/377)) ([6632dd0](https://github.com/paritytech/txwrapper-core/commit/6632dd0034e9f55349b76bd65c2ce80152a78517))





# [7.5.0](https://github.com/paritytech/txwrapper-core/compare/v7.4.0...v7.5.0) (2024-06-11)


### Bug Fixes

* add support for `CheckMetadataHash` `signedExtension` ([#377](https://github.com/paritytech/txwrapper-core/issues/377)) ([6632dd0](https://github.com/paritytech/txwrapper-core/commit/6632dd0034e9f55349b76bd65c2ce80152a78517))





# [7.4.0](https://github.com/paritytech/txwrapper-core/compare/v7.3.0...v7.4.0) (2024-04-25)


### Features

* add support for `assetConversion` pallet ([#371](https://github.com/paritytech/txwrapper-core/issues/371)) ([e8469e8](https://github.com/paritytech/txwrapper-core/commit/e8469e8dd64bdaac954085693fad77d8d2d61088))
* add support for `poolAssets` pallet ([#370](https://github.com/paritytech/txwrapper-core/issues/370)) ([e310844](https://github.com/paritytech/txwrapper-core/commit/e310844adc04d1341232d470a1b36e07863b6ae0))





# [7.3.0](https://github.com/paritytech/txwrapper-core/compare/v7.2.1...v7.3.0) (2024-03-19)


### Features

* add support for `foreignAssets ` pallet ([#362](https://github.com/paritytech/txwrapper-core/issues/362)) ([2fa941e](https://github.com/paritytech/txwrapper-core/commit/2fa941e695e2a24d0658ff6d6147143f3a1e0755))





## [7.2.1](https://github.com/paritytech/txwrapper-core/compare/v7.2.0...v7.2.1) (2024-02-29)


### Bug Fixes

* **deps:** bumped `@substrate/dev` to `v0.7.1` ([#357](https://github.com/paritytech/txwrapper-core/issues/357)) ([47bda87](https://github.com/paritytech/txwrapper-core/commit/47bda87d427adf77bdbd7233668da1e0c931e1cf))
* **deps:** bumped `typedoc` to `v0.25.9`  ([#359](https://github.com/paritytech/txwrapper-core/issues/359)) ([a09c1f6](https://github.com/paritytech/txwrapper-core/commit/a09c1f66b8bb6dddb2695e5d4e0cbd2e0d8d5fdc))
* **deps:** updated lerna to 8.1.2 ([#356](https://github.com/paritytech/txwrapper-core/issues/356)) ([5173831](https://github.com/paritytech/txwrapper-core/commit/517383163b980bc2b85b2b4b747beaaa3a2b2ddd))





# [7.2.0](https://github.com/paritytech/txwrapper-core/compare/v7.1.1...v7.2.0) (2023-12-19)


### Features

* added support for large tip ([#343](https://github.com/paritytech/txwrapper-core/issues/343)) ([bb9e677](https://github.com/paritytech/txwrapper-core/commit/bb9e677624c168f2e735383821c44eda191e52d3))
* modified types to support new ChargeAssetTxPayment ([#340](https://github.com/paritytech/txwrapper-core/issues/340)) ([fb79142](https://github.com/paritytech/txwrapper-core/commit/fb79142b512029ef43094613af0ce1a54c242a77))





## [7.1.1](https://github.com/paritytech/txwrapper-core/compare/v7.1.0...v7.1.1) (2023-10-23)

**Note:** Version bump only for package txwrapper-core





# [7.1.0](https://github.com/paritytech/txwrapper-core/compare/v7.0.1...v7.1.0) (2023-10-16)


### Bug Fixes

* **txwrapper-dev:** Add `@polkadot/api` dependency ([#315](https://github.com/paritytech/txwrapper-core/issues/315)) ([2e19ac5](https://github.com/paritytech/txwrapper-core/commit/2e19ac5da03a03b59230f6d8cb1b6085325a0df4))
* **txwrapper-polkadot:** export xcmPallet as part of methods ([#326](https://github.com/paritytech/txwrapper-core/issues/326)) ([d68ddd2](https://github.com/paritytech/txwrapper-core/commit/d68ddd29a20882af9c1df9b985e70968b3f68703))


### Features

* **txwrapper-polkadot:** Add limited xcm calls for reserve and teleport ([#327](https://github.com/paritytech/txwrapper-core/issues/327)) ([44594f5](https://github.com/paritytech/txwrapper-core/commit/44594f590163780166bf81f9b3c973b7d3640bf3))
* **txwrapper-substrate:** Add nominationPools calls ([#330](https://github.com/paritytech/txwrapper-core/issues/330)) ([856262a](https://github.com/paritytech/txwrapper-core/commit/856262af8204c3671bb56d44577f89ad531375a8))





## [7.0.1](https://github.com/paritytech/txwrapper-core/compare/v7.0.0...v7.0.1) (2023-07-04)


### Bug Fixes

* export balances.transferAllowDeath ([#312](https://github.com/paritytech/txwrapper-core/issues/312)) ([6a72939](https://github.com/paritytech/txwrapper-core/commit/6a7293904683582c58c90970b001f337a49ec561))
* rename state{mint, mine} to asset-hub-* ([#307](https://github.com/paritytech/txwrapper-core/issues/307)) ([3a1822a](https://github.com/paritytech/txwrapper-core/commit/3a1822a4fca281f4ad4dffc9ee97bdcd10504094))
* **txwrapper-dev:** fix `tokenDecimals` and `ss58Format` value of westend registry ([#311](https://github.com/paritytech/txwrapper-core/issues/311)) ([5ced6d3](https://github.com/paritytech/txwrapper-core/commit/5ced6d396d52494a3810213dc6d8eaa33cdac815))





# [7.0.0](https://github.com/paritytech/txwrapper-core/compare/v6.0.1...v7.0.0) (2023-07-03)


### Features

* add `balances::transferAllowDeath` ([#299](https://github.com/paritytech/txwrapper-core/issues/299)) ([d96fe8c](https://github.com/paritytech/txwrapper-core/commit/d96fe8cd317c741b017fd89b4788c934f9bf4a10))





## [6.0.1](https://github.com/paritytech/txwrapper-core/compare/v6.0.0...v6.0.1) (2023-05-25)


### Bug Fixes

* safer process.env access ([#301](https://github.com/paritytech/txwrapper-core/issues/301)) ([0035d23](https://github.com/paritytech/txwrapper-core/commit/0035d236db34b33ced4a419c710890b566628980))





# [6.0.0](https://github.com/paritytech/txwrapper-core/compare/v5.0.1...v6.0.0) (2023-05-08)


### Bug Fixes

* add detectOpenHandles flag in tests (jest) ([#285](https://github.com/paritytech/txwrapper-core/issues/285)) ([90a231e](https://github.com/paritytech/txwrapper-core/commit/90a231e07e69de96602f92d37897493ac2e7b7f7))
* adjust memoization and cache ([#298](https://github.com/paritytech/txwrapper-core/issues/298)) ([a0ae8c7](https://github.com/paritytech/txwrapper-core/commit/a0ae8c72570910598ef6787228a559c11196d001))
* rework `deriveAddress` to have all schemes support ([#293](https://github.com/paritytech/txwrapper-core/issues/293)) ([5b99d23](https://github.com/paritytech/txwrapper-core/commit/5b99d2396a078186145377e11beb2faf1c4e7815))


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





## [5.0.1](https://github.com/paritytech/txwrapper-core/compare/v5.0.0...v5.0.1) (2023-02-28)

**Note:** Version bump only for package txwrapper-core





# [5.0.0](https://github.com/paritytech/txwrapper-core/compare/v4.1.0...v5.0.0) (2023-01-13)


### Bug Fixes

* add example for sufficient asset transfer ([#275](https://github.com/paritytech/txwrapper-core/issues/275)) ([5899b36](https://github.com/paritytech/txwrapper-core/commit/5899b3611467ac1e1db31465cfd89eb8562eae12))
* remove `store_call` from `asMulti` ([#280](https://github.com/paritytech/txwrapper-core/issues/280)) ([c4ce505](https://github.com/paritytech/txwrapper-core/commit/c4ce505fa96917ac20da5aa5621196fbff83fd38))





# [4.1.0](https://github.com/paritytech/txwrapper-core/compare/v4.0.3...v4.1.0) (2022-12-29)


### Features

* Add create pure and kill pure transaction for version > 0.9.30 ([#276](https://github.com/paritytech/txwrapper-core/issues/276)) ([8af876e](https://github.com/paritytech/txwrapper-core/commit/8af876ee76e2c572f16c06ca838eecd020eaa3b9))





## [4.0.3](https://github.com/paritytech/txwrapper-core/compare/v4.0.2...v4.0.3) (2022-12-07)


### Bug Fixes

* **bug:** give WeightsV2 support for multisig  ([#269](https://github.com/paritytech/txwrapper-core/issues/269)) ([82150bb](https://github.com/paritytech/txwrapper-core/commit/82150bb06ccad6ef691affab98922266efe0e48b))
* **types:** Update polkadot-js deps to get the latest types ([#272](https://github.com/paritytech/txwrapper-core/issues/272)) ([b78b085](https://github.com/paritytech/txwrapper-core/commit/b78b0850343c8fe269c96b2ec9d1dbbe6a466a34))





## [4.0.2](https://github.com/paritytech/txwrapper-core/compare/v4.0.1...v4.0.2) (2022-11-28)

**Note:** Version bump only for package txwrapper-core





## [4.0.1](https://github.com/paritytech/txwrapper-core/compare/v4.0.0...v4.0.1) (2022-10-03)


### Bug Fixes

* remove asSpecifiedCallsOnlyV14 from getRegistryBase ([#249](https://github.com/paritytech/txwrapper-core/issues/249)) ([8d94be4](https://github.com/paritytech/txwrapper-core/commit/8d94be4958cf171cb34121bc71dc95d7b111c698))





# [4.0.0](https://github.com/paritytech/txwrapper-core/compare/v3.2.2...v4.0.0) (2022-09-21)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#258](https://github.com/paritytech/txwrapper-core/issues/258)) ([141dfbe](https://github.com/paritytech/txwrapper-core/commit/141dfbe35a7a032ac1e6a96cf7a5d0962b0bee53))





## [3.2.2](https://github.com/paritytech/txwrapper-core/compare/v3.2.1...v3.2.2) (2022-09-06)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#252](https://github.com/paritytech/txwrapper-core/issues/252)) ([82a1177](https://github.com/paritytech/txwrapper-core/commit/82a117736699d165e8f43529fac2b3034744f587))
* decodeSigningPayload for immortal era ([#248](https://github.com/paritytech/txwrapper-core/issues/248)) ([58627f1](https://github.com/paritytech/txwrapper-core/commit/58627f1a2e6dd48c3289e4faf2b0b187e21c3a26))





## [3.2.1](https://github.com/paritytech/txwrapper-core/compare/v3.2.0...v3.2.1) (2022-08-30)


### Bug Fixes

* **deps:** correctly fix asSpecifiedCallsOnlyV14 with the polkadot-js update ([#246](https://github.com/paritytech/txwrapper-core/issues/246)) ([12431c1](https://github.com/paritytech/txwrapper-core/commit/12431c19017c266866de4d9c68692487733e3a3c))
* **types:** Update polkadot-js deps to get the latest types ([#250](https://github.com/paritytech/txwrapper-core/issues/250)) ([76be717](https://github.com/paritytech/txwrapper-core/commit/76be7176306caee35b34c323585e77fdda6c6890))





# [3.2.0](https://github.com/paritytech/txwrapper-core/compare/v3.1.7...v3.2.0) (2022-08-16)


### Features

* xcm pallet transactions ([#234](https://github.com/paritytech/txwrapper-core/issues/234)) ([4aedceb](https://github.com/paritytech/txwrapper-core/commit/4aedceb1cb59ef4f3825c143c22d2d71ef48d963))
* **txwrapper-orml:** add tokens methods ([#241](https://github.com/paritytech/txwrapper-core/issues/241)) ([9250a90](https://github.com/paritytech/txwrapper-core/commit/9250a90bd0431e09d91871fecc6ac041031603e6))





# [3.2.0](https://github.com/paritytech/txwrapper-core/compare/v3.1.7...v3.2.0) (2022-08-02)


### Features

* **txwrapper-orml:** add tokens methods ([#241](https://github.com/paritytech/txwrapper-core/issues/241)) ([9250a90](https://github.com/paritytech/txwrapper-core/commit/9250a90bd0431e09d91871fecc6ac041031603e6))





## [3.1.7](https://github.com/paritytech/txwrapper-core/compare/v3.1.6...v3.1.7) (2022-07-26)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#240](https://github.com/paritytech/txwrapper-core/issues/240)) ([813dfcb](https://github.com/paritytech/txwrapper-core/commit/813dfcb9a8f9947fc1aaa5b0fd168c47fada91d1))





## [3.1.6](https://github.com/paritytech/txwrapper-core/compare/v3.1.5...v3.1.6) (2022-07-12)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#238](https://github.com/paritytech/txwrapper-core/issues/238)) ([41a559b](https://github.com/paritytech/txwrapper-core/commit/41a559ba223506cab051eb2e78b619e5ea29e37e))





## [3.1.5](https://github.com/paritytech/txwrapper-core/compare/v3.1.4...v3.1.5) (2022-07-05)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#237](https://github.com/paritytech/txwrapper-core/issues/237)) ([60dcd70](https://github.com/paritytech/txwrapper-core/commit/60dcd70ca930e79fbe0a3c2f518685f76756dd61))





## [3.1.4](https://github.com/paritytech/txwrapper-core/compare/v3.1.3...v3.1.4) (2022-06-27)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#236](https://github.com/paritytech/txwrapper-core/issues/236)) ([71fb6ea](https://github.com/paritytech/txwrapper-core/commit/71fb6ea6205c29aa3d9fe1f55d62ddb39ed595f9))





## [3.1.3](https://github.com/paritytech/txwrapper-core/compare/v3.1.2...v3.1.3) (2022-06-20)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#233](https://github.com/paritytech/txwrapper-core/issues/233)) ([5c55722](https://github.com/paritytech/txwrapper-core/commit/5c5572215c0f811f450b10c25e0ab9ccdf1a60de))





## [3.1.2](https://github.com/paritytech/txwrapper-core/compare/v3.1.1...v3.1.2) (2022-06-15)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#230](https://github.com/paritytech/txwrapper-core/issues/230)) ([bd057e2](https://github.com/paritytech/txwrapper-core/commit/bd057e2c5b6469353957a5f26487af1b85864ad0))





## [3.1.1](https://github.com/paritytech/txwrapper-core/compare/v3.1.0...v3.1.1) (2022-06-07)


### Bug Fixes

* **example:** `polkadotbatchAll` example & corrections in the README files of the examples ([#228](https://github.com/paritytech/txwrapper-core/issues/228)) ([58c800d](https://github.com/paritytech/txwrapper-core/commit/58c800d483bc908c5b12eba98544eed84e19f9d4))
* **types:** Update polkadot-js deps to get latest types ([#229](https://github.com/paritytech/txwrapper-core/issues/229)) ([0f4cfc0](https://github.com/paritytech/txwrapper-core/commit/0f4cfc056fe0cba8f9e568ff22ccb3488816fb4e))





# [3.1.0](https://github.com/paritytech/txwrapper-core/compare/v3.0.4...v3.1.0) (2022-05-31)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#227](https://github.com/paritytech/txwrapper-core/issues/227)) ([e23f48a](https://github.com/paritytech/txwrapper-core/commit/e23f48ac2cccb5b07973d7e850c9e0b3c01cbff0))


### Features

* `asSpecifiedCallsOnlyV14` option ([#224](https://github.com/paritytech/txwrapper-core/issues/224)) ([8b30028](https://github.com/paritytech/txwrapper-core/commit/8b3002843a0831652a6fb74f66d352bc9cb9bb17))





## [3.0.4](https://github.com/paritytech/txwrapper-core/compare/v3.0.3...v3.0.4) (2022-05-24)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#226](https://github.com/paritytech/txwrapper-core/issues/226)) ([5b90006](https://github.com/paritytech/txwrapper-core/commit/5b90006f072792c1989a8dde13239ba141c1255f))





## [3.0.3](https://github.com/paritytech/txwrapper-core/compare/v3.0.2...v3.0.3) (2022-05-17)


### Bug Fixes

* **types:** Update p-js deps to get the latest types ([#225](https://github.com/paritytech/txwrapper-core/issues/225)) ([3e94ce8](https://github.com/paritytech/txwrapper-core/commit/3e94ce8f124838cac4f6916586ba4187955c6b08))





## [3.0.2](https://github.com/paritytech/txwrapper-core/compare/v3.0.1...v3.0.2) (2022-05-09)


### Bug Fixes

* **types:** Update pjs deps to get ([#217](https://github.com/paritytech/txwrapper-core/issues/217)) ([247ce58](https://github.com/paritytech/txwrapper-core/commit/247ce5869081f24ded7ae7f35703df6907a05273))





## [3.0.1](https://github.com/paritytech/txwrapper-core/compare/v3.0.0...v3.0.1) (2022-05-04)


### Bug Fixes

* **bug:** test-helpers removed ([#216](https://github.com/paritytech/txwrapper-core/issues/216)) ([f858c4a](https://github.com/paritytech/txwrapper-core/commit/f858c4af23bb8e0d239602f65ad333565020a431))





# [3.0.0](https://github.com/paritytech/txwrapper-core/compare/v2.0.3...v3.0.0) (2022-05-04)


### Bug Fixes

* **deps:** update pjs api ([#212](https://github.com/paritytech/txwrapper-core/issues/212)) ([e876a42](https://github.com/paritytech/txwrapper-core/commit/e876a42af8041b006fb43c30f6ecd03e9aac164a))
* **deps:** update pjs deps ([#214](https://github.com/paritytech/txwrapper-core/issues/214)) ([43753e6](https://github.com/paritytech/txwrapper-core/commit/43753e699e3d98d5f20bbb68e32e6d98181aa5a5))
* **example:** add a multisig example ([#196](https://github.com/paritytech/txwrapper-core/issues/196)) ([17f766f](https://github.com/paritytech/txwrapper-core/commit/17f766f4419eb3801ce9ece6c6b9784b169be89c))
* update substrate-js-dev, add update-pjs-script ([#211](https://github.com/paritytech/txwrapper-core/issues/211)) ([0fe1ed4](https://github.com/paritytech/txwrapper-core/commit/0fe1ed463f641762372cea0a8b02a16f7feea348))





## [2.0.3](https://github.com/paritytech/txwrapper-core/compare/v2.0.2...v2.0.3) (2022-04-21)


### Bug Fixes

* **deps:** update pjs api ([#210](https://github.com/paritytech/txwrapper-core/issues/210)) ([3e4c3ee](https://github.com/paritytech/txwrapper-core/commit/3e4c3eef4a0e385efed98c1c8774f50175f3d9f4))





## [2.0.2](https://github.com/paritytech/txwrapper-core/compare/v2.0.1...v2.0.2) (2022-04-13)


### Bug Fixes

* **deps:** update pjs common, api, expand resolutions, adjust polkadot js example value ([#209](https://github.com/paritytech/txwrapper-core/issues/209)) ([9f57e18](https://github.com/paritytech/txwrapper-core/commit/9f57e1855ac5205b31da2a9fe67f24f0560d03a0))





## [2.0.1](https://github.com/paritytech/txwrapper-core/compare/v2.0.0...v2.0.1) (2022-04-07)


### Bug Fixes

* export for transferAll ([#207](https://github.com/paritytech/txwrapper-core/issues/207)) ([fb8ccf1](https://github.com/paritytech/txwrapper-core/commit/fb8ccf1680924234d627e078ee9cd0768df8f20e))
* **readme-changelog:** update correct 2.0.0 release notes, and instructions in the readme ([#206](https://github.com/paritytech/txwrapper-core/issues/206)) ([d3d0df0](https://github.com/paritytech/txwrapper-core/commit/d3d0df0dfa270d7fdf9feed9c9c11ec4022184f8))





# [2.0.0](https://github.com/paritytech/txwrapper-core/compare/v1.7.0...v2.0.0) (2022-04-06)


### BREAKING CHANGES

* feat!: add isImmortalEra option for decoding and encoding era periods ([#201](https://github.com/paritytech/txwrapper-core/pull/201)) ([ab5873f](https://github.com/paritytech/txwrapper-core/commit/ab5873f54ca93f847f1ead95939b018376e4c904))
    - When creating unsigned transactions, execution will fail when the `eraPeriod` passed in is less than 4 or greater than 65536. If you dont pass anything in it will default to 64. For those who would like to create immortal transactions, use the option in `OptionsWithMeta` called `isImmortalTx`.

### Bug Fixes

* **changelog:** deprecate 1.7.0, and remove 1.6.0 ([#205](https://github.com/paritytech/txwrapper-core/issues/205)) ([cec26b1](https://github.com/paritytech/txwrapper-core/commit/cec26b12e56a07d37c0e7213d07c4a411264c269))
* **deps:** update polkadot-js api, apps-config, networks ([#203](https://github.com/paritytech/txwrapper-core/issues/203)) ([088c6ca](https://github.com/paritytech/txwrapper-core/commit/088c6caaf31aee7261c0cc71f5afb639d2b80286))
    "@polkadot/api": "7.15.1",
    "@polkadot/keyring": "8.7.1",
    "@polkadot/networks": "8.7.1",
    "@polkadot/types": "7.15.1",
    "@polkadot/types-known": "7.15.1",
    "@polkadot/util": "8.7.1",
    "@polkadot/util-crypto": "8.7.1",
    "@polkadot/wasm-crypto": "5.1.1",
    "@polkadot/apps-config": "0.111.1"

### Features

* add balances::transferAll ([#200](https://github.com/paritytech/txwrapper-core/issues/200)) ([f50cd9c](https://github.com/paritytech/txwrapper-core/commit/f50cd9cacd1598b26d7aa9c404babf97cfe81ff7))





# [1.7.0](https://github.com/paritytech/txwrapper-core/compare/v1.5.9...v1.7.0) (2022-04-06)

## !Warning Deprecated: Please refer to v2.0.0 for this release

### Bug Fixes

* **deps:** update polkadot-js api, apps-config, networks ([#203](https://github.com/paritytech/txwrapper-core/issues/203)) ([088c6ca](https://github.com/paritytech/txwrapper-core/commit/088c6caaf31aee7261c0cc71f5afb639d2b80286))


### Features

* add balances::transferAll ([#200](https://github.com/paritytech/txwrapper-core/issues/200)) ([f50cd9c](https://github.com/paritytech/txwrapper-core/commit/f50cd9cacd1598b26d7aa9c404babf97cfe81ff7))





## [1.5.9](https://github.com/paritytech/txwrapper-core/compare/v1.5.8...v1.5.9) (2022-03-30)


### Bug Fixes

* **deps:** update polkadot-js deps ([#199](https://github.com/paritytech/txwrapper-core/issues/199)) ([14c4cc8](https://github.com/paritytech/txwrapper-core/commit/14c4cc87673ecb0735e17f3e7fd21fe90bae321b))





## [1.5.8](https://github.com/paritytech/txwrapper-core/compare/v1.5.7...v1.5.8) (2022-03-24)


### Bug Fixes

* **bug:** fix handling eraPeriod when it is equal to zero ([#195](https://github.com/paritytech/txwrapper-core/issues/195)) ([3cc7bf3](https://github.com/paritytech/txwrapper-core/commit/3cc7bf3e63f1e88d231454a98307afe4ab798b27))
* bump yarn to 3.2.0 ([#190](https://github.com/paritytech/txwrapper-core/issues/190)) ([ac27dd3](https://github.com/paritytech/txwrapper-core/commit/ac27dd3c53f9536d6ecaf018ed46b8d5a391d801))





## [1.5.7](https://github.com/paritytech/txwrapper-core/compare/v1.5.6...v1.5.7) (2022-03-15)

**Note:** Version bump only for package txwrapper-core





## [1.5.6](https://github.com/paritytech/txwrapper-core/compare/v1.5.5...v1.5.6) (2022-03-09)

**Note:** Version bump only for package txwrapper-core





## [1.5.5](https://github.com/paritytech/txwrapper-core/compare/v1.5.4...v1.5.5) (2022-03-08)

**Note:** Version bump only for package txwrapper-core





## [1.5.4](https://github.com/paritytech/txwrapper-core/compare/v1.5.3...v1.5.4) (2022-02-25)


### Bug Fixes

* **deps:** Update polkadot deps ([#184](https://github.com/paritytech/txwrapper-core/issues/184)) ([e1d219e](https://github.com/paritytech/txwrapper-core/commit/e1d219ea1d373014201cf923aa4c40639901243a))





## [1.5.3](https://github.com/paritytech/txwrapper-core/compare/v1.5.2...v1.5.3) (2022-02-22)


### Bug Fixes

* **bug:** toTxMethod sanitizing ([#183](https://github.com/paritytech/txwrapper-core/issues/183)) ([c7f8e12](https://github.com/paritytech/txwrapper-core/commit/c7f8e12862686ae451a9a7e29e9e82385a2531b1))
* **deps:** Update polkadotjs ([#181](https://github.com/paritytech/txwrapper-core/issues/181)) ([9adcea3](https://github.com/paritytech/txwrapper-core/commit/9adcea3c88f7cde6bd2a6e4c3bf97dca22d551ca))





## [1.5.2](https://github.com/paritytech/txwrapper-core/compare/v1.5.1...v1.5.2) (2022-02-10)


### Bug Fixes

* update polkadot-js deps ([#178](https://github.com/paritytech/txwrapper-core/issues/178)) ([0d970ba](https://github.com/paritytech/txwrapper-core/commit/0d970bafc92e126e835887b25eaf2e1a7a68be32))
* **examples:** replaced localhost with 0.0.0.0 ([#179](https://github.com/paritytech/txwrapper-core/issues/179)) ([b3d7fc1](https://github.com/paritytech/txwrapper-core/commit/b3d7fc1ea49244cbda18d08f14a5d2cdd0b2e78c))





## [1.5.1](https://github.com/paritytech/txwrapper-core/compare/v1.5.0...v1.5.1) (2022-01-18)


### Bug Fixes

* patch for 1.5.1 ([#177](https://github.com/paritytech/txwrapper-core/issues/177)) ([6c35c5a](https://github.com/paritytech/txwrapper-core/commit/6c35c5a33c0025f8847eb5d5a39c1c830dfce01d))
* **bug:** remove enum from test-helpers, and into util ([#175](https://github.com/paritytech/txwrapper-core/issues/175)) ([1a649fb](https://github.com/paritytech/txwrapper-core/commit/1a649fbc6926c4b38389833c8dbbfb939eacf8af))





# [1.5.0](https://github.com/paritytech/txwrapper-core/compare/v1.4.0...v1.5.0) (2022-01-18)


### Bug Fixes

* update shelljs according to security advisory ([#173](https://github.com/paritytech/txwrapper-core/issues/173)) ([275faaf](https://github.com/paritytech/txwrapper-core/commit/275faaf4742c9787ab6985eb8aa358223d3e2e13))
* **tests:**  warning generated by orml package tests ([#171](https://github.com/paritytech/txwrapper-core/issues/171)) ([da67ce2](https://github.com/paritytech/txwrapper-core/commit/da67ce2896eb900fda2c5663c2ea5672d0a0836d))
* decrease npm build, bundle size ([#169](https://github.com/paritytech/txwrapper-core/issues/169)) ([1a16cfa](https://github.com/paritytech/txwrapper-core/commit/1a16cfa9292a06dffa88f8e3fdcea709428a5558))


### Features

* add createSigningPayloadToU8a ([#166](https://github.com/paritytech/txwrapper-core/issues/166)) ([a17241a](https://github.com/paritytech/txwrapper-core/commit/a17241a1b646c47a1dcb4f7a8bfc77bde2148375))
* add decodeUnsignedHexTx ([#167](https://github.com/paritytech/txwrapper-core/issues/167)) ([8aff8a4](https://github.com/paritytech/txwrapper-core/commit/8aff8a43909652049b1b13d8f2b948296d01712a))
* support for signedExtentions, and userExtensions ([#170](https://github.com/paritytech/txwrapper-core/issues/170)) ([121909b](https://github.com/paritytech/txwrapper-core/commit/121909bbcfe689808146dd00fa66ed70087d6892))





# [1.4.0](https://github.com/paritytech/txwrapper-core/compare/v1.3.2...v1.4.0) (2022-01-06)


### Bug Fixes

* **types:** bump polkadot-js deps ([#160](https://github.com/paritytech/txwrapper-core/issues/160)) ([a0283d9](https://github.com/paritytech/txwrapper-core/commit/a0283d9523a225be35dfa3e26d2ccc5378563b64))
* **types:** Update polkadot-js deps to get the latest types ([#165](https://github.com/paritytech/txwrapper-core/issues/165)) ([1654307](https://github.com/paritytech/txwrapper-core/commit/16543074d6920ec68bf3d34a47430b9cdfbe682b))
* bump polkadot-js deps ([#159](https://github.com/paritytech/txwrapper-core/issues/159)) ([2ed66e4](https://github.com/paritytech/txwrapper-core/commit/2ed66e4b4f5b8377c1cf216d591da23dc6edd271))


### Features

* add proxy::killAnonymous method ([#164](https://github.com/paritytech/txwrapper-core/issues/164)) ([a6ea878](https://github.com/paritytech/txwrapper-core/commit/a6ea8783ca51f8bbd55b1697162c7ba6d14165e2))





## [1.3.2](https://github.com/paritytech/txwrapper-core/compare/v1.3.1...v1.3.2) (2021-12-08)


### Bug Fixes

* unsigned transaction metadata ([#158](https://github.com/paritytech/txwrapper-core/issues/158)) ([acd176b](https://github.com/paritytech/txwrapper-core/commit/acd176bd470c453602bdb31f61f624ff18080308))





## [1.3.1](https://github.com/paritytech/txwrapper-core/compare/v1.3.0...v1.3.1) (2021-12-07)

**Note:** Version bump only for package txwrapper-core





# [1.3.0](https://github.com/paritytech/txwrapper-core/compare/v1.2.21...v1.3.0) (2021-12-02)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#156](https://github.com/paritytech/txwrapper-core/issues/156)) ([3720c28](https://github.com/paritytech/txwrapper-core/commit/3720c286e565a21eadacfedecfbeec5b81f8ccfb))
* add lifecycle script to fix CI error on release ([#154](https://github.com/paritytech/txwrapper-core/issues/154)) ([c454a86](https://github.com/paritytech/txwrapper-core/commit/c454a86cc34e5f3de7ad03c60e70a58e67aca37f))
* bump yarn 3.1.0 ([#151](https://github.com/paritytech/txwrapper-core/issues/151)) ([58f5e9e](https://github.com/paritytech/txwrapper-core/commit/58f5e9e653a21a7e6e0f0709b463e4764adb1e8c))
* **types:** bump polkadot deps ([#150](https://github.com/paritytech/txwrapper-core/issues/150)) ([dbcee2a](https://github.com/paritytech/txwrapper-core/commit/dbcee2a97eda59472a25dfa523ae1e3e6fa0dbe6))


### Features

* add asCallsOnlyArg to reduce size of metadata ([#149](https://github.com/paritytech/txwrapper-core/issues/149)) ([d590b09](https://github.com/paritytech/txwrapper-core/commit/d590b0912ee0bf9f357233024c064138cff36cd2))





## [1.2.21](https://github.com/paritytech/txwrapper-core/compare/v1.2.20...v1.2.21) (2021-11-16)


### Bug Fixes

* bump polkadot-js deps ([#148](https://github.com/paritytech/txwrapper-core/issues/148)) ([5fd475c](https://github.com/paritytech/txwrapper-core/commit/5fd475c3a11be5b3599e7b2bc54d17c47aa1f20b))





## [1.2.20](https://github.com/paritytech/txwrapper-core/compare/v1.2.19...v1.2.20) (2021-11-09)


### Bug Fixes

* bump deps ([#146](https://github.com/paritytech/txwrapper-core/issues/146)) ([ff645d8](https://github.com/paritytech/txwrapper-core/commit/ff645d8c4461b35433286fe4da3cff23d144de06))





## [1.2.19](https://github.com/paritytech/txwrapper-core/compare/v1.2.18...v1.2.19) (2021-10-28)


### Bug Fixes

* **types:** bump deps ([#144](https://github.com/paritytech/txwrapper-core/issues/144)) ([c0f2db4](https://github.com/paritytech/txwrapper-core/commit/c0f2db48d68f1232edf5b070f76e45ca9e0e6290))





## [1.2.18](https://github.com/paritytech/txwrapper-core/compare/v1.2.17...v1.2.18) (2021-10-20)


### Bug Fixes

* **deps:** bump polkadot-js, cleanup resolutions ([#140](https://github.com/paritytech/txwrapper-core/issues/140)) ([0eac6cb](https://github.com/paritytech/txwrapper-core/commit/0eac6cb2cb9ee92b69271108708dea7bef2acd6d))
* **deps:** update lock ([#139](https://github.com/paritytech/txwrapper-core/issues/139)) ([32f1de7](https://github.com/paritytech/txwrapper-core/commit/32f1de74f0c279f67a5332dc87c2e1cc62b2dfe3))





## [1.2.17](https://github.com/paritytech/txwrapper-core/compare/v1.2.16...v1.2.17) (2021-09-30)


### Bug Fixes

* **deps:** bump deps, import(apps-config) ([#137](https://github.com/paritytech/txwrapper-core/issues/137)) ([ad72aa6](https://github.com/paritytech/txwrapper-core/commit/ad72aa6a3b1a96849c91e9d219e401be6fd17307))





## [1.2.16](https://github.com/paritytech/txwrapper-core/compare/v1.2.15...v1.2.16) (2021-09-22)


### Bug Fixes

* update readme ([#133](https://github.com/paritytech/txwrapper-core/issues/133)) ([781a3d9](https://github.com/paritytech/txwrapper-core/commit/781a3d94a29a6f94603d0cdadbc4c7e37f045c81))
* **types:** Update polkadot-js to get the latest types ([#134](https://github.com/paritytech/txwrapper-core/issues/134)) ([8dd550d](https://github.com/paritytech/txwrapper-core/commit/8dd550d9ecd76ca9537c0e3493b508dd8ca88676))


### Reverts

* Revert "chore(release): publish (#135)" (#136) ([3e76f88](https://github.com/paritytech/txwrapper-core/commit/3e76f88ac995d5522793d5583fe4f26e05e2e102)), closes [#135](https://github.com/paritytech/txwrapper-core/issues/135) [#136](https://github.com/paritytech/txwrapper-core/issues/136)





## [1.2.15](https://github.com/paritytech/txwrapper-core/compare/v1.2.14...v1.2.15) (2021-09-14)


### Bug Fixes

* apps-config version for lodash downstream ([#132](https://github.com/paritytech/txwrapper-core/issues/132)) ([fa400b0](https://github.com/paritytech/txwrapper-core/commit/fa400b092d728bb7ea7f7dae21484b71b71e7a52))





## [1.2.14](https://github.com/paritytech/txwrapper-core/compare/v1.2.13...v1.2.14) (2021-09-13)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#131](https://github.com/paritytech/txwrapper-core/issues/131)) ([f77876a](https://github.com/paritytech/txwrapper-core/commit/f77876ae98dcaea0e2ae2118c0c239690f5e91cd))





## [1.2.13](https://github.com/paritytech/txwrapper-core/compare/v1.2.12...v1.2.13) (2021-08-31)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#129](https://github.com/paritytech/txwrapper-core/issues/129)) ([fb5c51f](https://github.com/paritytech/txwrapper-core/commit/fb5c51f08f3829bcfe2e9f274cfc1fe35692a777))
* bump yarn ([#128](https://github.com/paritytech/txwrapper-core/issues/128)) ([7c92737](https://github.com/paritytech/txwrapper-core/commit/7c92737c294ef5f83c624604bc24d0bb072d6321))





## [1.2.12](https://github.com/paritytech/txwrapper-core/compare/v1.2.11...v1.2.12) (2021-08-23)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#127](https://github.com/paritytech/txwrapper-core/issues/127)) ([0b703cf](https://github.com/paritytech/txwrapper-core/commit/0b703cffde9688ecf387fc37c8435858751cd11e))





## [1.2.11](https://github.com/paritytech/txwrapper-core/compare/v1.2.10...v1.2.11) (2021-08-17)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#124](https://github.com/paritytech/txwrapper-core/issues/124)) ([060ae47](https://github.com/paritytech/txwrapper-core/commit/060ae4752695e0f8c0998be14d08ed570516e0ab))





## [1.2.10](https://github.com/paritytech/txwrapper-core/compare/v1.2.9...v1.2.10) (2021-08-02)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#121](https://github.com/paritytech/txwrapper-core/issues/121)) ([30bed94](https://github.com/paritytech/txwrapper-core/commit/30bed9475727cd538b2aa2fcb767603f8baf81c7))





## [1.2.9](https://github.com/paritytech/txwrapper-core/compare/v1.2.8...v1.2.9) (2021-07-27)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#120](https://github.com/paritytech/txwrapper-core/issues/120)) ([5a81ab2](https://github.com/paritytech/txwrapper-core/commit/5a81ab25e3c1822bd547ee8ae845428697ae76d1))





## [1.2.8](https://github.com/paritytech/txwrapper-core/compare/v1.2.7...v1.2.8) (2021-07-19)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#118](https://github.com/paritytech/txwrapper-core/issues/118)) ([70854a3](https://github.com/paritytech/txwrapper-core/commit/70854a3307644403d63ced68775a72066ebd4db1))





## [1.2.7](https://github.com/paritytech/txwrapper-core/compare/v1.2.6...v1.2.7) (2021-07-13)


### Bug Fixes

* update deps, fix dep bugs ([#115](https://github.com/paritytech/txwrapper-core/issues/115)) ([2bb432e](https://github.com/paritytech/txwrapper-core/commit/2bb432ecc29903aa7150de45f3d6e88a64b066b3))





## [1.2.6](https://github.com/paritytech/txwrapper-core/compare/v1.2.5...v1.2.6) (2021-07-07)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#112](https://github.com/paritytech/txwrapper-core/issues/112)) ([6a9d724](https://github.com/paritytech/txwrapper-core/commit/6a9d72473c8d34c9e069624442c52e8fd7e9e295))





## [1.2.5](https://github.com/paritytech/txwrapper-core/compare/v1.2.4...v1.2.5) (2021-06-29)

**Note:** Version bump only for package txwrapper-core





## [1.2.4](https://github.com/paritytech/txwrapper-core/compare/v1.2.3...v1.2.4) (2021-06-28)


### Bug Fixes

* **txwrapper-acala:** Mandala example ([#103](https://github.com/paritytech/txwrapper-core/issues/103)) ([e484877](https://github.com/paritytech/txwrapper-core/commit/e4848773ef70d38e341e5314e831da2b51ef11f6))
* **types:** Update polkadot-js deps to get the latest types ([#107](https://github.com/paritytech/txwrapper-core/issues/107)) ([6cc53e1](https://github.com/paritytech/txwrapper-core/commit/6cc53e1048b3664f2a6949d4f42de25e35f66148))





## [1.2.3](https://github.com/paritytech/txwrapper-core/compare/v1.2.2...v1.2.3) (2021-06-21)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types, update substrate/dev ([#104](https://github.com/paritytech/txwrapper-core/issues/104)) ([4671ca3](https://github.com/paritytech/txwrapper-core/commit/4671ca3710723141dbb8eca6e919b177d8d8fd17))





## [1.2.2](https://github.com/paritytech/txwrapper-core/compare/v1.2.1...v1.2.2) (2021-06-14)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#102](https://github.com/paritytech/txwrapper-core/issues/102)) ([541822b](https://github.com/paritytech/txwrapper-core/commit/541822b2f0bf32ab4e04fbbcbc64757f5360ef2b))





## [1.2.1](https://github.com/paritytech/txwrapper-core/compare/v1.2.0...v1.2.1) (2021-06-07)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#100](https://github.com/paritytech/txwrapper-core/issues/100)) ([137c35b](https://github.com/paritytech/txwrapper-core/commit/137c35baa0887cf3914c6679007cfe2f78f42a76))





# [1.2.0](https://github.com/paritytech/txwrapper-core/compare/v1.1.3...v1.2.0) (2021-06-02)


### Features

* **txwrapper-polkadot:** Add `crowdloan.addMemo` ([#99](https://github.com/paritytech/txwrapper-core/issues/99)) ([0b305ec](https://github.com/paritytech/txwrapper-core/commit/0b305eca51ed6ebb751e5b813257c9e6244b43af))





## [1.1.3](https://github.com/paritytech/txwrapper-core/compare/v1.1.2...v1.1.3) (2021-05-31)


### Bug Fixes

* **types:** Update polkadot-js deps to get the latest types ([#96](https://github.com/paritytech/txwrapper-core/issues/96)) ([07a1ecd](https://github.com/paritytech/txwrapper-core/commit/07a1ecd9108c444e31e0b190e380c3c0f1f7f961))





## [1.1.2](https://github.com/paritytech/txwrapper-core/compare/v1.1.0...v1.1.2) (2021-05-26)


### Bug Fixes

* **types:** Bump polkadot-js deps to get latest types ([#91](https://github.com/paritytech/txwrapper-core/issues/91)) ([a99b024](https://github.com/paritytech/txwrapper-core/commit/a99b024ba33af53178fb38aa6ca81c607bf25740))
* **types:** Update polkadot-js deps to get latest types ([#93](https://github.com/paritytech/txwrapper-core/issues/93)) ([bc5d7ea](https://github.com/paritytech/txwrapper-core/commit/bc5d7ea62e03c679cc8e332f5a287a2ca1a38eda))





## [1.1.1](https://github.com/paritytech/txwrapper-core/compare/v1.1.0...v1.1.1) (2021-05-18)


### Bug Fixes

* **types:** Bump polkadot-js deps to get latest types ([#91](https://github.com/paritytech/txwrapper-core/issues/91)) ([a99b024](https://github.com/paritytech/txwrapper-core/commit/a99b024ba33af53178fb38aa6ca81c607bf25740))





# [1.1.0](https://github.com/paritytech/txwrapper-core/compare/v1.0.0...v1.1.0) (2021-05-11)


### Bug Fixes

* Bump polkadot-js/api; Remove deprecated createType log option ([#89](https://github.com/paritytech/txwrapper-core/issues/89)) ([989cd7d](https://github.com/paritytech/txwrapper-core/commit/989cd7d6a2e25a7cbc7982da211e4c5239bbed22))
* Update polkadot scoped deps to latest types ([#90](https://github.com/paritytech/txwrapper-core/issues/90)) ([60b9e23](https://github.com/paritytech/txwrapper-core/commit/60b9e23beb776f153515897c96efa64b7ccad29a))


### Features

* **txwrapper-polkadot:** Add support for Statemint & Statemine ([#75](https://github.com/paritytech/txwrapper-core/issues/75)) ([8958d30](https://github.com/paritytech/txwrapper-core/commit/8958d30891f8bbc340f72faa50dd28790a49997d))





# [1.0.0](https://github.com/paritytech/txwrapper-core/compare/v0.5.1...v1.0.0) (2021-05-03)


### Bug Fixes

* update deps for latest types ([#82](https://github.com/paritytech/txwrapper-core/issues/82)) ([fa89090](https://github.com/paritytech/txwrapper-core/commit/fa8909020664c786d319e36bf1a39a000a99f02a))
* update polkadot-js deps; update `decorateConstants` usage ([#88](https://github.com/paritytech/txwrapper-core/issues/88)) ([d6176b8](https://github.com/paritytech/txwrapper-core/commit/d6176b8165261ec5c448d4f2ca8d68a66161d76f))
* workspace script sharing ([#86](https://github.com/paritytech/txwrapper-core/issues/86)) ([207d0bb](https://github.com/paritytech/txwrapper-core/commit/207d0bbd50e7bf2be4217072eae8c2b7eead0810))


### Features

* **txwrapper-substrate:** Add proxy.anonymous ([#83](https://github.com/paritytech/txwrapper-core/issues/83)) ([9c081a0](https://github.com/paritytech/txwrapper-core/commit/9c081a044a489fb4c448062882480385bb79c461))





## [0.5.1](https://github.com/paritytech/txwrapper-core/compare/v0.5.0...v0.5.1) (2021-04-19)

**Note:** Version bump only for package txwrapper-core





# [0.5.0](https://github.com/paritytech/txwrapper-core/compare/v0.4.1...v0.5.0) (2021-04-05)


### Bug Fixes

* **types:** Bump deps to get latest types ([#76](https://github.com/paritytech/txwrapper-core/issues/76)) ([e02b47e](https://github.com/paritytech/txwrapper-core/commit/e02b47ec2e86d9a2a72125971bc468f6f4781e6e))


### Features

* **assets:** add assets to txwrapper-substrate package ([#71](https://github.com/paritytech/txwrapper-core/issues/71)) ([e72b012](https://github.com/paritytech/txwrapper-core/commit/e72b01248088c7582180d1a98f783d8fdfbd991f))





## [0.4.1](https://github.com/paritytech/txwrapper-core/compare/v0.4.0...v0.4.1) (2021-03-29)


### Bug Fixes

* **types:** Update deps to get latest polkadot-js types ([#70](https://github.com/paritytech/txwrapper-core/issues/70)) ([ead28d7](https://github.com/paritytech/txwrapper-core/commit/ead28d797ec241d98e318861fc1f302e3022b0be))





# [0.4.0](https://github.com/paritytech/txwrapper-core/compare/v0.3.0...v0.4.0) (2021-03-22)


### Bug Fixes

* **deps:** Update [@polkadot](https://github.com/polkadot) deps to get latest types ([#66](https://github.com/paritytech/txwrapper-core/issues/66)) ([be8ca96](https://github.com/paritytech/txwrapper-core/commit/be8ca96910c98717edc9e2b0abd3d1816faa9eca))


### Features

* **polkadot:** Add pallet methods `crowdloan.{contribute, withdraw}` ([#64](https://github.com/paritytech/txwrapper-core/issues/64)) ([09542bd](https://github.com/paritytech/txwrapper-core/commit/09542bd63eed83d05d22bf003219b4be6d1b7975)), closes [#63](https://github.com/paritytech/txwrapper-core/issues/63)
* **substrate:** Add pallet method `utility.batchAll` + example ([#65](https://github.com/paritytech/txwrapper-core/issues/65)) ([a89bd5a](https://github.com/paritytech/txwrapper-core/commit/a89bd5a7395701a4b19426108edc3871960ad0b6))





# [0.3.0](https://github.com/paritytech/txwrapper-core/compare/v0.2.1...v0.3.0) (2021-03-15)

**Note:** Version bump only for package txwrapper-core





## [0.2.1](https://github.com/paritytech/txwrapper-core/compare/v0.2.0-beta.0...v0.2.1) (2021-03-02)


### Bug Fixes

* **types:** Bump deps to get latest type definitions ([#59](https://github.com/paritytech/txwrapper-core/issues/59)) ([76b5e55](https://github.com/paritytech/txwrapper-core/commit/76b5e551ae0fcdcc6f932473129879f7fe87a939))





# [0.2.0-beta.0](https://github.com/paritytech/txwrapper-core/compare/v0.1.1-beta.0...v0.2.0-beta.0) (2021-02-23)


### Bug Fixes

* Update `RewardDestination` argument type for `staking.setPayee` ([#57](https://github.com/paritytech/txwrapper-core/issues/57)) ([23e4218](https://github.com/paritytech/txwrapper-core/commit/23e42181b1543211750750c2ca2295e90b810eaf))


### Features

* migrate system, and session txwrapper methods ([#51](https://github.com/paritytech/txwrapper-core/issues/51)) ([3f0ed07](https://github.com/paritytech/txwrapper-core/commit/3f0ed07a79aa2d6851a3374a151940b7ae985c5b))





#  (2021-02-15)


### Bug Fixes

* Adjust for polkadot-js/api update ([#39](https://github.com/paritytech/txwrapper-core/issues/39)) ([e6b0aed](https://github.com/paritytech/txwrapper-core/commit/e6b0aed449a6006fc75c453aa7170a7d20918c9e))
* Align ChainProperties with polkadot-js def ([#54](https://github.com/paritytech/txwrapper-core/issues/54)) ([5ee2d7d](https://github.com/paritytech/txwrapper-core/commit/5ee2d7d6ae838c2482f8e78cbba5012c78230c83))
* Silence misleading warning when decoding a signed tx ([#22](https://github.com/paritytech/txwrapper-core/issues/22)) ([c2459c6](https://github.com/paritytech/txwrapper-core/commit/c2459c66c2c24ab9307ce8a1101cbc5bdaffce39))


### Features

* add democracy methods to txwrapper-substrate ([#49](https://github.com/paritytech/txwrapper-core/issues/49)) ([8fe141c](https://github.com/paritytech/txwrapper-core/commit/8fe141c0333ed6c3c1a665146febdd5f6a77b73c))
* Add methods multisig.{asMulti, approveAsMulti, cancelAsMulti} ([#52](https://github.com/paritytech/txwrapper-core/issues/52)) ([6476a74](https://github.com/paritytech/txwrapper-core/commit/6476a7457484b7107835ceed2b002294c04fef8c))
* Add proxy methods to txwrapper-{substrate, polkadot} ([#21](https://github.com/paritytech/txwrapper-core/issues/21)) ([1c09a0e](https://github.com/paritytech/txwrapper-core/commit/1c09a0e475443d08b58363ea6f00a2d4596dc0b4))
* add staking module for txwrapper-substrate (tests included) ([#42](https://github.com/paritytech/txwrapper-core/issues/42)) ([dd547ce](https://github.com/paritytech/txwrapper-core/commit/dd547ce50f72afe762bbbdec877cb730b22fde73))
* add vesting methods to txwrapper-substrate ([#50](https://github.com/paritytech/txwrapper-core/issues/50)) ([1664620](https://github.com/paritytech/txwrapper-core/commit/1664620d2ed7065f0ede7b3967e5453831f66a37))
* Always decode AbstractInt to integer as a string ([#12](https://github.com/paritytech/txwrapper-core/issues/12)) ([19b6ddf](https://github.com/paritytech/txwrapper-core/commit/19b6ddf892b54a6b3d6e9ae1fd8c7756f89adfd6))
* create initial substrate, polkadot, and example packages ([#10](https://github.com/paritytech/txwrapper-core/issues/10)) ([0f0824e](https://github.com/paritytech/txwrapper-core/commit/0f0824e363df8ef0f2d06ca0b1365e70d00d6fb4))
* ORML methods; Acala pkg; More dynamic `getRegistry` and `knownChainProperties`; Lerna ([#26](https://github.com/paritytech/txwrapper-core/issues/26)) ([731a943](https://github.com/paritytech/txwrapper-core/commit/731a9439a93cd035a312f17737ae1a29aaea669d))
* txwrapper-template & CHAIN_BUILDER guide ([#35](https://github.com/paritytech/txwrapper-core/issues/35)) ([427ea8c](https://github.com/paritytech/txwrapper-core/commit/427ea8cd645c139617bf0c647adc90ac293f35fe))
* Use local `getRegistry` functions ([#48](https://github.com/paritytech/txwrapper-core/issues/48)) ([4c430ba](https://github.com/paritytech/txwrapper-core/commit/4c430bab23c0fe6f9033f0a9d5b04a4f6ad449e8)), closes [#47](https://github.com/paritytech/txwrapper-core/issues/47) [#46](https://github.com/paritytech/txwrapper-core/issues/46) [#45](https://github.com/paritytech/txwrapper-core/issues/45)
