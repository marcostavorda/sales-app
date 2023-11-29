import { NavLink } from "react-router-dom";

import Logo from './Logo';
import imageSales from '../images/compu-sales.jpg';

function Footer() {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
                <NavLink to={'/'}>
                    <Logo imageSource={imageSales} altText={"Sales-App"} />
                </NavLink>
                <p>Marcos Tavorda - © 2023</p>
            </aside>
        </footer>
    )
}

export default Footer