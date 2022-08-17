import Web3 from "web3";
 
let web3;
let wallet;
let rinkeby;

async function main(){
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    // We are in the browser and metamask is running.
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
    let network=await web3.eth.net.getId();
    if(network==4){
      rinkeby=true;
    }else{
      rinkeby=false;
    }
    wallet=true;
  } else {
    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
      "https://rinkeby.infura.io/v3/7b3c38ebdc7c42f589edd9672188abd9"
    );
    web3 = new Web3(provider);
    wallet=false;
  }
}
 
main();
 
export {wallet,web3,rinkeby};
// export default web3;