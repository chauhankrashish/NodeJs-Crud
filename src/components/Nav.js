import React from "react";
import "../App.css"
import { Link } from "react-router-dom";


function Nav() {
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/logout">logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
            </ul>
        </div>
    )
}
export default Nav;