import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import recommendationData from "../../json/recommendation.json";
import CardComponent from "../../components/HomePage/Card";
import { listManipulationForStaticPaths } from "../../helpers/ManipulatedListForStaticPaths";
import { List } from "../../components/Header/Category-List";
export default function Category({ product, topCategory }) {
  console.log(listManipulationForStaticPaths());

  const cardLoop = () => {
    return [
      product.map((data) => <CardComponent data={data} />),

      topCategory.map((data) => <CardComponent data={data} />),
    ];
  };

  const card = cardLoop();

  return (
    <Container className="category">
      <Row>{card}</Row>
    </Container>
  );
}
export const getStaticProps = async ({ params }) => {
  const products = recommendationData.filter(
    (category) => category.category === params.id
  );
  const topCategory = recommendationData.filter(
    (category) => category.topCategory === params.id
  );
  return {
    props: {
      product: products,
      topCategory: topCategory,
    },
  };
};
export const getStaticPaths = async () => {
  const paths = listManipulationForStaticPaths().map((product) => ({
    params: {
      id: product.toLowerCase(),
    },
  }));
  return { paths, fallback: false };
};
