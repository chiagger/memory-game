import React from 'react';

const Card = (props) => {
    const { cardsArray } = props;
    return (
        <ul>
            {cardsArray.map((card) => {
                return (
                    <div className="card">
                        <div className="img">
                            <img src={card.img} alt="this character's pic"></img>
                        </div>
                        <div className="desc">{card.desc}</div>
                    </div>
                );
            })}
        </ul>
    );
}

export default Card