
import React,{useEffect,useState,useContext} from 'react';
import {db} from "../../firebase"
import { collection,onSnapshot,query,orderBy,where } from 'firebase/firestore';
import {AuthContext} from "../../contexts/AuthContext"
import {Row,Col} from "react-bootstrap"
import Card from "./Card"
import CartRedirect from './Cart-Redirect';
import { orderAmount,tax,decimalSupportedTotalPrice } from '../../helpers/DecimalManipulator';
export default function Cart() {
  const [cartItems,setCartItems] = useState([])

  const {currentUser} = useContext(AuthContext)
  useEffect(() => {
    const ref = collection(db,'cart')
    if(currentUser){

      const q = query(ref,where("user","==", currentUser?.email))
      const unsub = onSnapshot(q,(snap)=>{
              setCartItems(snap.docs.map(doc=>(
                {...doc.data(),product:doc.data().product,id:doc.id}
              )))
      })
      return unsub
      
    }
}, [currentUser]);
  const totalPrice = () =>{
   const multiplyProductPriceAndQuantity = cartItems.map(item=>{
    return (Number(item.product?.price)*item.product?.quantity)
    })
    const sum = multiplyProductPriceAndQuantity.reduce(function(sum, number) {
      const updatedSum = sum + number;
      return updatedSum;
    }, 0);
    return sum
  }

  return (
    <div className='cart-container'>
      <Row>
      {
        currentUser ? (
          <>
          <Col lg={9} md={12}>
     
          <Card cartData={cartItems}/>
          </Col>
          <Col lg={3} md={12} className='cart-complete'>
            
            <h5>Sipariş Özeti</h5>
            <span>Sipariş Tutarı {`(${cartItems.length} ürün)`}: {orderAmount((totalPrice()-(totalPrice()*0.18)).toFixed(0))} TL</span>
            <br/>
        <span>KDV {"(%18)"}: {tax((totalPrice()*0.18).toFixed(0))} TL</span>
        <br/>
        <span>Kargo Ücreti: Ücretsiz</span>
            <hr/>
        <h5> Toplam Tutar : {decimalSupportedTotalPrice(totalPrice)} TL</h5>
        <div className='cart-button'>
  
        <button onClick={totalPrice}>Alışverişi Tamamla</button>
        </div>
          </Col>
        </>
        ) : (
          <CartRedirect/>
        )
      }
       
      </Row>
  
    </div>
  )
}
