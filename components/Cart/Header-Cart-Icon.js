import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import {CartContext} from "../../contexts/CartContext"
export default function HeaderCartIcon() {
  const {cartItems} = useContext(CartContext)

  return (
    <div className="cart">
      <Link href="/sepetim">
        <a style={{
          textDecoration: 'none',
          color: 'inherit',
        }}> 
    <FontAwesomeIcon icon={faCartShopping} fontSize={20} style={{margin:"auto"}}/>
      <div className='cart-quantity'>
      <span>{cartItems.length}</span>
      </div>
        </a>
      </Link>
    </div>
  )
}
