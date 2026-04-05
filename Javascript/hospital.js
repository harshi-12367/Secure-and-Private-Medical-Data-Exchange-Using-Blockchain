// hospital.js

var account;
var contract;

// Replace this with YOUR deployed hospital contract address
var contractaddress = "0x516E5882A0983022Ec34A3fA87f7AA24295Da2b4";

// Replace this ABI with your Hospital contract ABI if different
var abi = [
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "hospital_id",
        "type": "uint16"
      }
    ],
    "name": "retreive_hospital_details",
    "outputs": [
      { "internalType": "string", "name": "", "type": "string" },
      { "internalType": "string", "name": "", "type": "string" },
      { "internalType": "string", "name": "", "type": "string" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

window.addEventListener("load", async () => {

  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask detected");

    window.web3 = new Web3(window.ethereum);

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });

      account = accounts[0];

      contract = new web3.eth.Contract(
        abi,
        contractaddress,
        { from: account }
      );

      console.log("Connected account:", account);

    } catch (error) {
      console.log("User denied MetaMask access");
    }

  } else {
    alert("Please install MetaMask");
  }

});


// FUNCTION TO FETCH HOSPITAL DETAILS

function get_hospital_details() {

  var hospital_id = document.getElementById("hid").value;

  contract.methods
    .retreive_hospital_details(hospital_id)
    .call()
    .then(function(result) {

      document.getElementById("hname").innerHTML = result[0];
      document.getElementById("haddr").innerHTML = result[1];
      document.getElementById("hspec").innerHTML = result[2];
