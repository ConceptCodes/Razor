require("@nomiclabs/hardhat-waffle");



module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {

    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: []
    }
  },
  solidity: "0.8.4",
};
