import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <div>
        <nav>
            <h2>Header</h2>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> |
            <NavLink to="/create" activeClassName="is-active">Create</NavLink> |
            <NavLink to="/help" activeClassName="is-active">Help</NavLink> |
        </nav>
    </div>
)

export default Header;