import "./CharacterCard.css";

import React from 'react'

const CharacterCard = ({ char }) => {
    return (
        <div className="character-card" key={char.id} >
            <div className="img-container">
                <img alt={char.name} src={char.image} />      
            </div>      
            <div className="character-info">
                <p>{char.name}</p>                
            </div>
        </div>
    )
}

export default CharacterCard