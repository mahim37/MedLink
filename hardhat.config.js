require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
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
  defaultNetwork: "gethnode",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    gethnode: {
      url: "http://34.131.237.20/",
      chainId: 1337,
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
