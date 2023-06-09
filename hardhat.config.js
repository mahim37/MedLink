require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

// const fs = require("fs");
// // const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });
// /** @type import('/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    gethnode: {
      url: "http://34.131.237.20/",
      chainId: 1337,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`,
      accounts: [`${process.env.REACT_APP_SEPOLIA_PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
