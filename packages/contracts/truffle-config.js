module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  migrations_directory: "build/migrations",
  test_directory: "build/test",
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    develop: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
    },
    ganache: {
      host: "localhost",
      port: 8545,
      network_id: "50",
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: 4,
      gasPrice: "20000000000",
    },
  },
};
