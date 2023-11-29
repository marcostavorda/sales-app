import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import { NavLink } from 'react-router-dom';
import { useGetFilteredCollection } from '../hooks/useGetFilteredCollection';
import ListContainer from '../components/ListContainer';

function Home() {

    const limit = 5;
    const [itemsPC, setItemsPC] = useState([]);
    let { items: homePC } = useGetFilteredCollection('PC', limit);
    const [itemsNotebooks, setItemsNotebooks] = useState([]);
    let { items: homeNotebook } = useGetFilteredCollection('Notebook', limit);
    const [itemsProcessors, setItemsProcessors] = useState([]);
    let { items: homeProcessor } = useGetFilteredCollection('Processor', limit);
    const [itemsMotherboards, setItemsMotherboards] = useState([]);
    let { items: homeMotherboard } = useGetFilteredCollection('Motherboard', limit);
    const [itemsRAM, setItemsRAM] = useState([]);
    let { items: homeRAM } = useGetFilteredCollection('RAM', limit);

    useEffect(() => {
        setItemsPC(homePC);
        setItemsNotebooks(homeNotebook);
        setItemsProcessors(homeProcessor);
        setItemsMotherboards(homeMotherboard);
        setItemsRAM(homeRAM);
    }, [homePC, homeNotebook, homeProcessor, homeMotherboard, homeRAM]);


    return (
        <>
            <NavLink to="/category/PC" >
                <h2 className='text-center font-bold text-lg bg-emerald-50'>PC</h2>
            </NavLink>
            {itemsPC && itemsPC.length > 0 ? <ListContainer items={itemsPC} /> : <Loader />}
            <NavLink to="/category/Notebook" >
                <h2 className='text-center font-bold text-lg bg-emerald-50'>Notebooks</h2>
            </NavLink>
            {itemsNotebooks && itemsNotebooks.length > 0 ? <ListContainer items={itemsNotebooks} /> : <Loader />}
            <NavLink to="/category/Processor" >
                <h2 className='text-center font-bold text-lg bg-emerald-50'>Procesadores</h2>
                {itemsProcessors && itemsProcessors.length > 0 ? <ListContainer items={itemsProcessors} /> : <Loader />}
            </NavLink>
            <NavLink to="/category/Motherboard" >
                <h2 className='text-center font-bold text-lg bg-emerald-50'>Placas Base</h2>
            </NavLink>
            {itemsMotherboards && itemsMotherboards.length > 0 ? <ListContainer items={itemsMotherboards} /> : <Loader />}
            <NavLink to="/category/RAM" >
                <h2 className='text-center font-bold text-lg bg-emerald-50'>Memorias RAM</h2>
            </NavLink>
            {itemsRAM && itemsRAM.length > 0 ? <ListContainer items={itemsRAM} /> : <Loader />}
        </>
    )
}

export default Home;