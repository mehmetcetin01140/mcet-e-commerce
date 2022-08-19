import { createContext, useEffect, useState, useContext } from "react";
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
import { db } from "../firebase";
import { AuthContext } from "./AuthContext";
export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const { currentUser } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
