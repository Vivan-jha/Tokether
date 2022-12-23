require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Exlt09rBBJy-n5M9umOyqWhW_ueIg4ah',
      accounts: ['f6d08ea5e9b9d1a3018dcd92ab0c35f61a7879e6f62d0759f205b97897b8df2a'],
    },
  },
};