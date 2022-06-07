import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Hero = () => {
  return (
    <section background-color="#10083B" style={{marginTop: "200px", marginBottom: "100px"}}>
      <Container>
      <div className="hero2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="herotitle">
              JOIN OUR COMMUNITY <br />
              ON DISCORD

            </h1>
            <Button className="SocialMedia2" style={{background: "#71B3FF"}}>
              JOIN DISCORD
            </Button>

          </div>
          <div class="col-md-6">
            <div className="text-center">
            </div>
          </div>
        </div>
      </div>
    </div>
      </Container>
    </section>
  );
}

export default Hero;
