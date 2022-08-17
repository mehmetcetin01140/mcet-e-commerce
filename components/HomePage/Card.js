import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import {Row,Col} from "react-bootstrap"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons'
function CardComponent({data}) {
  
    const setValue = Math.floor(Math.random()*5+2)
      const randomProductScore = () =>{
        const productObject= {
            size: 25,
            value: setValue,
            edit: false
          };
          return productObject
      }
      
      
  return (
    <Col  md={3} xs={6} className="product-card-container mb-5 ">
    <div className="product-card">
        <Link href={`/product/${data.id}`}>
        <a style={{
          textDecoration: 'none',
          color: 'inherit',
        }}>

        <div className="product-image">
        <div className='product-like'>
           <FontAwesomeIcon icon={faHeart} className="like-icon" id='like-icon'/>
        </div>
        <div className='product-free-shipping'>
<span>Ücretsiz Kargo</span>
        </div>
    <img src={data.img} alt="" />
        </div>
    <div className='product-info'>
    <span>{data.name}</span>
    </div>
        </a>
        </Link>
    <div className="stars">
<ReactStars {...randomProductScore()} />
<span>(24)</span>
    </div>
    <span>{data.price} ₺</span>
</div>
            </Col>

  );
  }
export default CardComponent;