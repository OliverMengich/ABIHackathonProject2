
pragma ton-solidity ^0.35.0;
pragma AbiHeader expire;
contract Bihashara{
    struct Proposal{
        string description;
        uint128 value;
        bool complete;
        uint approvalCount;
        mapping(address =>bool)approvals;
    }
    
    address public manager;
    uint public minimumContribution;
    
    mapping(address => bool) members;
    Proposal[] proposals;
    uint public approversCount;
    constructor() public{
        manager = msg.sender;

        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
    }
    function addMembers() public{
        members[msg.sender]= true;
    }
    modifier restricted(){
        require(msg.sender == manager);
        tvm.accept(); 
        _;
    }
    modifier onlyMembers() {
        require(members[msg.sender]);
        tvm.accept();
        _;
    }
    function initiateProposal(string description,uint128 value) public restricted {
        // returns true if a person is a member
        minimumContribution = value;
        Proposal newproposal = Proposal({
            description:description,
            value:value,
            complete: false,
            approvalCount:0
       });
       proposals.push(newproposal); // add the new request to the struct of requests
    }
   function Contribute(uint128 amount,bool bounce) public onlyMembers{
       require(members[msg.sender]);
       require(amount > minimumContribution);
       manager.transfer(amount,bounce,3);
       approversCount++;
    }

    function monitorCount() public view returns(uint){
        return approversCount;
    }
    function passProposal(uint index) public view restricted returns(bool){
        Proposal propose = proposals[index];
        require(approversCount >= 10);
        propose.complete = true;
        
    }
    
}