import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"
import { PiAirplaneLight } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";

export default function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative bg-gray-100">
                <div className=" max-w-7xl px-18 lg:px-8 container flex flex-wrap items-center justify-between text-[#1c89e3] pt-5">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start w-2">
                        <Link
                            className="flex text-sm text-center font-bold leading-relaxed py-2 whitespace-nowrap uppercase font-serif"
                            to="/"
                        >
                            <PiAirplaneLight className="h-7 w-7 mr-2" />  AirFlight
                        </Link>

                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex justify-center items-center flex-col lg:flex-row list-none lg:ml-auto center">
                            <li className="nav-item">
                                <Link
                                    className="px-1 py-1.5 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    to="/Register"
                                >
                                    Đăng kí
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-1 py-1.5 before:content-['|'] flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    to="/Login"
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