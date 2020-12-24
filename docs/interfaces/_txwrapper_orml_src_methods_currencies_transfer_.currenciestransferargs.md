**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / ["txwrapper-orml/src/methods/currencies/transfer"](../modules/_txwrapper_orml_src_methods_currencies_transfer_.md) / CurrenciesTransferArgs

# Interface: CurrenciesTransferArgs

## Hierarchy

* [CurrenciesTransferNativeCurrencyArgs](_txwrapper_orml_src_methods_currencies_transfernativecurrency_.currenciestransfernativecurrencyargs.md)

  ↳ **CurrenciesTransferArgs**

## Index

### Properties

* [amount](_txwrapper_orml_src_methods_currencies_transfer_.currenciestransferargs.md#amount)
* [currencyId](_txwrapper_orml_src_methods_currencies_transfer_.currenciestransferargs.md#currencyid)
* [dest](_txwrapper_orml_src_methods_currencies_transfer_.currenciestransferargs.md#dest)

## Properties

### amount

•  **amount**: number \| string

*Inherited from [CurrenciesTransferNativeCurrencyArgs](_txwrapper_orml_src_methods_currencies_transfernativecurrency_.currenciestransfernativecurrencyargs.md).[amount](_txwrapper_orml_src_methods_currencies_transfernativecurrency_.currenciestransfernativecurrencyargs.md#amount)*

*Defined in [packages/txwrapper-orml/src/methods/currencies/transferNativeCurrency.ts:17](https://github.com/paritytech/txwrapper-core/blob/33adddf/packages/txwrapper-orml/src/methods/currencies/transferNativeCurrency.ts#L17)*

The amount to send.

___

### currencyId

•  **currencyId**: string \| { Token: string  } \| { DEXShare: string  }

*Defined in [packages/txwrapper-orml/src/methods/currencies/transfer.ts:15](https://github.com/paritytech/txwrapper-core/blob/33adddf/packages/txwrapper-orml/src/methods/currencies/transfer.ts#L15)*

The `CurrencyId` of the token to send.

___

### dest

•  **dest**: string

*Inherited from [CurrenciesTransferNativeCurrencyArgs](_txwrapper_orml_src_methods_currencies_transfernativecurrency_.currenciestransfernativecurrencyargs.md).[dest](_txwrapper_orml_src_methods_currencies_transfernativecurrency_.currenciestransfernativecurrencyargs.md#dest)*

*Defined in [packages/txwrapper-orml/src/methods/currencies/transferNativeCurrency.ts:13](https://github.com/paritytech/txwrapper-core/blob/33adddf/packages/txwrapper-orml/src/methods/currencies/transferNativeCurrency.ts#L13)*

The recipient address, SS-58 encoded.
