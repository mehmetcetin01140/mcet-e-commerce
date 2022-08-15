import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import HeaderBottom from './Header-Bottom'
import SearchInput from './Search-Input'
import Login from "../LoginSignup/login"
import HeaderCartIcon from '../Cart/Header-Cart-Icon'
import Offcanvas from "./Off-Canvas"
export default function Header() {
  return (
    <div className='header-container'>
        <Container>
          <div className='header-top'>
         <Offcanvas/>
          <SearchInput/>
         <HeaderCartIcon />
          <div className="account">
          <Login/>
          </div>
          </div>
        </Container>
          <div className="header-bottom">
            <HeaderBottom/>
          </div>
    </div>
  )
}
