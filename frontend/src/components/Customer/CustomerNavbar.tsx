import { Link, Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import { MdHome, MdOutlineShoppingBag, MdShoppingCart } from "react-icons/md";
import { SlArrowUpCircle } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";

export const CustomerNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="vh-100 w-100 d-flex flex-column">
            {/* Navbar header */}
            <nav className="navbar navbar-expand-md shadow px-3 py-3 py-sm-3">
                <div className="container-fluid">
                    {/* Logo */}
                    <Link to="/" className="navbar-brand d-flex align-items-center gap-2 text-decoration-none">
                        <SlArrowUpCircle className="fs-4 text-primary" />
                        <span className="fw-bold text-primary">E Cura's</span>
                    </Link>

                
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                 
                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                        <ul className="navbar-nav ms-auto d-flex gap-3 align-items-center">
                            <li className="nav-item ">
                                <Link to="/" className="nav-link d-flex align-items-center gap-1 fw-bold text-primary">
                                    <MdHome className="fs-5" /> <span>Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link d-flex align-items-center gap-1 fw-bold">
                                    <MdShoppingCart className="fs-5" /> <span>Cart</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/myorders" className="nav-link d-flex align-items-center gap-1 fw-bold">
                                    <MdOutlineShoppingBag className="fs-5" /> <span>Orders</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link d-flex align-items-center gap-1 fw-bold">
                                    <FaRegUserCircle className="fs-5" /> <span>Profile</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    );
};
