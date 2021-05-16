const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3')
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'opinion buzz divide will social lava ride trick run nephew region street',
    'https://rinkeby.infura.io/v3/3b2e8c474f4949b7a5d18cad56b3615a'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ['hi there']
        })
        .send({gas: '1000000', from: accounts[0]})
        .catch(e => console.log('error', e));

    console.log(result);
}

deploy();