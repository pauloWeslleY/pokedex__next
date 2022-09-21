import { memo } from "react";
import { Flex, HStack } from "@chakra-ui/react";
import { Loading } from "../Loading";
import { PokeCardItem } from "./PokeCardItems";

import { useFetch } from "./../../hooks/useFetch";

import styles from "./cards.module.scss";

export function PokeDetailsCard() {
   const { pokemons } = useFetch();

   return (
      <section>
         <HStack>
            <Flex className={styles.cards__container}>
               {pokemons.length === 0 ? (
                  <Loading />
               ) : (
                  pokemons.map((pokemon: any) => (
                     <PokeCardItem
                        key={pokemon.data.name}
                        name={pokemon.data.name}
                        image={pokemon.data.sprites.front_default}
                        id={pokemon.data.id}
                        types={pokemon.data.types}
                        height={pokemon.data.height}
                        weight={pokemon.data.weight}
                        abilities={pokemon.data.abilities}
                     />
                  ))
               )}
            </Flex>
         </HStack>
      </section>
   );
}

export default memo(PokeDetailsCard);
