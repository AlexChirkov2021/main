import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/">
                    Main
                </Link>

                <Link className="nav-item nav-link" to="/login">
                    Login
                </Link>

                <Link className="nav-item nav-link" to="/users">
                    Users
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
