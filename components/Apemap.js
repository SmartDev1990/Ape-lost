import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section" style={{marginTop: "150px", marginBottom: "100px"}} id="APEMAP">
      <h3 className="feature-content2">AVATAR DISPLAYED</h3>
      <div className="containerApe">
      <div className="feature-header">
          <img className="Mapicon" src="/images/apemap.gif" style={{alignItems: "center"}}/>
          </div>
       </div>
    </section>
  );
}

export default Hero;
