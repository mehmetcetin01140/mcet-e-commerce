import React from "react";
import ModaJson from "../../json/moda.json";
import CardComponent from "../HomePage/Card";
import { Row } from "react-bootstrap";
export default function Moda() {
  const cardLoop = () => {
    return ModaJson.map((data) => <CardComponent data={data} />);
  };
  const cards = cardLoop();
  return (
    <div>
      <Row>{cards}</Row>
    </div>
  );
}
