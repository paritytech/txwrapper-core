**@substrate/txwrapper**

> README / [Globals](globals.md)

<br /><br />

<h1 align="center">@substrate/txwrapper</h1>
<h4 align="center">Helper funtions for offline transaction generation.</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@substrate/txwrapper">
    <img alt="npm" src="https://img.shields.io/npm/v/@substrate/txwrapper.svg" />
  </a>
  <a href="https://github.com/paritytech/txwrapper/actions">
    <img alt="Github Actions" src="https://github.com/paritytech/txwrapper/workflows/pr/badge.svg" />
  </a>
  <a href="https://opensource.org/licenses/Apache-2.0">
    <img alt="apache-2.0" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" />
  </a>
  <a href="https://david-dm.org/paritytech/txwrapper">
    <img alt="david-dm" src="https://img.shields.io/david/paritytech/txwrapper.svg" />
  </a>
</p>

<br /><br />

## Get Started

```bash
yarn add @substrate/txwrapper
```

In a JS/TS file:

```typescript
import {
  createSignedTx,
  createSigningPayload,
  methods,
} from '@substrate/txwrapper';

const unsigned = methods.balance.transfer(
  {
    dest: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP',
    value: 100,
  },
  {
    // Additional information needed to construct the transaction offline.
  }
);

const signingPayload = createSigningPayload(unsigned, { registry });
// On your offline device, sign the payload.
const signature = myOfflineSigning(signingPayload);

// `tx` is ready to be broadcasted.
const tx = createSignedTx(unsigned, signature, { metadataRpc, registry });
```

Have a look at the [examples](https://github.com/paritytech/txwrapper/tree/master/examples) to see how you can perform the whole lifecycle of a transaction, from generation to signing to broadcast.

Go to [documentation](https://github.com/paritytech/txwrapper/tree/master/docs/globals.md) to see all available functions.

## Contribute

We welcome contributions. Before submitting your PR, make sure to run the following commands:

- `yarn docs`: Will generate docs based on code comments.
- `yarn test`: Make sure all tests pass.
- `yarn lint`: Make sure your code follows our linting rules. You can also run `yarn lint --fix` to automatically fix some of those errors.

### Note for Maintainers

All the commits in this repo follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) spec. When merging a PR, make sure 1/ to use squash merge and 2/ that the title of the PR follows the Conventional Commits spec. This will make squash the PR into one conventional commit.

The history of commits will be used to generate the [CHANGELOG](./CHANGELOG). To do so, run `yarn deploy` **on the master branch**. This command will look at all the commits since the latest tag, bump the package version according to semver rules, and generate a new CHANGELOG.

There might be special cases where you don't want to follow semver. In this case, run `yarn deploy -r {major,minor,patch}`.

The above command, which only does local operations and doesn't push anything, will output more or less the following lines:

```bash
$ yarn deploy
yarn run v1.21.1
$ yarn build && standard-version -r minor
$ rimraf lib/ && tsc
✔ bumping version in package.json from 0.3.2 to 0.4.0
✔ outputting changes to CHANGELOG.md
✔ committing package.json and CHANGELOG.md
✔ tagging release v0.4.0
ℹ Run `git push --follow-tags origin master && npm publish` to publish
```

To publish the new package, just follow the instructions: `git push --follow-tags origin master && npm publish`. You must have access to the `@substrate` organization on npm to be able to publish.
