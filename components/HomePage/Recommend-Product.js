import React from 'react'
import {Row,Col} from "react-bootstrap"
import CardComponent from "./Card"
import recommendationData from "../../json/recommendation.json"
export default function RecommendProduct() {
    const cardLoop = () =>{
        return(
                
                    recommendationData.map(data=>(
                        <CardComponent data={data}/>
                    ))
                
        )
    }
    const cards = cardLoop()

  return (
    <div>
        <h4>
            İlgini Çekebilir
        </h4>
        <Row>
        {cards}
        </Row>
        
    </div>
  )
}
