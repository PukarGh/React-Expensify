import React from "react";
import {NavLink} from "react-router-dom";

const Item = ({id, title, description, amount}) => (
    <div style={{marginBottom: 10}}>
        <hr/>
        <h3>{title}</h3>
        <b>Description</b> : {description} |
        <b> Amount</b> : {amount}

        <NavLink to={"/edit/" + id} activeClassName="is-active">Edit</NavLink>
        <hr/>
    </div>
);

export default Item;