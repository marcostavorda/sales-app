import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function DetailCard({ data }) {

    const [count, setCount] = useState(1);
    const { addItem } = useContext(CartContext);

    const handleCount = (value) => {
        if ((count + value) >= 1) {
            setCount((prev) => prev + value);
        }
    }

    const addElement = () => {
        addItem(data.id, count);
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={data.imageUrl} alt={data.id} /></figure>
            <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>$ {data.price}</p>
                <p>{data.stock && data.stock > 0 ? `Stock: ${data.stock} unidades` : 'Sin stock'}</p>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleCount(-1)} className="btn ">-</button>
                    {count}
                    <button onClick={() => handleCount(1)} className="btn ">+</button>
                    <button className="btn " onClick={addElement}>
                        Agregar al Carrito
                    </button>

                    <Link to={`/category/${data.category}`} >
                        <button className="btn ">Ver más Productos</button>
                    </Link>
                    <button className="btn ">
                        <Link to={`/cart`} >Ver Compra</Link>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default DetailCard;