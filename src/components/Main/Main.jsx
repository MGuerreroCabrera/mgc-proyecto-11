import "./Main.css";
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from "../Loading/Loading";
import CharacterCard from "../CharacterCard/CharacterCard";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

const Main = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(1);

    // Función asíncrona para obtener los personajes
    const fetchCharacters = async () => {
        try {
            // Poner estado loading a true
            setLoading(true);
            setCharacters([]);
            // Hacer el fetch a la API y guardar los datos en el objeto response
            const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=10`);
            // Pasar la respuesta obtenida a json
            const data = await response.json();
            // Cambiar estado characters rellenándolo con los datos de la respuesta pasados a json
            setCharacters(data.items); 
            // Obtener el número total de páginas
            setLimit(data.meta.totalPages);
            // Cambiar estado de Loading
            setLoading(false);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    // useEffect para llamar a fetchCharacters al montar el componente
    useEffect(() => {
        fetchCharacters();
    }, [page]); 

    return (
        <main>
        {loading && <Loading/>}
        {characters.map((char) => (           
            <Link key={char.id} to={`/character/${char.id}`}>
                <CharacterCard char={char}/>
            </Link>
            ))}
            <Pagination page={page} setPage={setPage} limit={limit}/>
        </main>
    );
}

export default Main