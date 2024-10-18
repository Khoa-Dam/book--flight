import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"
export default function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 container flex flex-wrap items-center justify-between text-white pt-5">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <img></img>
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase font-serif"
                            to="/"
                        >
                            <img src={Logo} className=""></img> AirFlight
                        </Link>

                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                                    to="/Register"
                                >
                                    Đăng kí
                                </Link>
                            </li>
                            |
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                                    to="/Account"
                                >
                                    Đăng nhập
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}