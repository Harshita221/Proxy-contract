const { ethers, upgrades } = require('hardhat');
const PROXY_ADDR =" 0x48bAbD5c6c7A6a308f9FC5F87707fDB34bF65E5a";

async function main () {
  
  const BoxV2 = await ethers.getContractFactory('BoxV2');

  // Upgrade the proxy to BoxV2
  await upgrades.upgradeProxy(PROXY_ADDR, BoxV2);

  // Get the implementation address using the admin
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(PROXY_ADDR);

  console.log("Box Upgraded to V2");
  console.log("Upgraded implementation address:", implementationAddress);
}

// Execute the main function and catch any errors
main().catch((error) => {
  console.error(error);
  process.exit(1);
});



