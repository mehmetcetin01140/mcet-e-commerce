import React from 'react'
import { useRouter } from "next/router";
import {Container,Row} from "react-bootstrap"
import recommendationData from "../../json/recommendation.json"
import CardComponent from "../../components/HomePage/Card"
import {List} from "../../components/Header/Category-List"
import CheckSelectedCategory from '../../helpers/CheckSelectedCategory';
export default function Category({product}) {
   
    const cardLoop = () =>{
        return(
                
                   product.map(data=>(
                        <CardComponent data={data}/>
                    ))
                
        )
    }

    const card = cardLoop()
  
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
    const products = CheckSelectedCategory(params.id)
    return{
        props:{
            product:products
        }
    }
}
export const getStaticPaths = async() =>{

    const paths = List.map(product=>({
        params:{id:product.name.toLowerCase()}
    }))
    return {paths,fallback:false}
}