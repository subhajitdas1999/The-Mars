import React from 'react';
import "./Item.css";

function Item(props) {
    return (
        <div className="item">
            <h2 className="item__heading">{props.item.name}</h2>
            <p className="item__des">{props.item.description}</p>

            
        </div>
    )
}

export default Item;
