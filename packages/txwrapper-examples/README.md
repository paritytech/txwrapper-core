# Examples for end users of txwrapper-* libraries

## Usage

- clone txwrapper-core repo
- install deps from root with `yarn install`
- build local packages in workspace with `yarn build`
- start up a polkadot --dev node (examples use default local address of node)
- cd into `packages/txwrapper-examples` (this directory)
- start up a Polkadot node in `--dev` mode (the examples assume a node is running on the default local ports)
- run `yarn polkadot` to run the example in `src/polkadot.ts`
