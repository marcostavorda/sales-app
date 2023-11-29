import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, doc, getDoc, query, where, limit } from 'firebase/firestore';
import ItemCard from "../components/ItemCard";
import Filter from "../components/Filter";
import Loader from "../components/Loader";
import ListContainer from "../components/ListContainer";
import { useGetFilteredCollection } from "../hooks/useGetFilteredCollection";

function Category() {

    const [findText, setFindText] = useState('');

    const { idCategory } = useParams();

    const { items, loading, error } = useGetFilteredCollection(idCategory, null);

    let categoryName = idCategory;
    switch (idCategory) {
        case 'PC':
            categoryName = 'PC - Computadoras Personales';
            break;
        case 'Notebook':
            categoryName = 'Notebooks - Computadoras Portátiles';
            break;
        case 'Processor':
            categoryName = 'Procesadores';
            break;
        case 'Motherboard':
            categoryName = 'Placas Base';
            break;
        case 'RAM':
            categoryName = 'Memorias RAM';
            break;
    };


    useEffect(() => {
        setFindText('');
    }, [idCategory]);

    const filteredItems = !items ? [] : items.filter((item) => item.name ? (item.name.toLowerCase().includes(findText.trim().toLowerCase())) : '');

    return (
        <>
            <h2 className="text-center font-bold text-lg bg-emerald-50">{categoryName}</h2>
            <div className="items-center justify-center">
                {loading ? <Loader /> : (<>
                    <Filter findText={findText} setFindText={setFindText} />
                    <ListContainer items={filteredItems} />
                </>)}
            </div>
        </>
    );
}

export default Category;