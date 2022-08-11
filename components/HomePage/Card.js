import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import {Row,Col} from "react-bootstrap"
import Link from "next/link"
function CardComponent({data}) {
    const firstExample = {
        size: 25,
        value: 2.5,
        edit: false
      };
      
  return (
    <Col md={3} xs={6} className="d-flex justify-content-center">
    <div className="product-card">
        <Link href={`/product/${data.id}`}>
        <a style={{
          textDecoration: 'none',
          color: 'inherit',
        }}>

        <div className="product-image">

    <img src={data.img} alt="" />
        </div>
    <div className='product-info'>
    <span>{data.name}</span>
    </div>
        </a>
        </Link>
    <div className="stars">
<ReactStars {...firstExample} />
<span>(24)</span>
    </div>
    <span>{data.price} ₺</span>
</div>
            </Col>

  );
  }
export default CardComponent;