import type { NextPage } from "next";
import Head from "next/head";

import axios from "axios";

import { PokemonCard } from "../components/Card";

const Home: NextPage = () => {
   return (
      <section>
         <Head>
            <title>PokeDex</title>
         </Head>

         <PokemonCard />
      </section>
   );
};

export async function getServerSideProps() {
   const endpoints = [];

   for (let i = 1; i <= 20; i++) {
      endpoints.push(
         axios
            .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then((response) => response.data)
      );
   }

   const response = await Promise.all(endpoints);

   console.log("Res: ", response);

   return {
      props: {
         pokemon: response,
      },
   };
}

export default Home;
