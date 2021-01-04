# How to use `txwrapper-[TODO]`

Here's a mini-tutorial on how `txwrapper-[TODO]` can interact with a Substrate chain. We're using a [TODO LINK TO YOUR CHAINS REPO] dev chain:

## Get Started

1. Fetch the latest [TODO YOUR CHAINS NAME] node from the above link. Follow instructions to build it, and start a dev chain.

    ```bash

    [TODO YOUR CHAINS BINARY NAME/PATH] --dev
    ```

2. Run the example script in this folder. It will interact with your local node.

    ```bash
    ./node_modules/.bin/ts-node examples/[TODO].ts
    ```

## Expected Output

Here's a sample output of the above script, using a [TODO YOUR CHAINS NAME] node. Your payload to sign and signature will of course differ from this example.

```
[TODO PUT OUTPUT FROM SCRIPT HERE]
```

## Offline vs. Online

In the examples, the `rpcToLocalNode` function is the only function that needs to be called with internet access. Everything else can be performed offline. In particular, this example shows how to perform the following operations offline:

- Generate a tx,
- Create its signing payload,
- Sign the signing payload,
- Calculate the tx hash,
- Decode at various levels of the tx lifecycle.
