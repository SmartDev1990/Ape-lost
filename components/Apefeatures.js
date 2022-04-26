import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section background-color="#10083B" style={{marginTop: "30px", marginBottom: "30px"}}>
    <div className="container">
        <div className="text-center">
          <h3 classNameName="feature-content2">A CILIVIZATION AUGMENTED</h3>

          <div className="row">
            <div className="col-md-3">
              <img
                src="/images/NFT1.png"
                className="wrappericon"
                alt="Launchpad"
                draggable="false"
              />
            </div>
            <div className="col-md-3">
              <img
                src="/images/NFT1.png"
                className="wrappericon"
                alt="Liquidity Aggregator"
                draggable="false"
              />
            </div>
            <div className="col-md-3">
              <img
                src="/images/NFT1.png"
                className="wrappericon"
                alt="Farming/Staking"
                draggable="false"
              />
            </div>
            <div className="col-md-3">
              <img
                src="/images/NFT1.png"
                className="wrappericon"
                alt="NFT Marketplace"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
