import { Link } from "react-router-dom";

function CartData({data}) {
    return (
        <Link to={`/detail/${data.id}`}>
            <figure><img src={data.imageUrl} alt={data.id} /></figure>
            <div className="card-body">
                <h3 className="card-title">{data.name}</h3>
                <p>$ {data.price}</p>
                <p>Subtotal</p>
                <p>$ {data.quantityPrice}</p>
            </div>
        </Link >
    )
}
export default CartData;