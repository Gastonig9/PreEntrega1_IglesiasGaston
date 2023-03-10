import React from "react";
import "./CardWidget.css";

export default function CarritoWidget(props) {
  return (
    <div className="navbar__cart">
      <a href="#">
        <img src={props.carrito} alt="Cart" className="cart-img" />
        <span className="notification">{props.notification}</span>

      </a>
    </div>
  );
}
