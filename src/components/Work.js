import React, { Component } from "react";
import { Container } from "@mui/system";
import ProjectBlock from "./ProjectBlock";

class Work extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="lg" className="work-wrapper">
          <h1>Projects</h1>
          <ProjectBlock
            image="crowdFunding.png"
            heading="1.Crowd Funding Platform"
            body="A decentralized platform where user can create campaigns in which
            other users can donate. The user who donates also has the power over
            how the donated money is spent voting on the spending requests made by the campaign owner."
            github="https://github.com/mohdnuman/kickstart"
          />

          <ProjectBlock
            image="collateralizedBorrowing.png"
            heading="2.Collateralized Borrowing"
            body="A decentralized platform where user can supply assets like DAI,USDC,USDT and borrow assets based on this collateral."
            github="https://github.com/mohdnuman/DEFI-project"
          />

          <ProjectBlock
            image="amm.png"
            heading="3.Automated Market Maker (Forked Uniswap)"
            body=""
            github="https://github.com/mohdnuman/uniswap-v2-fork"
          />

          <ProjectBlock
            image="nft.png"
            heading="4.NFT MarketPlace"
            body="A platfrom on which user can upload any image and convert it into an NFT. The user can then list the NFT to sell it on the marketPlace"
            github="https://github.com/mohdnuman/nft-marketplace"
          />

          <ProjectBlock
            image="socialMedia.png"
            heading="5.Social Media Website"
            body=""
            github="https://github.com/mohdnuman/codeial"
          />
        </Container>
      </div>
    );
  }
}

export default Work;
