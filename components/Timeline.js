import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section"  background-color="#10083B" style={{marginTop: "200px", marginBottom: "100px"}}>
    <div className="container">
    <h3 className="feature-content2">MOUSHY SCHEDULE</h3>
      <div className="timeline">
  <div className="container1 left">
    <div className="date">15 Dec</div>
    <i className="icon fa fa-home"></i>
    <div className="content">
      <h2>Prepared for Items</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
  <div className="container1 right">
    <div className="date">22 Oct</div>
    <i className="icon fa fa-gift"></i>
    <div className="content">
      <h2>Generate NFT</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
  <div className="container1 left">
    <div className="date">10 Jul</div>
    <i className="icon fa fa-user"></i>
    <div className="content">
      <h2>Build Communiy</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
  <div className="container1 right">
    <div className="date">18 May</div>
    <i className="icon fa fa-running"></i>
    <div className="content">
      <h2>Opent Mint & Airdrop</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
  <div className="container1 left">
    <div className="date">10 Feb</div>
    <i className="icon fa fa-cog"></i>
    <div className="content">
      <h2>Listing</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
  <div className="container1 right">
    <div className="date">01 Jan</div>
    <i className="icon fa fa-certificate"></i>
    <div className="content">
      <h2>Investors Reward</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
</div>
</div>
    </section>
  );
}

export default Hero;
