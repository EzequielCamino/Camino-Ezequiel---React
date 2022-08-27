import React from 'react'
import { useEffect } from 'react';

function FetchPokeApi() {
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
            .then((response) => response.json())  
            .then((data) => console.log(data));
      });
    return (
        <>
        </>
    )
}

export default FetchPokeApi