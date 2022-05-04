import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative" background-color="#10083B" style={{marginTop: "200px", marginBottom: "100px"}}>
      <Container>
      <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="herotitle">
              JOIN OUR COMMUNITY <br />
              ON DISCORD

            </h1>
            <a
              href="#"
              target="_blank"
              className="btn"
              >DISCORD</a
            >

          </div>
          <div class="col-md-6">
            <div className="text-center">
              <img
                src="/images/team4.png"
                alt="logo"
                className="imgjoin"
                data-aos="zoom-in"
              />
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
