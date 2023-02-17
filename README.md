This is the DApp for Verseshoe.

## Getting Started

Download [Node.JS](https://nodejs.org/en/download/), install all dependencies (you have to open a cmd in the root directory of the project) with

```bash
npm install
```

and then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you want to change the contract address or network you have to edit the values `CONTRACT_ADDRESS` and `NETWORK` in the [next.config.js](/next.config.js).
The `NETWORK` of the mainnet is for example `0x1` and for goerli it's `0x5`.

If you want to change the whitelisted wallets you have to edit the file [whitelist.json](/data/wallets/whitelist.json) in the folder `/data/wallets/whitelist.json`.
The wallets must be in the following format:

```json
[
  "0xaA00000000000000000000000000000000000001",
  "0xbB00000000000000000000000000000000000002",
  "0xcC00000000000000000000000000000000000003"
]
```

Every wallets has to be seperated by a comma.
Then you should run the command

```bash
yarn merkletree
```

to get the root hash for your whitelists that you have to put in the smart contract.

## Deploy on Netlify

Open a cmd in the root directory of the project (or open the project directly in VS Code) and enter

```bash
yarn build
```

After the command has finished a new folder `verseshoe-netlify` was created.
Take this folder and upload it to netlify.
