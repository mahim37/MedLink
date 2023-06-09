const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HealthNFT", function () {
  let healthNFT;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    const HealthNFT = await ethers.getContractFactory("HealthNFT");
    [owner, addr1, addr2] = await ethers.getSigners();
    healthNFT = await HealthNFT.deploy();
  });

  it("should create a new token and list it for sale", async function () {
    const uri = "https://example.com/token/1";
    const price = ethers.utils.parseEther("1");
    // console.log(price);
    // console.log((await healthNFT.getListPrice()) === price);
    await healthNFT.createToken(uri, price);
    const listedToken = await healthNFT.getListedTokenForId(0);
    // console.log("HealthNFT addr: ", healthNFT.address);
    // console.log("Owner : ", owner.address);
    // console.log("Addr1: ", addr1.address);
    // console.log("Listed Token: ", listedToken.owner);
    expect(await healthNFT.tokenURI(0)).to.equal(uri);
    // console.log(healthNFT.address)
    expect(listedToken.owner).to.equal(healthNFT.address);
    expect(listedToken.seller).to.equal(owner.address);
    expect(listedToken.price).to.equal(price);
    expect(listedToken.currentlyListed).to.equal(true);
  });

  it("should transfer an NFT to another address", async function () {
    // Mint a new token…(4
    const uri = "https://example.com/token/1";
    const price = ethers.utils.parseEther("1");
    // console.log(price);
    // console.log((await healthNFT.getListPrice()) === price);
    await healthNFT.createToken(uri, price);
    const listedToken = await healthNFT.getListedTokenForId(0);
    // const ownerHFT = await healthNFT.ownerOf(0);
    // console.log("Owner: ", await ownerHFT.address);
    // Transfer the token to another address
    const to = addr2;
    console.log("NFT: ", healthNFT.address);
    console.log("listedToken: ", await healthNFT.ownerOf(0));
    console.log("URI: ", await healthNFT.tokenURI(0));
    // console.log("New Owner: ", .address);
    console.log("TO : ", to.address);
    await healthNFT.transferNFT(to.address, 0);

    // Get the new owner of the token
    const newOwner = await healthNFT.ownerOf(1);

    // Check that the new owner is the expected address
    expect(newOwner).to.equal(to.address);
    // Check that the previous owner is no longer the owner
    // expect(owner).to.not.equal(newOwner);
  });

  it("should allow the owner to update the list price", async function () {
    const newPrice = ethers.utils.parseEther("2");

    await healthNFT.updateListPrice(newPrice);
    expect(await healthNFT.getListPrice()).to.equal(newPrice);
  });

  it("should not allow non-owners to update the list price", async function () {
    const newPrice = ethers.utils.parseEther("2");

    await expect(
      healthNFT.connect(addr1).updateListPrice(newPrice)
    ).to.be.revertedWith("Only owner can update listing price");
  });

  // it("should allow the owner to burn a copy of the NFT", async function () {
  //   const uri = "https://example.com/token/1";
  //   const price = ethers.utils.parseEther("1");

  //   await healthNFT.createToken(uri, price);
  //   const tokenId = 0;
  //   const newTokenId = 1;

  //   await healthNFT.transferNFT(addr1.address, tokenId);

  //   await expect(healthNFT.burnCopy(newTokenId)).to.be.revertedWith(
  //     "HealthNFT: Can't burn a master NFT"
  //   );

  //   await healthNFT.burnCopy(tokenId);
  //   expect(await healthNFT.ownerOf(tokenId)).to.equal(
  //     ethers.constants.AddressZero
  //   );
  // });

  it("should not allow burning a master copy of the NFT", async function () {
    const uri = "https://example.com/token/1";
    const price = ethers.utils.parseEther("1");

    await healthNFT.connect(addr1).createToken(uri, price);
    const tokenId = 0;

    await expect(healthNFT.burnCopy(tokenId)).to.be.revertedWith(
      "HealthNFT: Can't burn a master NFT"
    );
  });

  // it("should return the correct list of NFTs for a given address", async function () {
  //   const uri1 = "https://example.com/token/1";
  //   const price1 = ethers.utils.parseEther("1");
  //   const uri2 = "https://example.com/token/2";
  //   const price2 = ethers.utils.parseEther("2");

  //   await healthNFT.createToken(uri1, price1);
  //   await healthNFT.createToken(uri2, price2);
  //   await healthNFT.transferNFT(addr1.address, 0);
  // });
});
