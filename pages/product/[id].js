import ProductData from "../../json/recommendation.json";
import { Container, Row, Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import RecommendProduct from "../../components/HomePage/Recommend-Product";
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
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Head from "next/head";
import { products } from "../../components/HomePage/Recommend-Product";
import { useRouter } from "next/router";
export default function Product({ product }) {
  const [cartItems, setCartItems] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const firstExample = {
    size: 30,
    value: 2.5,
    edit: false,
  };
  const router = useRouter();
  useEffect(() => {
    const ref = collection(db, "cart");
    if (currentUser) {
      const q = query(ref, where("user", "==", currentUser?.email));
      const unsub = onSnapshot(q, (snap) => {
        setCartItems(
          snap.docs.map((doc) => ({
            ...doc.data(),
            product: doc.data().product,
            id: doc.id,
          }))
        );
      });
      return unsub;
    }
  }, [currentUser]);
  const addToCart = (id) => {
    const ref = collection(db, "cart");
    const findProduct = cartItems.find((elem) => elem.product.id === id);
    if (currentUser) {
      if (findProduct) {
        const refe = doc(db, "cart", findProduct.id);
        const newQuantity = {
          product: {
            ...product,
            quantity: (findProduct.product.quantity += 1),
            price: discountedPrice,
          },
        };
        updateDoc(refe, newQuantity);
      } else {
        addDoc(ref, {
          product: { ...product, quantity: 1, price: discountedPrice },
          user: currentUser.email,
        });
      }
    } else {
      router.push("/sepetim");
    }
  };
  const discountCalculator = () => {
    const replacedPrice = Number(product.price.replace(".", ""));
    const calculator = replacedPrice * (0.1).toFixed(2);
    const result = replacedPrice - calculator;

    return result;
  };
  const discountedPrice = discountCalculator();
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                <h5>Sepette</h5>
                <h3>{discountedPrice} ₺</h3>
              </div>

              <button onClick={() => addToCart(product.id)}>Sepete Ekle</button>
            </div>
            <div className="product-content-description">
              <h5>Açıklama</h5>
              {product.desc}
            </div>
            <div className="free-shipping">
              <img src="/ucretsizkargo.png" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="product-content-footer">
        <div className="product-return">
          <img src="/kolayiade.png" />
        </div>
        <h4>İlgini Çekebilir</h4>
        <Row>{products}</Row>
      </Container>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const products = ProductData.filter(
    (product) => product.id.toString() === params.id
  );
  return {
    props: {
      product: products[0],
    },
  };
};
export const getStaticPaths = async () => {
  const paths = ProductData.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
};
