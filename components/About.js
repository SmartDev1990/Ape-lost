import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section" background-color="#10083B" style={{marginTop: "30px", marginBottom: "30px"}}>
      <div className="container">
      <h3 className="feature-content2">OUR TEAM</h3>
        <div className="wrapper">
          <img className="wrappericon" src="/images/NFT1.png" />
             <img className="wrappericon" src="/images/NFT1.png" />
             <img className="wrappericon" src="/images/NFT1.png" />
           <img className="wrappericon" src="/images/NFT1.png" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
