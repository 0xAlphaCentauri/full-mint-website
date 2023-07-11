
//const { ethers } = require('ethers');

const hre = require("hardhat");


async function main() {
  console.log("entered main function");
  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
  /*const roboPunksNFT = await RoboPunksNFT.deploy();

  await roboPunksNFT.deployed();*/

  const roboPunksNFT = await hre.ethers.deployContract("RoboPunksNFT");
  await roboPunksNFT.waitForDeployment();

  console.log("NFT deployed to:", await roboPunksNFT.getAddress());
 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
