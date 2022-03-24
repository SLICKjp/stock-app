import React from 'react';
import './items.css';


const Item = (props) => {
    return (
        <>
           <div className="item-container">
            <img src={props.img} className="item-image" alt=""/>
            <h3 className="items-heading">{props.heading}</h3>
            <p className="items-description">
                {props.description}
            </p>
           </div>
        </>
    )
}

export default Item
