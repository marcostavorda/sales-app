import { useContext } from "react";
import LogoImage from "./LogoImage";
import { CartContext } from "../context/CartContext";

import cartImage from '../images/shopping_cart.png';

function CartLogo() {

    const {itemsInCart} = useContext(CartContext)

    return (
        <div className='flex gap-2'>
            <label tabIndex={0} className="btn btn-ghost">
                <LogoImage imageSource={cartImage} altText={"Cart"} />
                {itemsInCart}
            </label>
        </div>
    )
}
export default CartLogo;