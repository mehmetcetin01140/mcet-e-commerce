import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import HeaderBottom from './Header-Bottom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import SearchInput from './Search-Input'
import Login from "../LoginSignup/login"
export default function Header() {
  return (
    <div className='header-container'>
        <Container>
          <div className='header-top'>
          <SearchInput/>
          <div className="cart">
          <FontAwesomeIcon icon={faCartShopping} />
          </div>
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
