**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / "txwrapper-orml/src/test-helpers/constants"

# Module: "txwrapper-orml/src/test-helpers/constants"

## Index

### Object literals

* [MANDALA\_602\_TEST\_OPTIONS](_txwrapper_orml_src_test_helpers_constants_.md#mandala_602_test_options)
* [TEST\_METHOD\_ARGS](_txwrapper_orml_src_test_helpers_constants_.md#test_method_args)

## Object literals

### MANDALA\_602\_TEST\_OPTIONS

▪ `Const` **MANDALA\_602\_TEST\_OPTIONS**: object

*Defined in [packages/txwrapper-orml/src/test-helpers/constants.ts:8](https://github.com/paritytech/txwrapper-core/blob/33adddf/packages/txwrapper-orml/src/test-helpers/constants.ts#L8)*

Test options for the mandala v602 runtime.

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`metadataRpc` | string | string |
`registry` | TypeRegistry | getRegistryMandala(602, metadataRpc) |

___

### TEST\_METHOD\_ARGS

▪ `Const` **TEST\_METHOD\_ARGS**: object

*Defined in [packages/txwrapper-orml/src/test-helpers/constants.ts:16](https://github.com/paritytech/txwrapper-core/blob/33adddf/packages/txwrapper-orml/src/test-helpers/constants.ts#L16)*

Centralized source for all arguments used in specs for methods.

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`currencies` | object | { transfer: { amount: number = 12; dest: string = "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty"; currencyId: { Token: string = "ACA" }  } ; transferNativeCurrency: { amount: number = 12; dest: string = "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty" }  } |
