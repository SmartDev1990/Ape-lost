import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import {
  SET_MAXMETABAES,
  SET_METABAESCONTRACT,
  SET_METABAESPRICE,
  SET_SIGNEDIN,
  SET_TOTALSUPPLY,
  SET_WALLETADDRESS
} from '../constants/action-types';

import { ADDRESS, ABI } from '../config';

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)
  // const [walletAddress, setWalletAddress] = useState(null)

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src="/images/logo.png" alt="" style={{width: "150px"}}/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="navtext" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navtext" href="#UniqueApe">Exchange</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="navtext" href="#ApeMap">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navtext" href="/">Faq</NavLink>
              </NavItem>
              <NavItem>
              <Button className="SocialMedia" style={{background: "#71B3FF"}} size="sm" >Go to main page</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
