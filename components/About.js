import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative" style={{marginTop: "30px", marginBottom: "30px"}}>
      <Container>
      <h3 className="feature-content2">TEAM MEMBER</h3>
      <div className="cardcontainer">
      <div className="wrapper">
        <div className="wrapperteam">
          <img className="wrappericonteam" src="/images/team1.png" />
          <p className="Team-content"> CEO </p>
          <p className="Team-content2"> CEO </p>
         </div>
         <div className="wrapperteam">
          <img className="wrappericonteam" src="/images/team2.png" />
          <p className="Team-content"> CEO </p>
          <p className="Team-content2"> CEO </p>
         </div>
         <div className="wrapperteam">
           <img className="wrappericonteam" src="/images/team3.png" />
           <p className="Team-content"> CEO </p>
           <p className="Team-content2"> CEO </p>
          </div>
          <div className="wrapperteam">
           <img className="wrappericonteam" src="/images/team4.png" />
           <p className="Team-content"> CEO </p>
           <p className="Team-content2"> CEO </p>
          </div>
        </div>
       </div>
      </Container>
    </section>
  );
}

export default Hero;
