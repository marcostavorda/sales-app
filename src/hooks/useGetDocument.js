import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export function useGetDocument(id) {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()

        const itemRef = doc(db, 'items', id)

        getDoc(itemRef)
            .then(res => {
                if (res.exists) {
                    setData({ id: res.id, ...res.data() })
                }
            })
            .catch((err) => setError('Error al buscar documento ' + err))
            .finally(() => setLoading(false))
    }, [id]);

    return { data, error, loading };
}
