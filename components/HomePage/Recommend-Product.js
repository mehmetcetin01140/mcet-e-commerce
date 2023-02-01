import React from "react";
import { Row, Col } from "react-bootstrap";
import CardComponent from "./Card";
import recommendationData from "../../json/recommendation.json";
export const products = recommendationData
  .slice(0, 4)
  .map((data, i) => <CardComponent data={data} key={i} />);
const forWomen = recommendationData
  .slice(28, 36)
  .map((data, i) => <CardComponent data={data} key={i} />);
const phones = recommendationData
  .slice(40, 48)
  .map((data, i) => <CardComponent data={data} key={i} />);
const firniture = recommendationData
  .slice(64, 72)
  .map((data, i) => <CardComponent data={data} key={i} />);
export default function RecommendProduct() {
  const recommended = [products, forWomen, phones, firniture];

  const descriptions = [
    " İlgini Çekebilir",
    "Kadınlara Özel",
    "Telefon",
    "Mobilya",
  ];
  return (
    <div>
      {recommended.map((product, i) => (
        <>
          <Row>
            <h4 className="mt-5 mb-5">{descriptions[i]}</h4>
            {product}
          </Row>
        </>
      ))}
    </div>
  );
}
