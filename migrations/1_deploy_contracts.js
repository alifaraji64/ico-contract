const TestToken = artifacts.require("TestToken"); // Import your contract's artifact

module.exports = function (deployer) {
  deployer.deploy(TestToken, "TestToken", "TT"); // Deploy your contract with any necessary constructor arguments
};