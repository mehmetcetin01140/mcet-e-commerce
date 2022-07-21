
import React,{useEffect,useState,useContext} from 'react';
import {db} from "../../firebase"
import { collection,onSnapshot,query,orderBy,where } from 'firebase/firestore';
import {AuthContext} from "../../contexts/AuthContext"
export default function Cart() {
    const {currentUser} = useContext(AuthContext)
  const [cartItems,setCartItems] = useState([])
  useEffect(() => {
    const ref = collection(db,'cart')
    const q = query(ref,where("user","==",currentUser?.email),orderBy("id","desc"))

    const unsub = onSnapshot(q,(snap)=>{
            setCartItems(snap.docs.map(doc=>(
                {...doc.data(),id:doc.id,tarih:doc.data().tarih?.toDate().getTime()}
            )))
    })
        
    return unsub
}, []);
  return (
    <div>index</div>
  )
}
