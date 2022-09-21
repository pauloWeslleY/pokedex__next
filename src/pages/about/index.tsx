import Head from "next/head";
import { AboutContent } from "../../components/About";
import { HeadTitle } from "../../components/HeadTitle";

export default function About() {
   return (
      <section>
         <Head>
            <title>PokeDex</title>
         </Head>

         <HeadTitle title="About" subtitle="Us" />

         <AboutContent
            name="Created by Weslley de Lima"
            developer="Developer Front-End"
         />
      </section>
   );
}
