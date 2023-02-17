// 1. Import libraries. Use `npm` package manager to install
const {MerkleTree} = require('merkletreejs');
const keccak256 = require('keccak256');
const whitelistAddresses = require('./data/wallets/whitelist.json');

// 2. Collect list of wallet addresses from competition, raffle, etc.
console.log(whitelistAddresses);

// 3. Create a new array of `leafNodes` by hashing all indexes of the `whitelistAddresses`
// using `keccak256`. Then creates a Merkle Tree object using keccak256 as the algorithm.
//
// The leaves, merkleTree, and rootHas are all PRE-DETERMINED prior to whitelist claim
const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, {
    sortPairs: true
});

// 4. Get root hash of the `merkleeTree` in hexadecimal format (0x)
const rootHash = merkleTree.getHexRoot();
console.log("Root Hash: ", rootHash);
