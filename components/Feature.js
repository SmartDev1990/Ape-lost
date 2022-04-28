import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section background-color="#10083B" style={{marginTop: "30px", marginBottom: "30px"}}>
      <div className="container">
      <h3 className="feature-content2">A CILIVIZATION AUGMENTED</h3>
        <div className="wrapper">
          <img src="/images/NFT1.png" />
             <img src="/images/NFT2.png" />
             <img src="/images/NFT3.png" />
           <img src="/images/NFT4.png" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
