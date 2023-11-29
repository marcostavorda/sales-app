import { NavLink } from "react-router-dom";

function ItemData({data}) {
    return (
        <NavLink to={`/detail/${data.id}`}>
            <figure><img src={data.imageUrl} alt={data.id} /></figure>
            <div className="card-body">
                <h3 className="card-title">{data.name}</h3>
                <p>$ {data.price}</p>
            </div>
        </NavLink >
    )
}
export default ItemData;