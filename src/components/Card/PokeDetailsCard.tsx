import { memo } from "react";
import { Flex, Container } from "@chakra-ui/react";
import { PokeCardItem, Loading, useFetch } from "./index";

export function PokeDetailsCard() {
   const { pokemons } = useFetch();

   return (
      <section>
         <Container maxW={"1xl"}>
            <Flex flexWrap={"wrap"}>
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
         </Container>
      </section>
   );
}

export default memo(PokeDetailsCard);
