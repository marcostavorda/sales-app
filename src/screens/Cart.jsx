import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartCard from "../components/CartCard";
import Loader from "../components/Loader";
import OrderForm from "../components/OrderForm";

function Cart() {

    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(true);
    const { cart, cartItems, fetchCartItems, emptyCart, itemsInCart, totalPrice } = useContext(CartContext);

    useEffect(() => {
        setLoading(false);
        if (cart.length > 0) {
            fetchCartItems()
        }
    }, [cart])

    return (
        <>
            <h2 className="text-center font-bold text-lg bg-emerald-50">Carrito de Compras</h2>
            <div className=" items-center justify-center">
                {loading ? <Loader /> : (<>
                    <p className="text-center">Items: {itemsInCart} - Precio Total: $ {totalPrice}</p>
                    <p className="text-center">{message}</p>
                    {itemsInCart && itemsInCart > 0 ? (<>
                        <span className="flex items-center justify-center">
                        <button className="btn" onClick={emptyCart} >Vaciar Carrito</button>
                    </span>
                    <OrderForm setMessage={setMessage} />
                    </>) : '' }
                    <ul className="flex justify-left flex-wrap gap-6">
                        {cartItems.map((item) => <CartCard key={item.id} data={item} />)}
                    </ul>
                </>)}
            </div>
        </>
    );
}

export default Cart;