**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / "packages/txwrapper-orml/src/test-helpers/constants"

# Module: "packages/txwrapper-orml/src/test-helpers/constants"

## Index

### Object literals

* [MANDALA\_602\_TEST\_OPTIONS](_packages_txwrapper_orml_src_test_helpers_constants_.md#mandala_602_test_options)
* [TEST\_METHOD\_ARGS](_packages_txwrapper_orml_src_test_helpers_constants_.md#test_method_args)

## Object literals

### MANDALA\_602\_TEST\_OPTIONS

▪ `Const` **MANDALA\_602\_TEST\_OPTIONS**: object

*Defined in [packages/txwrapper-orml/src/test-helpers/constants.ts:7](https://github.com/paritytech/txwrapper-core/blob/a0a9a76/packages/txwrapper-orml/src/test-helpers/constants.ts#L7)*

Use this registry in tests.

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`metadataRpc` | string | string |
`registry` | TypeRegistry | getRegistryMandala(602, metadataRpc) |

___

### TEST\_METHOD\_ARGS

▪ `Const` **TEST\_METHOD\_ARGS**: object

*Defined in [packages/txwrapper-orml/src/test-helpers/constants.ts:12](https://github.com/paritytech/txwrapper-core/blob/a0a9a76/packages/txwrapper-orml/src/test-helpers/constants.ts#L12)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`currencies` | object | { transfer: { amount: number = 12; dest: string = "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty"; currencyId: { Token: string = "ACA" }  } ; transferNativeCurrency: { amount: number = 12; dest: string = "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty" }  } |
