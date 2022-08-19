import React from 'react';
import { Container } from 'react-bootstrap';
import Cart from "../../components/Cart/Cart"

import Head from 'next/head'
const Index = () => {
  return (
    <>
     <Head>
        <title>Sepetim</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container className='mt-4'>   
        <Cart/>
      </Container>
    </>
  );
}

export default Index;
