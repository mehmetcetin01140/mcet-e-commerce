import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from "../components/HomePage/Carousel"
import { Container } from 'react-bootstrap'
import Campaign from '../components/HomePage/Campaign'
import RecommendProduct from '../components/HomePage/Recommend-Product'
import Footer from "../components/Footer/Footer"
export default function Home() {
  return (
      <>
      <Container>
      <Carousel/>
      <Campaign/>
      <RecommendProduct/>
      </Container>
      <Footer/>
   
      </>
  )
}
