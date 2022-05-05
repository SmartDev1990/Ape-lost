import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section" background-color="#10083B" style={{marginTop: "30px", marginBottom: "30px"}}>
      <div className="container">
      <h3 className="feature-content2">OUR TEAM</h3>
        <div className="wrapper">
        <div className="wrapper-card">
        <img className="wrappericon1" src="/images/team1.png" />
        <p className="Team-content"> MINTING PRICE </p>
        <p className="Team-content3"> Each Lost Ape will have a mint <br />
        price of 0.05 ETH </p>
        </div>
        <div className="wrapper-card">
        <img className="wrappericon1" src="/images/team2.png" />
        <p className="Team-content"> MINTING PRICE </p>
        <p className="Team-content3"> Each Lost Ape will have a mint <br />
        price of 0.05 ETH </p>
        </div>
        <div className="wrapper-card">
        <img className="wrappericon1" src="/images/team6.png" />
        <p className="Team-content"> MINTING PRICE </p>
        <p className="Team-content3"> Each Lost Ape will have a mint <br />
        price of 0.05 ETH </p>
        </div>
        <div className="wrapper-card">
        <img className="wrappericon1" src="/images/team3.png" />
        <p className="Team-content"> MINTING PRICE </p>
        <p className="Team-content3"> Each Lost Ape will have a mint <br />
        price of 0.05 ETH </p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;
