const { expect } = require("chai");

describe("HealthNFT", function () {
  let healthNFT;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    const HealthNFT = await ethers.getContractFactory("HealthNFT");
    healthNFT = await HealthNFT.deploy();
    await healthNFT.deployed();

    [owner, addr1, addr2] = await ethers.getSigners();
  });

  it("should create a token", async function () {
    const uri = "URI";
    const price = ethers.utils.parseEther("1");

    const tokenId = await healthNFT.createToken(uri, price);

    expect(await healthNFT.ownerOf(tokenId)).to.equal(owner.address);
  });

  it("should get the latest ID of a listed token", async function () {
    const uri = "URI";
    const price = ethers.utils.parseEther("1");

    await healthNFT.createToken(uri, price);

    const latestToken = await healthNFT.getLatestIdToListedToken();
    const expectedTokenId = 0;

    expect(latestToken.tokenId).to.equal(expectedTokenId);
  });

  it("should get a listed token by its ID", async function () {
    const uri = "URI";
    const price = ethers.utils.parseEther("1");

    const tokenId = await healthNFT.createToken(uri, price);

    const listedToken = await healthNFT.getListedTokenForId(tokenId);

    expect(listedToken.tokenId).to.equal(tokenId);
    expect(listedToken.owner).to.equal(owner.address);
    expect(listedToken.seller).to.equal(owner.address);
    expect(listedToken.price).to.equal(price);
    expect(listedToken.currentlyListed).to.be.true;
  });

  it("should get a user's own NFTs", async function () {
    const uri = "URI";
    const price = ethers.utils.parseEther("1");

    await healthNFT.createToken(uri, price);

    const userNFTs = await healthNFT.getMyNFTs();

    expect(userNFTs.length).to.equal(1);
    expect(userNFTs[0].owner).to.equal(owner.address);
  });

  it("should update the list price", async function () {
    const newListPrice = ethers.utils.parseEther("0.02");

    await healthNFT.updateListPrice(newListPrice);

    const updatedListPrice = await healthNFT.getListPrice();

    expect(updatedListPrice).to.equal(newListPrice);
  });

  it("should transfer an NFT", async function () {
    const uri = "URI";
    const price = ethers.utils.parseEther("1");

    const tokenId = await healthNFT.createToken(uri, price);

    await healthNFT.transferNFT(addr1.address, tokenId);

    expect(await healthNFT.ownerOf(tokenId)).to.equal(addr1.address);
  });

  it("should burn a copy of an NFT", async function () {
    const uri = "URI";
    const price = ethers.utils.parseEther("1");

    const tokenId = await healthNFT.createToken(uri, price);

    await healthNFT.burnCopy(tokenId);

    expect(await healthNFT.ownerOf(tokenId)).to.be.reverted;
  });

  it("should not burn a master NFT", async function () {
    const uri = "URI";
    const price = ethers.utils.parseEther("1");

    const tokenId = await healthNFT.createToken(uri, price);

    await expect(healthNFT.burnCopy(tokenId)).to.be.revertedWith(
      "HealthNFT: Can't burn a master NFT"
    );
  });

  it("should only allow the owner to update the list price", async function () {
    const newListPrice = ethers.utils.parseEther("0.02");

    await expect(
      healthNFT.connect(addr1).updateListPrice(newListPrice)
    ).to.be.revertedWith("Only owner can update listing price");
  });

  it("should have the correct properties for a listed token after being created", async function () {
    const uri = "URI";
    const price = ethers.utils.parseEther("1");

    const tokenId = await healthNFT.createToken(uri, price);

    const listedToken = await healthNFT.getListedTokenForId(tokenId);

    expect(listedToken.tokenId).to.equal(tokenId);
    expect(listedToken.owner).to.equal(owner.address);
    expect(listedToken.seller).to.equal(owner.address);
    expect(listedToken.price).to.equal(price);
    expect(listedToken.currentlyListed).to.be.true;
  });

  it("should emit an event when a token is successfully listed", async function () {
    const uri = "URI";
    const price = ethers.utils.parseEther("1");

    const tokenId = await healthNFT.createToken(uri, price);

    await expect(healthNFT.createToken(uri, price))
      .to.emit(healthNFT, "TokenListedSuccess")
      .withArgs(tokenId, healthNFT.address, owner.address, price, true);
  });

  it("should not allow creating a listed token with a negative price", async function () {
    const uri = "URI";
    const negativePrice = ethers.utils.parseEther("-1");

    await expect(healthNFT.createToken(uri, negativePrice)).to.be.revertedWith(
      "Make sure the price isn't negative"
    );
  });

  it("should not allow getting a listed token for a non-existent token ID", async function () {
    const nonExistentTokenId = 999;

    await expect(
      healthNFT.getListedTokenForId(nonExistentTokenId)
    ).to.be.revertedWith("HealthNFT: URI query for nonexistent token");
  });

  it("should not allow transferring a copy of an NFT that doesn't exist", async function () {
    const nonExistentTokenId = 999;

    await expect(
      healthNFT.transferNFT(addr1.address, nonExistentTokenId)
    ).to.be.revertedWith("ERC721: operator query for nonexistent token");
  });

  it("should not allow transferring an NFT to the zero address", async function () {
    const uri = "URI";
    const price = ethers.utils.parseEther("1");

    const tokenId = await healthNFT.createToken(uri, price);

    await expect(healthNFT.transferNFT(address(0), tokenId)).to.be.revertedWith(
      "HealthNFT: Transfer to zero address"
    );
  });

  it("should get the current token ID", async function () {
    const uri = "URI";
    const price = ethers.utils.parseEther("1");

    await healthNFT.createToken(uri, price);

    const currentTokenId = await healthNFT.getCurrentToken();

    expect(currentTokenId).to.equal(0);
  });

  // Add more tests as needed
});
