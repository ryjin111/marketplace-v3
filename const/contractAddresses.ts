/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { ScrollAlphaTestnet } from "@thirdweb-dev/chains";
export const NETWORK = ScrollAlphaTestnet;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x241F57455F328bDdC1C7824E13c7E4e4F8c188Ab";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x33f1Ef1fDb3c2858bf64729f78D233C85697B71C";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://blockscout.scroll.io";
