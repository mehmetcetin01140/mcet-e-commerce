import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import HeaderBottom from './Header-Bottom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div className='header-container'>
        <Container>
          <div className='header-top'>
          <input type="text" placeholder='Ürün Ara...'/>
          <div className="cart">
          <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <div className="account">
            <span>Üye Ol</span> <span>Giriş Yap</span>
          </div>
          </div>
        </Container>
          <div className="header-bottom">
            <HeaderBottom/>
          </div>
    </div>
  )
}
