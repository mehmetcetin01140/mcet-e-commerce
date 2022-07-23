import React from 'react'
import {Row,Col} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTrash} from '@fortawesome/free-solid-svg-icons'
export default function Card({cartData}) {
  return (
            <Row className="card-container">
                   {cartData.map((item,index)=>(
                    <>
        <Col md={8}>
                        <Col md={10} >
                        <div className="card-items">
                            
          <img src={item.product.img}/>
          <h4>{item.product.name}</h4>
                        </div>
                        <FontAwesomeIcon icon={faTrash} />
                        </Col>
                       
        </Col>
                    <Col md={2}>
                    <h5>{item.product.price} TL</h5> 
                    </Col>
 
    
                    </>
    
        ))}
            </Row>
  )
}
