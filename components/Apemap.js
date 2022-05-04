import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section" style={{marginTop: "100px", marginBottom: "100px"}} id="APEMAP">
      <div className="container">
      <h3 className="feature-content2">THE APE MAP</h3>
      <div className="containerApe">
      <div className="feature-header">
          <img className="Mapicon" src="/images/APEMAP.png" style={{alignItems: "center"}}/>
          </div>
        </div>
       </div>
    </section>
  );
}

export default Hero;
