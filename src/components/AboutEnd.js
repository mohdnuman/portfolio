import React, { Component } from "react";
import card from "../contracts/card";
import { web3 } from "../web3";
import { wallet } from "../web3";

class AboutEnd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txMessage: "",
      txHashLink: "",
      errorMessage:""
    };
  }
  handleWalletCheck = () => {
    console.log(wallet);
    if (wallet == true) {
      this.handleMint();
    } else {
      this.setState({
        txMessage: "No Wallet Detected",
      });
    }
  };
  handleMint = async () => {
    try {
      this.setState({ txMessage: "Minting..." });
      let accounts = await web3.eth.getAccounts();
      let mint = await card.methods
        .mint(accounts[0], 0, 1)
        .send({ from: accounts[0] });
      this.setState({ txMessage: "Minted ✔️" });
    } catch (error) {
        if(error.message==`invalid address (argument="address", value=undefined, code=INVALID_ARGUMENT, version=address/5.6.1) (argument="_to", value=undefined, code=INVALID_ARGUMENT, version=abi/5.6.4)`){
            this.setState({
                errorMessage: "No Wallet Detected"
            })
        }
        else{
            this.setState({
                errorMessage: error.message
              });
        }
    
    }
  };
  render() {
    return (
      <div className="about-middle-info">
        <span className="mint-text">
          Mint My Business Card And save it As A NFT in your wallet
          <br /> <span className="mint-info">
            (On the rinkeby testnet)
          </span>{" "}
          <br />
        </span>
        {this.state.txMessage == "" && this.state.errorMessage=="" && (
          <button className="mint-button" onClick={this.handleWalletCheck}>
            MINT
          </button>
        )}
        {this.state.txMessage != "" && this.state.errorMessage==""&& (
          <button
            className="mint-button"
            onClick={this.handleWalletCheck}
            disabled
          >
            {this.state.txMessage}
          </button>
        )}
        {this.state.errorMessage != "" && (
          <button
            className="mint-button"
            onClick={this.handleWalletCheck}
            disabled
          >
            {this.state.errorMessage}
          </button>
        )}
      </div>
    );
  }
}

export default AboutEnd;


