import React, { useEffect } from 'react'
import {Container,Row} from "react-bootstrap"
import recommendationData from "../../json/recommendation.json"
import CardComponent from "../../components/HomePage/Card"
import { listManipulationForStaticPaths } from '../../helpers/ManipulatedListForStaticPaths';
export default function Category({product}) {
   
    useEffect(()=>{
        listManipulationForStaticPaths()
    },[])
    const cardLoop = () =>{
        return(
                
                   product.map(data=>(
                        <CardComponent data={data}/>
                    ))
                
        )
    }
    const card = cardLoop()

  console.log(listManipulationForStaticPaths());
 
  return (
    <Container className='category'>
       <Row>
        {
            card
        }
       </Row>
        </Container>
   
  )
}
export const getStaticProps = async({params}) =>{
    const products = recommendationData.filter(category=>category.category===params.id)
    return{
        props:{
            product:products
        }
    }
}
export const getStaticPaths = async() =>{

    const paths = listManipulationForStaticPaths().map(product=>({
        params:{id:product.toLowerCase()}
    }))
    return {paths,fallback:false}
}