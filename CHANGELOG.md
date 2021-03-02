# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
