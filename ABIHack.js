const abi = {
    "ABI version": 2,
    "header": ["time", "expire"],
    "functions": [{
            "name": "constructor",
            "inputs": [
                { "name": "minimum", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "initiateProposal",
            "inputs": [
                { "name": "description", "type": "bytes" },
                { "name": "value", "type": "uint128" }
            ],
            "outputs": []
        },
        {
            "name": "approveProposal",
            "inputs": [
                { "name": "index", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "Contribute",
            "inputs": [
                { "name": "amount", "type": "uint128" },
                { "name": "index", "type": "uint128" }
            ],
            "outputs": []
        },
        {
            "name": "passProposal",
            "inputs": [
                { "name": "index", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "manager",
            "inputs": [],
            "outputs": [
                { "name": "manager", "type": "address" }
            ]
        },
        {
            "name": "minimumContribution",
            "inputs": [],
            "outputs": [
                { "name": "minimumContribution", "type": "uint256" }
            ]
        },
        {
            "name": "approvers",
            "inputs": [],
            "outputs": [
                { "name": "approvers", "type": "map(address,bool)" }
            ]
        },
        {
            "name": "approversCount",
            "inputs": [],
            "outputs": [
                { "name": "approversCount", "type": "uint256" }
            ]
        }
    ],
    "data": [],
    "events": []
}
const contractPackage = {
    abi,
    imageBase64: 'te6ccgECJAEABcwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShCAQBCvSkIPShBQIJngAAAAYHBgBZTtRNDT/9M/0wDV1wv/+G76QNP/9ATTH/QFbwL4bfhs+Gv4an/4Yfhm+GP4YoAF9fhCyMv/+EPPCz/4Rs8LAMj4TgHL//hK+Ev4TPhNbyJeUM8Rzsv/9ADLH/QAye1UgCASAMCQG4/3+NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHtRNAg10nCAY4p0//TP9MA1dcL//hu+kDT//QE0x/0BW8C+G34bPhr+Gp/+GH4Zvhj+GIKAdaOTfQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gpw+Gtt+GxwbW8C+G1w+G5wAYBA9A7yvdcL//hicPhjcPhmf/hh4tMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AQsAjI4d+EMhuSCfMCD4I4ED6KiCCBt3QKC53pL4Y+Aw8jTY0x8B+CO88rnTHyHBAyKCEP////28sZNb8jzgAfAB+EdukzDyPN4CASAYDQIBIBEOAgFqEA8AX7Wwp+B4A3wl5EXuAAAAAAAAAAAAAAAAEGeLZ8DnwOfJ7sKfgRDnhf/kuP2AP/wzwADvtE3lBfwgt0l4A29p/+j8IpA3SRg4b3whXXlwM3wk/CVjgvlwMnwAEHwmt4jAEHoHeVlqab/pAGn/+gK3gpA3ifwnOVSCXnlwMhA3iVn5cDIQP7epGJA3iPwlZGfCxGcA/QFANOegZ8DnwOS4/YAYGEl4Au8//DPAAgEgFRICASAUEwBdt/XqUnwBvhKyIvcAAAAAAAAAAAAAAAAIM8Wz4HPgc+Tf16lJiHPFslx+wB/+GeAAX7eighd8Ab4TsiL3AAAAAAAAAAAAAAAACDPFs+Bz4HPk1ooIXYhzwv/yXH7AH/4Z4AIBIBcWAMO2+MGKvhBbpLwBt7U03/R+EUgbpIwcN74Qrry4Gb4SfhKxwXy4GT4ACEhcHBtbwX4TSFvJcglzxQkzwt/I88KACLPC/8hAfQABV8FAW8iIaQDWYAg9ENvAvhtMFvwBX/4Z4ACttrQqvD4QW6S8Abe03/Tf9Eg+E1vEYAg9A7ystTTf9IA0//0BW8FIvhLvPLgZCIhIG8RWKC1f29RMfhM+EkBf8jKAFmBAQv0Qfhs+E6k+G5fA/AFf/hngAgEgHRkBD7vJHhxfhBboGgFijoDe+Ebyc3H4ZtP/0fhJ+Gog+Gv4QsMA8uBl+EUgbpIwcN74Qrry4Gb4ADDwBX/4ZxsBZu1E0CDXScIBjinT/9M/0wDV1wv/+G76QNP/9ATTH/QFbwL4bfhs+Gv4an/4Yfhm+GP4YhwAoI5N9AWNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4anD4a234bHBtbwL4bXD4bnABgED0DvK91wv/+GJw+GNw+GZ/+GHiAgEgIR4BCbn8HB8QHwH++EFukvAG3tP/0SD4TW8RgCD0DvKy1NN/0gDT//QFbwX4SfhMgQEL9AqT1woAkXDi8uBk+EkhbxSBAQv0CpPXCgCRcOKz8uBk+E1vIiMBUxK58rJTEIAg9A7ysoEBgXHXNvQF+EkBf8jKAFmBAQv0Qcj0AAHIzvQAWYAg9ENvAiAAaPht+E1vIiMBUxK58rJTEIAg9A7ysoEAgXHXNtP/AaRYyM7L/85ZgCD0Q28C+G1b8AV/+GcCASAjIgBftsTWzDwBvhMyIvcAAAAAAAAAAAAAAAAIM8Wz4HPgc+SLE1swiEB9ADJcfsAf/hngAJDbcCLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3FvdPhk3CHHANwh0x8h3SHBAyKCEP////28sZNb8jzgAfAB+EdukzDyPN4='
};
module.exports = contractPackage;