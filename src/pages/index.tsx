import type { NextPage } from "next";
import Head from "next/head";

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

export default Home;
