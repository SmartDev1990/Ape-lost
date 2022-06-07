import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';

const mapStateToProps = state => ({ ...state })

// const mapDispatchToProps = dispatch => ({
//   setTotalSupply: totalSupply => dispatch(setTotalSupply(totalSupply))
// })

const Feature = (props) => {
return (
    <div className="block" style={{paddingTop: "100px", paddingButtom: "100px"}}>
      <div className="container">
          <div className="feature-header">
          <h3 className="feature-content">
            MOUSHYFAM
          </h3>
            </div>
            <div className="title mb-5">
              <h3 className="subfeature-content navtext">
                8.888 NFT Collection for moushy project avatars <br />
                Build on <font color="red" weight= "bold" size="40px" >Optimism</font> network
              </h3>
                <Col className="feature-btn-group">
                <a
                  href="#"
                  className="btn2"
                  >MINT YOUR MOUSHY</a
                >
                  </Col>
            </div>
        </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(Feature);
