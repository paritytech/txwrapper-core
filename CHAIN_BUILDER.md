# [WIP] txwrapper creation guide for chain builders

This guide walks through the steps that a chain builder will need to take in order to create, publish, and maintain a chain specific txwrapper package.

## Motivation: why would I want to create a txwrapper for my chain?

Creating a txwrapper package will expand the offline signing options for users of your chain. This is important for security conscious users who need to facilitate transaction signing, construction and/or decoding with an air-gapped device(s). This includes (but is not limited to) custodians, exchanges, and cold storage users.

## Note

This guide has very specific instructions on how to structure the public API of a chain's txwrapper package. This approach is taken by txwrapper-core's maintainers so users of existing txwrappers can quickly integrate with newly created txwrappers for `FRAME`-based chains. Feel free to open up a github issue to discuss any of these aspects.

## Template project

(coming soon)

## Steps*

*These steps all need to be expanded into detailed sections and reviewed

- Create repo
- Re-export all of txwrapper-core (particularly transaction construction and decoding)
- Re-export `getRegistry` (and optionally `knownChainProperties`) from txwrapper-registry
- Re-export methods for pallets included in the chains runtime from packages like txwrapper-substrate, txwrapper-orml
- Create any methods that don't already exist in existing packages like txwrapper-substrate, txwrapper-orml. (Consider a PR to add the methods if they are relevant to substrate or ORML pallets)
- Optionally Create constants or other utilities like enums that are connivent (i.e. `TokenSymbol` in the txwrapper-acala examles)
- Create an end-to-end example for users similar to [txwrapper-examples](packages/txwrapper-examples/src/mandala.ts) (Feel free to use the existing examples as a template)
- Add tests for methods that are exported to ensure stable serialization/deserialization with your chains metadata. This can used testing utilities exposed by txwrapper-core and should use metadata static metadata from the chain. (TBD if this should be recommended in most circumstances).
- Publish package
- Keep it up to date!
