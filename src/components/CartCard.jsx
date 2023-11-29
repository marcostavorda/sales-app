import { useState } from "react";
import CounterHeader from "./CounterHeader";
import CartData from "./CartData";

export default function CartCard({data}){

    const [count, setCount] = useState(0);

    return (
        <div className="card card-side w-60 bg-base-100 shadow-xl">
            <div className="grid grid-flow-row auto-rows-max shadow-xl">
                <CounterHeader id={data.id} count={count} setCount={setCount} />
                <CartData data={data} />
            </div>
        </div>
    );
}