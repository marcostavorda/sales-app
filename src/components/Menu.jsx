import { Link } from "react-router-dom";

function Menu(){
    return(
        <ul className="flex gap-4 px-6">
            <Link to="/">
                <li className="btn">Home</li>
            </Link>
            <Link to="/category/PC">
                <li className="btn">PC</li>
            </Link>
            <Link to="/category/Notebook">
                <li className="btn">Notebooks</li>
            </Link>
            <Link to="/category/Processor">
                <li className="btn">Procesadores</li>
            </Link>
            <Link to="/category/Motherboard">
                <li className="btn">Placas Base</li>
            </Link>
            <Link to="/category/RAM">
                <li className="btn">Memorias RAM</li>
            </Link>
        </ul>
    )
}

export default Menu