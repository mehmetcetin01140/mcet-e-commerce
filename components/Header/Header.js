import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderBottom from "./Header-Bottom";
import SearchInput from "./Search-Input";
import Offcanvas from "./Off-Canvas";
export default function Header() {
  return (
    <div className="header-container">
      <Container>
        <div className="header-top">
          <Offcanvas />
          <SearchInput />
        </div>
      </Container>
      <div className="header-bottom">
        <HeaderBottom />
      </div>
    </div>
  );
}
