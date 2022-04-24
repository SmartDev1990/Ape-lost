import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative" style={{marginTop: "100px", marginBottom: "100px"}} id="APEMAP">
      <Container>
      <h3 className="feature-content2">THE APE MAP</h3>
      <div className="apecardcontainer">
      <div className="apewrapper">
        <div className="apewrappercard">
          <img className="apewrapperteam" width="363px" height="159px"src="/images/APEMAP.png" />
          </div>
          <div className="apewrapperteam">
          <a
            href="https://drive.google.com/file/d/1kRKcILq4BToqLbhCUlyaYKdvuVCYwi2R/view?usp=drivesdk"
            className="btn"
            >EXPLORE THE APE MAP</a
          >
        </div>
        </div>
       </div>
      </Container>
    </section>
  );
}

export default Hero;
