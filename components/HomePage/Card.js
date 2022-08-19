import { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
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
import { AuthContext } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
function CardComponent({ data, fav }) {
  const [favItems, setFavItems] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();
  const setValue = Math.floor(Math.random() * 5 + 2);
  const randomProductScore = () => {
    const productObject = {
      size: 25,
      value: setValue,
      edit: false,
    };
    return productObject;
  };
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

  const addToFav = (id) => {
    const ref = collection(db, "fav");
    const findProduct = favItems.find((elem) => elem.favInfo.id === id);
    if (currentUser) {
      if (findProduct) {
        deleteDoc(doc(db, "fav", findProduct.id));
      } else {
        addDoc(ref, {
          favInfo: { isFav: true, id: id },
          user: currentUser.email,
        });
      }
    } else {
      router.push("/sepetim");
    }
  };
  const favCheck = (id) => {
    const matched = favItems.find((fav) => fav.favInfo.id === id);
    if (matched && matched.favInfo.isFav == true) {
      return "#ea222f";
    }
  };

  return (
    <Col md={3} xs={6} className="product-card-container mb-5 ">
      <div className="product-card">
        <div className="product-image">
          <div
            className="product-like"
            onClick={() => addToFav(data.id)}
            style={{ backgroundColor: favCheck(data.id) }}
          >
            <FontAwesomeIcon
              icon={faHeart}
              color={favCheck(data.id) == "#ea222f" ? "white" : null}
              className="like-icon"
              id="like-icon"
            />
          </div>
          <div className="product-free-shipping">
            <span>Ücretsiz Kargo</span>
          </div>
          <Link href={`/product/${data.id}`}>
            <a
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <img src={data.img} alt="" />
            </a>
          </Link>
        </div>
        <div className="product-info">
          <Link href={`/product/${data.id}`}>
            <span>{data.name}</span>
          </Link>
        </div>
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
