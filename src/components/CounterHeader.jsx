import { useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import LogoImage from "./LogoImage";
import addImage from '../images/add-cart.png';
import removeImage from '../images/remove-cart.png';
import cancelImage from '../images/cancel.png';

export default function CounterHeader({ id, count, setCount }) {

    const { addItem, substractItem, removeItem, itemQuantity } = useContext(CartContext);

    useEffect(() => {
        setCount(itemQuantity(id));
    }, []);

    const addElement = () => {
        addItem(id, 1);
        setCount((prev) => prev + 1);
    }

    const removeElement = () => {
        if(count - 1 >= 0){
            setCount((prev) => prev - 1);
            substractItem(id, 1);
        }
    }

    const cancelElement = () => {
        setCount(0);
        removeItem(id);
    }

    return (
        <span className="flex border">
            <div className="flex-1" >
                <div className="flex" >
                    <div className="btn btn-ghost" onClick={cancelElement} >
                        <LogoImage imageSource={cancelImage} altText={"Cancel"} />
                    </div>
                    <span className="btn btn-ghost" onClick={removeElement} >
                        <LogoImage imageSource={removeImage} altText={"Remove-Cart"} />
                    </span>
                </div>

            </div>

            <div className="flex items-center justify-center">
                <span className="text-center">{count}</span>
            </div>

            <div className="flex-none" >
                <span className="btn btn-ghost" onClick={addElement} >
                    <LogoImage imageSource={addImage} altText={"Add-Cart"} />
                </span>
            </div>
        </span>
    )
}