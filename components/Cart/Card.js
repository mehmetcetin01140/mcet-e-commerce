import React, { useEffect, useState, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  addDoc,
  updateDoc,
  doc,
  collection,
  serverTimestamp,
  query,
  where,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
export default function Card({ cartData }) {
  const increaseOrDecreaseQuantity = (id, increaseOrDecrease) => {
    const ref = collection(db, "cart");
    const findProduct = cartData.find((elem) => elem.product.id === id);
    if (findProduct) {
      const refe = doc(db, "cart", findProduct.id);
      const newQuantity = {
        product: {
          ...findProduct.product,
          quantity: (findProduct.product.quantity += increaseOrDecrease),
        },
      };
      updateDoc(refe, newQuantity);
    } else {
      addDoc(ref, {
        findProduct: { ...findProduct.product, quantity: 1 },
        user: currentUser.email,
      });
    }
  };
  return (
    <Row className="card-container">
      {cartData.map((item, index) => (
        <>
          <Col lg={8} md={12} className="mb-3" key={index}>
            <Col lg={10} md={12}>
              <div className="card-items">
                <img src={item.product?.img} alt={index} />

                <div className="card-name-and-quantity">
                  <h5>{item.product?.name}</h5>
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() =>
                        increaseOrDecreaseQuantity(item.product?.id, 1)
                      }
                    >
                      +{" "}
                    </button>
                    <span>{item.product?.quantity}</span>
                    <button
                      onClick={() =>
                        increaseOrDecreaseQuantity(item.product?.id, item.product.quantity>1 ?-1 :0)
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-icon">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => deleteDoc(doc(db, "cart", item?.id))}
                  fontSize={20}
                  className={"card-icon-item"}
                />
              </div>
            </Col>
          </Col>
          <Col lg={2} md={12} className="card-price-and-quantity">
            <h5>Fiyat : {item.product?.price} TL</h5>
            Ücretsiz Kargo
            <img src={"/yurtici.svg"} alt="kargo" />
          </Col>

          <hr />
        </>
      ))}
    </Row>
  );
}
