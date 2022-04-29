import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section" background-color="#10083B" style={{marginTop: "30px", marginBottom: "30px"}}>
      <div className="container">
      <h3 className="feature-content2">A CILIVIZATION AUGMENTED</h3>
      <Col align-items="center">
        <Row>
          <img className="wrappericon" src="/images/NFT1.png" />
             <img className="wrappericon" src="/images/NFT2.png" />
             <img className="wrappericon" src="/images/NFT3.png" />
           <img className="wrappericon" src="/images/NFT4.png" />
        </Row>
      </Col>
    </div>
    </section>
  );
}

export default Hero;
