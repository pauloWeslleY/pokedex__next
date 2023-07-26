import { memo } from "react";
import { Flex, Container } from "@chakra-ui/react";
import { HeadTitle, Loading, CardItems, useFetch } from "./index";

export function PokemonCard() {
   const { pokemons } = useFetch();

   return (
      <section>
         <HeadTitle title="Pokémon" subtitle="Card" />

         <Container maxW={"8xl"}>
            <Flex flexWrap={"wrap"}>
               {pokemons.length === 0 ? (
                  <Loading />
               ) : (
                  pokemons.map((pokemon: any) => (
                     <CardItems
                        key={pokemon.data.name}
                        name={pokemon.data.name}
                        image={
                           pokemon.data.sprites.other.dream_world.front_default
                        }
                        id={pokemon.data.id}
                        types={pokemon.data.types}
                     />
                  ))
               )}
            </Flex>
         </Container>
      </section>
   );
}

export default memo(PokemonCard);
