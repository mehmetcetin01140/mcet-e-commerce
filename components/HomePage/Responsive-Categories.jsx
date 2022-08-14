import React from "react";
import { List } from "../../components/Header/Category-List";
import Link from "next/link";
import {Container,Row,Col} from "react-bootstrap"
export default function ResponsiveCategories() {
  const regexForRouteLink = (param) => {
    return param
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replaceAll("ı", "i")
      .replaceAll(" ", "")
      .split(",");
  };
  return (
    <Row className="mt-3 mb-3">
      
      {List.map((listItem) => (
        <Col sm={4} xs={4} >
      <div className="responsive-categories">

          <img
            src={listItem.url}
         
            className="category-image"
          />
         <h5>
      {listItem.name}
         </h5>
      </div>
      
        
        </Col>
      ))}
    </Row>
  );
}
