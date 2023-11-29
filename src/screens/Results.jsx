import { useGetFilteredCollection } from "../hooks/useGetFilteredCollection";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Loader from "../components/Loader";
import ListContainer from "../components/ListContainer";


function Results(){

    const {findText, findPriceFrom, findPriceTo} = useContext(CartContext);

    const {items, loading} = useGetFilteredCollection(null, null);

    const filteredItems = !items ? [] : items.filter((item) => { return (
        ((findText ? (item.name.toLowerCase().includes(findText.trim().toLowerCase())) : true) ||
        (findText ? (item.description.toLowerCase().includes(findText.trim().toLowerCase())) : true)) &&
        (findPriceFrom ? item.price >= findPriceFrom : true) &&
        (findPriceTo ? item.price <= findPriceTo : true)); });

    return(
        <><h2 className="text-center font-bold text-lg bg-emerald-50">Resultados encontrados</h2>
        { !findText && !findPriceFrom && !findPriceTo ? 'Debe ingresar algún criterio de Búsqueda' :
        ( loading ? <Loader /> : <ListContainer items={filteredItems} /> )}</>
    )
}
export default Results;