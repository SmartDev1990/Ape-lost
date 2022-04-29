import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { SET_TOTALSUPPLY } from '../constants/action-types';

const mapStateToProps = state => ({ ...state })

// const mapDispatchToProps = dispatch => ({
//   setTotalSupply: totalSupply => dispatch(setTotalSupply(totalSupply))
// })

const Feature = (props) => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
      setHover(!hover)
  }
  const dispatch = useDispatch();
  const [show, setShow] = useState(false)
  const [tokenNumber, setTokenNumber] = useState(1)
  //const [totalSupply, setTotalSupply] = useState(0)

  const handleClose = () => setShow(false)
  const handleShow = () => {
    console.log(props)
    setShow(true)
  }

  const decreaseTokenNumber = () => {
    if (tokenNumber === 0) {
      return;
    }
    setTokenNumber(tokenNumber - 1)
  }

  const mint = async (numberofTokens) => {
    if (props.metabaesContract) {

      const price = Number(props.metabaesPrice)  * numberofTokens

      const gasAmount = await props.metabaesContract.methods.mintMetabaes(numberofTokens).estimateGas({from: props.walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: props.walletAddress, value: price})
      const _totalSupply = await props.metabaesContract.methods.totalSupply().call()
      // dispatch({type: SET_TOTALSUPPLY, data: _totalSupply})

      props.metabaesContract.methods
            .mintMetabaes(numberofTokens)
            .send({from: props.walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
            .on('receipt', function(receipt) {
              console.log('receipt')
            })
            .on('confirmation', function(confirmationNumber, receipt){
              console.log('confirmation')
              dispatch({type: SET_TOTALSUPPLY, data: parseInt(_totalSupply, 10) + numberofTokens})
            })
            .on('error', console.error)
      // props.setTotalSupply({totalSupply})
      // setTotalSupply(totalSupply)
      // setShow(false)

    } else {
        console.log("Wallet not connected")
    }

  };


  return (
    <section className="section position-relative" style={{marginTop: "100px", marginBottom: "30px"}}>
      <div className="container">
          <div className="feature-header">
             <img className="heroicon" src="/images/hero.png" />
            </div>
            <div className="title mb-5">
              <h3 className="feature-content">
                DEEP IN THE JUNGGLE <br />
                LIES A SECRET
              </h3>
                <Col className="feature-btn-group">
                  <Button size="sm" onClick={handleShow}>
                    Mint Your Ape
                  </Button>
                  </Col>
            </div>
        <Modal className="modal1" show={show} onHide={handleClose}>
          <Modal.Body className="button">
            <img src="/images/NFT1.png" alt="" style={{maxWidth: "80px"}}/>
            <Modal.Title>CLAIM YOUR CRYSTAL</Modal.Title>
          </Modal.Body>
          <Modal.Footer className="button">
            <Button color="pink" onClick={() => mint(tokenNumber)}>
              CLAIM
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    </section>
  );
}

export default connect(mapStateToProps, null)(Feature);
