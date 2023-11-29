import { useState } from "react";
import ItemData from "./ItemData";
import CounterHeader from "./CounterHeader";

function ItemCard({ data }) {

    const [count, setCount] = useState(0);

    return (
        <div className="card card-side w-60 bg-base-100 shadow-xl">
            <div className="grid grid-flow-row auto-rows-max shadow-xl">
                <CounterHeader id={data.id} count={count} setCount={setCount} />
                <ItemData data={data} />
            </div>
        </div>
    );
}

export default ItemCard;