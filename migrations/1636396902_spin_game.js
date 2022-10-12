const spinProccessor = artifacts.require("SpinProccessor");

module.exports = function (_deployer, network, accounts) {
  console.log("accounts", accounts);
  const owner = accounts[0];
  const numberConbfirmationRequired = 2;
  const usdtAddr = "0x4c170b3Ed282A67206E149271a6EBF066Fd8C18c";
  _deployer.deploy(spinProccessor, usdtAddr);
};
