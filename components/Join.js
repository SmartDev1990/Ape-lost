import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative" background-color="#10083B" style={{marginTop: "200px", marginBottom: "80px"}}>
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
              href="https://drive.google.com/file/d/1kRKcILq4BToqLbhCUlyaYKdvuVCYwi2R/view?usp=drivesdk"
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
