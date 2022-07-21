
import ProductData from "../../json/recommendation.json"
import {Container,Row,Col} from "react-bootstrap"
import ReactStars from "react-rating-stars-component";
import RecommendProduct from "../../components/HomePage/Recommend-Product"
import {addDoc,updateDoc,doc,collection,serverTimestamp} from "firebase/firestore"
import {db} from "../../firebase"
import React, { useState ,useContext} from 'react'
import {AuthContext} from "../../contexts/AuthContext"
export default function Product({product}) {
    const {currentUser} = useContext(AuthContext)
    const firstExample = {
        size: 30,
        value: 2.5,
        edit: false
      };
      const addToCart = () =>{
        const ref = collection(db,'cart');
        const docRef = addDoc(ref,{product:product,user:currentUser.email})
      }
      const discountCalculator = () =>{
        const replacedPrice = (Number(product.price.replace(".","")))
        const calculator = replacedPrice*0.10.toFixed(2)
           const result = replacedPrice - calculator
        return result
      }
      const discountedPrice = discountCalculator()
  return (
    <>
            <Container className="product-content">
                <Row>
                    <Col md={6} className="product-content-left-side">
                    <img src={product.img} alt="" />
                    
                    </Col>
                    <Col md={6} className="product-content-right-side">
                        <h4>{product.name}</h4>
                        <div className="price-and-vote">

                       <h3> {product.price} ₺</h3>
                        <div className="stars">
                        <ReactStars {...firstExample} />
<span>(24) Oylama</span>
                        </div>
                        </div>
                     <div className="product-content-buy">
                     <div className="product-content-discount">
                     <h5>
                            Sepette
                        </h5>
                            <h3>
                            {discountedPrice} ₺
                            </h3>
                           </div>
                   


                           <button onClick={addToCart}>
                                Sepete Ekle
                            </button>
                     </div>
                    <div className="product-content-description">
                        <h5>Açıklama</h5>
                        {product.desc}
                    </div>
                        <div className="free-shipping">
                        <img src="/ucretsizkargo.png"/>
                        </div>
                
                    </Col>
                    
                </Row>
        
            </Container>
            <Container className="product-content-footer">
            <div className="product-return">
                <img src="/kolayiade.png"/>
                </div>
                <RecommendProduct/>
            </Container>
    </>
  )
}

export const getStaticProps = async({params}) =>{
    const products = ProductData.filter(product=>product.id.toString() === params.id)
    return{
        props:{
            product:products[0]
        }
    }
}
export const getStaticPaths = async() =>{

    const paths = ProductData.map(product=>({
        params:{id:product.id.toString()}
    }))
    return {paths,fallback:false}
}