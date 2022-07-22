
import React,{useEffect,useState,useContext} from 'react';
import {db} from "../../firebase"
import { collection,onSnapshot,query,orderBy,where } from 'firebase/firestore';
import {AuthContext} from "../../contexts/AuthContext"
import {Row,Col} from "react-bootstrap"
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
      
console.log(cartItems)
  return (
    <div className='cart-container'>
      <Row>
        <Col md={9}>
        {cartItems.map(item=>(
          <h1>{item.product.name}</h1>
        ))}
        </Col>
        <Col md={3}>
          <h5>Seçilen Ürünler</h5>
      <h3>{cartItems[0]?.product?.price} TL</h3>
      <button>Alışverişi Tamamla</button>
        </Col>
      </Row>
  
    </div>
  )
}
