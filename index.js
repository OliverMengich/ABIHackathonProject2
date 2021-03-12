const address = "0:fa23c52d19609cc476bac5cec51011367847f7dbc166a84ba71406aa599a82aa";
const { TonClient } = require("@tonclient/core");
const contractPackage = require('./ABIHack');
const fs = require('fs');
const keypair = fs.readFile('./ABIHackathonProjectKeys.keys.json');
const client = new TonClient({
    network: {
        server_address: 'https://net.ton.dev'
    }

});
$()
var modal = document.getElementById("proposal");
var close = document.getElementsByClassName("close")[0];
var prop = document.getElementById("viewProp");

prop.onclick = function() {
    modal.style.display = "block";
}
close.onclick = function() {
        modal.style.display = "none";
    }
    // now working with the contract

var contractInit = document.getElementById("submit");
var reason = document.getElementById("reason").value;
var amount = document.getElementById("amount").value;

if ((reason.length > 10) && amount.value > 0) {
    initiateProposalFunc(reason, amount);
}
async function initiateProposalFunc(reason, amount) {
    const runMessage = await client.createRunMessage({
        address: address,
        abi: contractPackage.abi,
        function: 'initiateProposal',
        inputs: {
            description: '',
            amount: amount
        },
        keypair: keypair
    });
    const messageProcessingState = await client.contracts.sendMessage(runMessage.message);
    const result = await tonClient.contracts.waitForRunTransaction(runMessage, messageProcessingState);
    console.log(`Tokens were sent. Transaction id is ${result.transaction.id}`);
    console.log(`Run fees are  ${JSON.stringify(result.fees, null, 2)}`);
}

async function ContributeFunc(amount, index) {
    const runMessage = await client.createRunMessage({
        address: address,
        abi: contractPackage.abi,
        function: 'Contribute',
        inputs: {
            amount: amount,
            index: index
        },
        keypair: keypair
    });
    const messageProcessingState = await client.contracts.sendMessage(runMessage.message);
    const result = await tonClient.contracts.waitForRunTransaction(runMessage, messageProcessingState);
    console.log(`Tokens were sent. Transaction id is ${result.transaction.id}`);
    console.log(`Run fees are  ${JSON.stringify(result.fees, null, 2)}`);
}

async function passProposalFunc(index) {
    const runMessage = await client.createRunMessage({
        address: address,
        abi: contractPackage.abi,
        function: 'passProposal',
        inputs: {
            index: index
        },
        keypair: keypair
    });
    const messageProcessingState = await client.contracts.sendMessage(runMessage.message);
    const result = await tonClient.contracts.waitForRunTransaction(runMessage, messageProcessingState);
    console.log(`Tokens were sent. Transaction id is ${result.transaction.id}`);
    console.log(`Run fees are  ${JSON.stringify(result.fees, null, 2)}`);
}

async function approveProposalFunc(index) {
    const runMessage = await client.createRunMessage({
        address: address,
        abi: contractPackage.abi,
        function: 'approveProposal',
        inputs: {
            index: index
        },
        keypair: keypair
    });
    const messageProcessingState = await client.contracts.sendMessage(runMessage.message);
    const result = await tonClient.contracts.waitForRunTransaction(runMessage, messageProcessingState);
    console.log(`Tokens were sent. Transaction id is ${result.transaction.id}`);
    console.log(`Run fees are  ${JSON.stringify(result.fees, null, 2)}`);
}