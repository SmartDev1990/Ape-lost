import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section background-color="#10083B" style={{marginTop: "30px", marginBottom: "30px"}}>
      <Container>
      <h3 className="feature-content2">A CILIVIZATION AUGMENTED</h3>
      <Row>
      <div className="cardcontainer-grid">
      <div className="wrapper">
        <div className="wrappercard">
          <img className="wrappericon" src="/images/NFT1.png" />
         </div>
         <div className="wrappercard">
          <img className="wrappericon" src="/images/NFT2.png" />
         </div>
         <div className="wrappercard">
           <img className="wrappericon" src="/images/NFT3.png" />
          </div>
          <div className="wrappercard">
           <img className="wrappericon" src="/images/NFT4.png" />
          </div>
        </div>
       </div>
       </Row>
      </Container>
    </section>
  );
}

export default Hero;
