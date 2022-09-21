import Head from "next/head";
import { HeadTitle } from "../../components/HeadTitle";
import { Region } from "../../components/Region";

export default function PokeRegion() {
   return (
      <section>
         <Head>
            <title>PokeDex</title>
         </Head>

         <HeadTitle title="Pokémon" subtitle="Region" />

         <Region />
      </section>
   );
}
