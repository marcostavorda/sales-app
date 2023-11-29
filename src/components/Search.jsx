import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Search() {

    const {findText, findPriceFrom, findPriceTo, setFindText, setFindPriceFrom, setFindPriceTo} = useContext(CartContext);

    const handleClean = () => {
        setFindText('');
        setFindPriceFrom(0);
        setFindPriceTo(0);
        setFindText(null);
        setFindPriceFrom(null);
        setFindPriceTo(null);
    }

    return (
        <div className="flex items-center justify-center">
            <form onSubmit={(e) => e.preventDefault()} className="flex">
                Texto
                <input
                    type="text"
                    placeholder="Nombre o Descripción"
                    className="input input-bordered w-24 md:w-auto"
                    onChange={(e) => setFindText(e.target.value)}
                    value={findText}
                />
                Precio Desde
                <input
                    type="number"
                    placeholder="Desde"
                    className="input input-bordered w-24 md:w-auto"
                    onChange={(e) => setFindPriceFrom(e.target.value)}
                    value={findPriceFrom}
                />
                Precio Hasta
                <input
                    type="number"
                    placeholder="Hasta"
                    className="input input-bordered w-24 md:w-auto"
                    onChange={(e) => setFindPriceTo(e.target.value)}
                    value={findPriceTo}
                />
                <NavLink to={`/results`}>
                    <button className="btn " >Buscar</button>
                </NavLink>
                <button className="btn " type="Reset" onClick={handleClean} >Limpiar</button>
            </form>
        </div>
    )
}
export default Search;