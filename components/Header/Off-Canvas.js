import React, { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUser,faList,faCartShopping,faHome} from '@fortawesome/free-solid-svg-icons'
import Login from '../LoginSignup/login';
import {AuthContext} from "../../contexts/AuthContext"
import {CartContext} from "../../contexts/CartContext"
import ResponsiveCategories from '../HomePage/Responsive-Categories';
import Link from 'next/link';
export default function OffCanvas({ name, ...props }) {
    const {currentUser} = useContext(AuthContext)
    const {cartItems} = useContext(CartContext)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='off-canvas-container'>
     <FontAwesomeIcon icon={faBars} onClick={handleShow} fontSize={25} style={{margin:"auto"}}/>
      <Offcanvas show={show} onHide={handleClose} {...props} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menü</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
      <div className='off-canvas-body'>
    <div className='off-canvas-home'>

<Link href={"/"}>
            <a style={{
          textDecoration: 'none',
          color: 'inherit',
        }}>

    <FontAwesomeIcon icon={faHome} fontSize={20} />
<h5>Anasayfa</h5>
       </a>
        </Link>
    </div>
    <div className='off-canvas-login'>
   <div className='d-flex'>
   <FontAwesomeIcon icon={faUser} fontSize={20} />
     <h5>
        Hesabım
     </h5>
   </div>
     <span>
     { !currentUser?"Tüm işlemlerinizi görmek ve alışveriş yapmak için lütfen üye girişi yapın":currentUser.displayName}
     </span>
    <Login/>
    </div>
        <div className='off-canvas-categories'>
        <div className='d-flex'>
    <FontAwesomeIcon icon={faList} fontSize={20} />
            <h5>Kategoriler</h5>
        </div>
        <ResponsiveCategories/>
        </div>
        <div className='off-canvas-cart'>
  
        <Link href={"/sepetim"}>
            <a style={{
          textDecoration: 'none',
          color: 'inherit',
        }}>
    <FontAwesomeIcon icon={faCartShopping} fontSize={20} />
        <h5>
            Sepetim 
        </h5>
       <span> ({cartItems.length})</span>
       </a>
        </Link>
  
    </div>
      </div>
      
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}