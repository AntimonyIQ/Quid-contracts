require("@nomiclabs/hardhat-ethers");
require("@tenderly/hardhat-tenderly");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("@nomiclabs/hardhat-truffle5");

const { utils } = require("ethers");

const PRIVATE_KEY_1 = process.env.PRIVATE_KEY;
const PRIVATE_KEY_2 = process.env.PRIVATE_KEY_2;
const PRIVATE_KEY_3 = process.env.PRIVATE_KEY_3;
const PRIVATE_KEY_4 = process.env.PRIVATE_KEY_4;

const TESTNET_DEPLOYER = process.env.TESTNET_DEPLOYER;
const TESTNET_INVESTOR = process.env.TESTNET_INVESTOR;


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "localhost",
  solidity: {
    compilers: [
      {
        version: "0.7.0",
      },
    ],
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
     testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [`${TESTNET_DEPLOYER}`,`${TESTNET_INVESTOR}`],
    }, 
    localhost: {
      url: `http://localhost:8545`,
      accounts: [`${PRIVATE_KEY_1}`,`${PRIVATE_KEY_2}`, `${PRIVATE_KEY_3}`, `${PRIVATE_KEY_4}`],
      timeout: 150000,
      gasPrice: parseInt(utils.parseUnits("132", "gwei")),
      allowUnlimitedContractSize :true
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [`${PRIVATE_KEY_1}`,`${PRIVATE_KEY_2}`, `${PRIVATE_KEY_3}`, `${PRIVATE_KEY_4}`],
    },
    hardhat: {
      // forking: {
      //   url: `https://bsc-dataseed.binance.org/`,
      //   // blockNumber: 6674768,
      // },
      blockGasLimit: 12000000,
      allowUnlimitedContractSize :true
    }, 
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
  tenderly: {
    project: process.env.TENDERLY_PROJECT,
    username: process.env.TENDERLY_USERNAME,
  },
};
