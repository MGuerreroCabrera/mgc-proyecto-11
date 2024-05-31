import { useEffect } from "react";
import "./Character.css";
import React from 'react'
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Character = () => { 
  // Recoger el id que llega por parámetro
  const { id } = useParams();
  // Crear el estado personaje
  const [character, setCharacter] = useState();

  const fetchCharacter = async (id) => {
    try {
      const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
      const data = await res.json();
      setCharacter(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCharacter(id);
  }, []) 

  return (
    <div className="char-container">
      <article>
        <img src={character?.image} alt={character?.name} />
        <div className="info-character">
          <ul>
            <li><h2 className="name">{character?.name}</h2></li>
            <li><span className="txt-orange">Ki </span><span className="txt-white">{character?.ki}</span></li>
            <li><span className="txt-orange">Ki Máximo </span><span className="txt-white">{character?.maxKi}</span></li>
            <li><span className="txt-orange">Origen </span><span className="txt-white">{character?.race}</span></li>
            <li>
              <Link to="/">
                <p className="tracking-in-expand">Volver</p>
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  )
}

export default Character