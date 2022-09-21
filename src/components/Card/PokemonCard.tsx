import { memo } from "react";
import { Flex, HStack } from "@chakra-ui/react";
import { HeadTitle } from "../HeadTitle";
import { Loading } from "../Loading";
import { CardItems } from "./CardItems";
import { useFetch } from "./../../hooks/useFetch";

import styles from "./cards.module.scss";

export function PokemonCard() {
   const { pokemons } = useFetch();

   return (
      <section>
         <HeadTitle title="Pokémon" subtitle="Card" />

         <HStack>
            <Flex className={styles.cards__container}>
               {pokemons.length === 0 ? (
                  <Loading />
               ) : (
                  pokemons.map((pokemon: any) => (
                     <CardItems
                        key={pokemon.data.name}
                        name={pokemon.data.name}
                        image={pokemon.data.sprites.front_default}
                        id={pokemon.data.id}
                        types={pokemon.data.types}
                     />
                  ))
               )}
            </Flex>
         </HStack>
      </section>
   );
}

export default memo(PokemonCard);
