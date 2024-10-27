import { AiOutlineClose } from "react-icons/ai"; 
import { CgMenuLeftAlt } from "react-icons/cg";
import Link from "../Link/Link";
import { useState } from "react";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
    ];

    return (
        <nav className="p-6 bg-yellow-200">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open? <AiOutlineClose className="text-3xl font-bold"/>
                     : <CgMenuLeftAlt className="text-3xl font-bold" />
                }
                
            </div>
            <ul className={`md:flex absolute md:static duration-1000 bg-yellow-200 px-6 
                ${open? 'top-16' : '-top-60'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;