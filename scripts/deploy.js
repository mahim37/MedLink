const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();
  const balance = await deployer.getBalance();
  const HealthNFT = await hre.ethers.getContractFactory("HealthNFT");
  const healthnft = await HealthNFT.deploy();

  await healthnft.deployed();

  const data = {
    address: healthnft.address,
    abi: JSON.parse(healthnft.interface.format("json")),
  };

  fs.writeFileSync("./src/HealthNFT.json", JSON.stringify(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
