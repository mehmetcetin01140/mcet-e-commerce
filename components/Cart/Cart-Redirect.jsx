import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Login from "../LoginSignup/login";
export default function CartRedirect() {
  return (
    <Container className="cart-redirect-container">
      <Row>
        <Col lg={6} md={12}>
          <div className="cart-redirect-left-side">
            <img
              src="https://pedamed.com.tr/wp-content/uploads/2019/12/alisveris-hastaligi-1.png"
              alt=""
            />
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div className="cart-redirect-right-side">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />

            <h5>Alışveriş sepetine erişmek için lütfen giriş yapınız.</h5>
            <Login />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
