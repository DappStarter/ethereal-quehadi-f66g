require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remind concert grace drink flip squirrel'; 
let testAccounts = [
"0x77b4e8c771aa020a23f1b7b661c2815643e4281c7422a01eb37a5a54a9007959",
"0x9c6152de4cdaa7326ac9b4e83c882bd15422d9602114ef877062a12c4691e19c",
"0x4f8106151aa26c3ca28401eb766681b0981ce1eb97dfab4cbf02681c5b989be2",
"0x4dcfd3f4e7e47a6c911ef858542793744782a2542cfe9dc382b96ce2afdf91f4",
"0xb3c8a7c96c5d30d41a83b850506bab651b457820918997dfb4cfa012abdc847a",
"0xf9babdf063bf6cc9cccf72335c5b0300df43618bdd0e7524b89bbdea81309aa5",
"0xabb82586aa5e84a6deda922777a0dc25d92bf8211838d81e39791bfeb9250244",
"0x58aa523d64e1880ba4fa86fb4c2d6e4d22013f1d4b1f601ca8f1751aa5738f7b",
"0x7ff6c2d5a32027fc0ca1ed70e529df208355e1752ba57d35bd773b9f94bc84d5",
"0x06859fc0fd6d37c304459e161258697cc7721bd82ea8719c56e394cfed9a9da6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

