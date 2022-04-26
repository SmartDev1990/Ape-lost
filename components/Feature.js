import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section background-color="#10083B" style={{marginTop: "30px", marginBottom: "30px"}}>
      <Container>
      <h3 className="feature-content2">A CILIVIZATION AUGMENTED</h3>
      <div className="row align-items-start">
      <div className="cardcontainer">
      <div className="grid">
        <div className="wrapper">
          <img className="wrappericon" src="/images/NFT1.png" />
             <img className="wrappericon" src="/images/NFT1.png" />
             <img className="wrappericon" src="/images/NFT1.png" />
           <img className="wrappericon" src="/images/NFT1.png" />
        </div>
       </div>
       </div>
       </div>
      </Container>
    </section>
  );
}

export default Hero;
