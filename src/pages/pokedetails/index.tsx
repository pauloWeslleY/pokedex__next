import Head from "next/head";
import { HeadTitle } from "../../components/HeadTitle";
import { PokeDetailsCard } from "../../components/Card";

export default function PokemonDetails() {
   return (
      <section>
         <Head>
            <title>PokeDex</title>
         </Head>

         <HeadTitle title="Pokémon" subtitle="Details" />

         <PokeDetailsCard />
      </section>
   );
}
