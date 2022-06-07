import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section" background-color="#10083B" style={{marginTop: "100px", marginBottom: "100px"}} id="UniqueApe">
      <div className="container">
      <h3 className="feature-content2">8.888 Random Items</h3>
        <div className="wrapper">
          <img className="wrappericon" src="/images/NFT1.png" />
             <img className="wrappericon" src="/images/NFT2.png" />
             <img className="wrappericon" src="/images/NFT3.png" />
           <img className="wrappericon" src="/images/NFT4.png" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
