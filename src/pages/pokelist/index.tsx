import Head from "next/head";
import { HeadTitle } from "../../components/HeadTitle";
import { Card } from "../../components/Card";

export default function PokemonList() {
   return (
      <section>
         <Head>
            <title>PokeDex</title>
         </Head>

         <HeadTitle title="Pokémon" subtitle="List" />

         <Card />
      </section>
   );
}
