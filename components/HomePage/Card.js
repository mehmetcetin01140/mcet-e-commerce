import {useContext,useEffect,useState} from "react"
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import {Row,Col} from "react-bootstrap"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import {addDoc,updateDoc,doc,collection,serverTimestamp,query,where,onSnapshot} from "firebase/firestore"
import {db} from "../../firebase"
import {AuthContext} from "../../contexts/AuthContext"
function CardComponent({data}) {
  const [favItems,setFavItems] = useState([])
  const {currentUser} = useContext(AuthContext)
    const setValue = Math.floor(Math.random()*5+2)
      const randomProductScore = () =>{
        const productObject= {
            size: 25,
            value: setValue,
            edit: false
          };
          return productObject
      }
      useEffect(() => {
        const ref = collection(db,'fav')
        if(currentUser){
    
          const q = query(ref,where("user","==", currentUser?.email))
          const unsub = onSnapshot(q,(snap)=>{
                  setFavItems(snap.docs.map(doc=>(
                    {...doc.data(),favInfo:doc.data().favInfo,id:doc.id}
                  )))
          })
          return unsub
          
        }
        
    }, [currentUser]);

    const addToFav = (id) =>{
      const ref = collection(db,'fav');
      const findProduct = favItems.find(elem=>elem.favInfo.id=== id)
     
   if(currentUser){
    if(findProduct){
      const refe = doc(db,"fav",findProduct.id)
      const newQuantity = {favInfo:{isFav:!findProduct.favInfo.isFav,id:id}}
      updateDoc(refe,newQuantity)
 }
 else{
addDoc(ref,{favInfo:{isFav:true,id:id},user:currentUser.email})
 }
   }
   else{
    router.push("/sepetim")
   }
            
            
          
      }
      
  return (
    <Col  md={3} xs={6} className="product-card-container mb-5 ">
    <div className="product-card">
        <Link href={`/product/${data.id}`}>
        <a style={{
          textDecoration: 'none',
          color: 'inherit',
        }}>

        <div className="product-image">
        <div className='product-like' onClick={()=>addToFav(data.id)}>
           <FontAwesomeIcon icon={faHeart} className="like-icon" id='like-icon'/>
        </div>
        <div className='product-free-shipping'>
<span>Ücretsiz Kargo</span>
        </div>
    <img src={data.img} alt="" />
        </div>
    <div className='product-info'>
    <span>{data.name}</span>
    </div>
        </a>
        </Link>
    <div className="stars">
<ReactStars {...randomProductScore()} />
<span>(24)</span>
    </div>
    <span>{data.price} ₺</span>
</div>
            </Col>

  );
  }
export default CardComponent;