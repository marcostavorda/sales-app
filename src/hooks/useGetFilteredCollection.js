import { useState, useEffect, useContext } from 'react';
import { getFirestore, getDocs, collection, doc, getDoc, query, where, limit } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';

export function useGetFilteredCollection(category, limitSize) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const {reloadSearch} = useContext(CartContext);

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()

        const constraints = [];
        if (category){
            constraints.push(where('category', '==', category));
        }
        if (limitSize) {
            constraints.push(limit(limitSize));
        }
        let queryFilter = query(collection(db, 'items'), ...constraints);

        getDocs(queryFilter)
            .then(res => {
                if (res.size === 0) {
                    setError('No se encontraron elementos');
                }
                setItems(res.docs.map(doc => { return { id: doc.id, ...doc.data() } }))
            })
            .catch((err) => setError('Error al buscar items ' + err))
            .finally(() => setLoading(false));


    }, [category, limitSize, reloadSearch]);

    return { items, error, loading };
}
