import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import Menu from "./Menu";
import CartLogo from "./CartLogo";
import Search from "./Search";

import salesImage from '../images/compu-sales.jpg';
import searchImage from '../images/lupa.png';

function Navbar() {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <NavLink to={'/'}>
                        <Logo imageSource={salesImage} altText={"Compu Sales"} />
                    </NavLink>
                    <NavLink to={'/'}>
                        <div className="btn btn-ghost normal-case text-xl">Compu Sales</div>
                    </NavLink>
                    <Menu />
                </div>
                <div className="flex-none gap-2">
                    <NavLink to={'/cart'}>
                        <CartLogo />
                    </NavLink>
                    <div onClick={() => setShowSearch(!showSearch)}>
                        <Logo imageSource={searchImage} altText={"Search"} />
                    </div>
                </div>
            </div>
            {showSearch && <Search />}
        </>
    )
}

export default Navbar;