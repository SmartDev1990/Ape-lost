import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Hero = () => {
  return (
    <section  background-color="#10083B" style={{marginTop: "100px", marginBottom: "100px"}}>
      <div className="container">
        <div className="wrapper">
        <Button className="SocialMedia">
          OPEN SEA
        </Button>
        <Button className="SocialMedia">
          WHITE PAPER
        </Button>
        <Button className="SocialMedia">
          ETHERSCAN
        </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
