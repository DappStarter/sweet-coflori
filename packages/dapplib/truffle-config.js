require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe stomach response often mistake include end army gentle'; 
let testAccounts = [
"0x110b2b96fd265147fbd713d41a2c426a31b8afcf55818b49ead56207c2ff8460",
"0x55d3acadb8ec14b4d06e78b903118b70629e13a94356ee00225726938e94bb34",
"0x4e1ff744a2728f26db24693cf34f09875b2d1133d85956f32b8f8ab2af94a042",
"0x5e65c2bf886462d2defbf147aa6d1d7640e396dc10b08bcdb743c3bac8ca37e6",
"0x6a30c113e2083e0a1ddf644240c078453a291d40f9633ba8874546bfb2f0c5e7",
"0x848392773b84eb3b34e068de13c95ccdc380dc1bd9fb2d0c8b0cdfd3631562fe",
"0x1819e267e179fc0a83d1d5c7734d0f735ec5ea5dc2e8c9118336e44bf4fe4d2d",
"0x125fe8bc1d122e4743ee0272877a4eb77a3d34b803eb0d33ac9a15f4f7b9754b",
"0x863fec2a09207dab0172e92ee9be30b5be2588884cb73241e1fe17fa00cb74c5",
"0xe013b5f9d2ea77012faedb587dbacf3f9cbc18d434647b56e452adea9e3a00c2"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
