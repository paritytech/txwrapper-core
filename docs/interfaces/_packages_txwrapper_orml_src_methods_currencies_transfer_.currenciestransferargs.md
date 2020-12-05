**[@substrate/txwrapper-core](../README.md)**

> [Globals](../globals.md) / ["packages/txwrapper-orml/src/methods/currencies/transfer"](../modules/_packages_txwrapper_orml_src_methods_currencies_transfer_.md) / CurrenciesTransferArgs

# Interface: CurrenciesTransferArgs

## Hierarchy

* [CurrenciesTransferNativeCurrencyArgs](_packages_txwrapper_orml_src_methods_currencies_transfernativecurrency_.currenciestransfernativecurrencyargs.md)

  ↳ **CurrenciesTransferArgs**

## Index

### Properties

* [amount](_packages_txwrapper_orml_src_methods_currencies_transfer_.currenciestransferargs.md#amount)
* [currencyId](_packages_txwrapper_orml_src_methods_currencies_transfer_.currenciestransferargs.md#currencyid)
* [dest](_packages_txwrapper_orml_src_methods_currencies_transfer_.currenciestransferargs.md#dest)

## Properties

### amount

•  **amount**: number \| string

*Inherited from [CurrenciesTransferNativeCurrencyArgs](_packages_txwrapper_orml_src_methods_currencies_transfernativecurrency_.currenciestransfernativecurrencyargs.md).[amount](_packages_txwrapper_orml_src_methods_currencies_transfernativecurrency_.currenciestransfernativecurrencyargs.md#amount)*

*Defined in [packages/txwrapper-orml/src/methods/currencies/transferNativeCurrency.ts:17](https://github.com/paritytech/txwrapper-core/blob/a0a9a76/packages/txwrapper-orml/src/methods/currencies/transferNativeCurrency.ts#L17)*

The amount to send.

___

### currencyId

•  **currencyId**: string \| { Token: string  } \| { DEXShare: string  }

*Defined in [packages/txwrapper-orml/src/methods/currencies/transfer.ts:15](https://github.com/paritytech/txwrapper-core/blob/a0a9a76/packages/txwrapper-orml/src/methods/currencies/transfer.ts#L15)*

The `CurrencyId` of the token to send.

___

### dest

•  **dest**: string

*Inherited from [CurrenciesTransferNativeCurrencyArgs](_packages_txwrapper_orml_src_methods_currencies_transfernativecurrency_.currenciestransfernativecurrencyargs.md).[dest](_packages_txwrapper_orml_src_methods_currencies_transfernativecurrency_.currenciestransfernativecurrencyargs.md#dest)*

*Defined in [packages/txwrapper-orml/src/methods/currencies/transferNativeCurrency.ts:13](https://github.com/paritytech/txwrapper-core/blob/a0a9a76/packages/txwrapper-orml/src/methods/currencies/transferNativeCurrency.ts#L13)*

The recipient address, SS-58 encoded.
