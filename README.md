# Proxy Contract Deployment with OpenZeppelin, Hardhat, and Alchemy

This guide will walk you through deploying a proxy contract using OpenZeppelin's upgradeable contract framework with Hardhat on the Ethereum Sepolia network. We will use Alchemy for connecting to the network.

## Prerequisites
Ensure you have the following installed:
- Node.js
- npm
- Hardhat
- An Alchemy account and API key
- An Ethereum wallet and private key (e.g., MetaMask)
- An Etherscan API key for contract verification

## Project Setup
### Initialize Your Project
```sh
mkdir my-upgradeable-contract
cd my-upgradeable-contract
npm install
```

### Create the .env File
Create a file named `.env` in the root of your project and add the following content:
```sh
ALCHEMY_API_KEY=your-alchemy-api-key
PRIVATE_KEY=your-ethereum-wallet-private-key
ETHERSCAN_API_KEY=your-etherscan-api-key
```
Replace the placeholders with your actual keys.

## Deployment Steps
### Deploy the Initial Version
Run the following command to deploy the initial version of your contract:
```sh
npx hardhat run --network sepolia ./scripts/deploy_box_v1.js
```
After running this script, note the contract addresses from the output.

### Verify the Contract on Etherscan
Verify the proxy contract on Etherscan with:
```sh
npx hardhat verify --network sepolia <YOUR_CONTRACT_ADDRESS>
```

### Upgrade to the New Version
To upgrade to the new version of your contract, run:
```sh
npx hardhat run --network sepolia ./scripts/upgrade_box_v2.js
```

