import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch() {
   const [pokemons, setPokemons] = useState<any>([]);

   useEffect(() => {
      getPokemon();
   }, []);

   function getPokemon() {
      let endpoints = [];
      for (let i = 1; i < 252; i++) {
         endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
      }
      axios
         .all(endpoints.map((endpoint) => axios.get(endpoint)))
         .then((res) => setPokemons(res));
   }

   return {pokemons}
}
