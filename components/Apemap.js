import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section style={{marginTop: "100px", marginBottom: "100px"}} id="APEMAP">
      <div className="container">
      <h3 className="feature-content2">THE APE MAP</h3>
      <div className="feature-header">
          <img src="/images/APEMAP.png" style={{alignItems: "center"}}/>
          </div>
          <div className="apewrapperteam">
          <a
            href="https://drive.google.com/file/d/1kRKcILq4BToqLbhCUlyaYKdvuVCYwi2R/view?usp=drivesdk"
            className="btn"
            >EXPLORE THE APE MAP</a
          >
        </div>
       </div>
    </section>
  );
}

export default Hero;
