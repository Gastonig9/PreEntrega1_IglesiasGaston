import React from "react";
import "./Navbar.css"

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={props.logo} alt="Logo" />
            </div>
            <ul className="navbar__menu">
                <a href="#"><li>{props.liHome}</li></a>
                <a href="#"><li>{props.liAbout}</li></a>
                <a href="#"><li>{props.liContact}</li></a>
            </ul>
            {props.children}
        </nav>
    );
}
