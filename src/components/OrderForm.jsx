import React, { useContext, useRef } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";

function OrderForm({ setMessage }) {
  const { cartItems, totalPrice, emptyCart } = useContext(CartContext)


  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getFirestore();

    const collectionRef = collection(db, "orders");

    const order = {
      userName: userNameRef.current.value,
      userEmail: userEmailRef.current.value,
      items: cartItems,
      totalPrice: totalPrice
    }

    addDoc(collectionRef, order)
      .then((res) => {
        setMessage(`La orden ha sido enviada con éxito, su orden es: ${res.id}`)
      })
      .catch((error) => console.log('Error al guardar ' + error))
      .finally(() => emptyCart())
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center"
      >
        <input
          ref={userNameRef}
          type="text"
          placeholder="Nombre completo"
          className="input input-bordered w-[400px] text-black"
          required
        />
        <input
          ref={userEmailRef}
          type="email"
          placeholder="Email"
          className="input input-bordered w-[400px] text-black"
          required
        />
        <button className="btn" type="submit">Enviar orden</button>
      </form>
    </div>
  );
}

export default OrderForm;
