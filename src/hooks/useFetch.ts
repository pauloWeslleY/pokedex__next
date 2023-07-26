import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch() {
   const [pokemons, setPokemons] = useState<any>([]);

   function getPokemon() {
      let endpoints = [];
      for (let i = 1; i < 486; i++) {
         endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
      }
      axios
         .all(endpoints.map((endpoint) => axios.get(endpoint)))
         .then((res) => setPokemons(res));
   }

   useEffect(() => {
      getPokemon();
   }, []);

   return { pokemons };
}
