import React from "react";
import './App.css';
import { NavLink } from 'react-router-dom'




class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarExample01"
                            aria-controls="navbarExample01"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarExample01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <NavLink className='nav-link' to="/home">Home</NavLink>

                                </li>

                                <li className="nav-item mx-3">
                                    <NavLink className='nav-link' to="/Tours">Tours</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div
                    className='p-5 text-center bg-image style1'        >
                    <div className="mask" >
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-white">
                                <h1 className="mb-3">Jordan Tours Guide</h1>
                                <h4 className="mb-3">Join us today</h4>
                                <a className="btn btn-outline-light btn-lg" href="#form" role="button"
                                >For Free</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}




export default Header;


