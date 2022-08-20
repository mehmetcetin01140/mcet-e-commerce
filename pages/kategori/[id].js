import React, { useEffect, useContext, useState } from "react";
import { Container, Row } from "react-bootstrap";
import recommendationData from "../../json/recommendation.json";
import CardComponent from "../../components/HomePage/Card";
import { listManipulationForStaticPaths } from "../../helpers/ManipulatedListForStaticPaths";
import {
  addDoc,
  updateDoc,
  doc,
  collection,
  serverTimestamp,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../contexts/AuthContext";
import Head from "next/head";
export default function Category({ product, topCategory }) {
  const { currentUser } = useContext(AuthContext);
  const [favItems, setFavItems] = useState([]);


  useEffect(() => {
    const ref = collection(db, "fav");
    if (currentUser) {
      const q = query(ref, where("user", "==", currentUser?.email));
      const unsub = onSnapshot(q, (snap) => {
        setFavItems(
          snap.docs.map((doc) => ({
            ...doc.data(),
            favInfo: doc.data().favInfo,
            id: doc.id,
          }))
        );
      });
      return unsub;
    }
  }, [currentUser]);

  const cardLoop = () => {
    return [
      product.map((data,i) => <CardComponent data={data} key={i}/>),
      topCategory.map((data,i) => <CardComponent data={data} key={i}/>),
    ];
  };

  const card = cardLoop();

  return (
    <>
      <Head>
        <title>Kategoriler</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container className="category">
        <Row>{card}</Row>
      </Container>
    </>
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
