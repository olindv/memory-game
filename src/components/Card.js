import React from 'react';
import './Card.css';

const Card = ({ itemData, handleClick, matchedIds, counter}) => {
    const {webformatURL: background, isFlipped, id} = itemData;
    // debugger
    const matched = matchedIds.indexOf(id) !== -1;    
    const clicked = (e) => {
        if (!isFlipped && counter < 2) {
            handleClick(itemData)
        }
    }

    return (
        <div className={`card__item ${isFlipped ? 'rotate' : ''} ${matched ? 'matched' : ''}`} onClick={clicked}>
            <div className="front">
                <img src={background} alt="img-front"/>
            </div>
            <div className="back">
                <img src="https://randomwordgenerator.com/img/picture-generator/57e1d1444252af14f1dc8460962e33791c3ad6e04e5074417c2f73d59f49c5_640.jpg" alt="img-back"/>
            </div>
        </div>
    )
}

export default Card;