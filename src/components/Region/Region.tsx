import { memo } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { useApi } from "../../hooks/useApi";
import { Loading } from "../Loading";

type Region = {
   name: string;
};

export function Region() {
   const { data: poke_region } = useApi<Region[]>(
      "https://pokeapi.co/api/v2/region/"
   );

   const borderColor = useColorModeValue("gray.800", "gray.500");

   return (
      <section>
         <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap={"5rem"}
         >
            {poke_region?.length === 0 ? (
               <Loading />
            ) : (
               poke_region?.map((poke) => (
                  <Box
                     key={poke.name}
                     as={"span"}
                     textAlign={"center"}
                     fontWeight={"medium"}
                     fontSize={"2rem"}
                     px={{ base: 4, md: 8 }}
                     py={"5"}
                     shadow={"xl"}
                     border={"1px solid"}
                     borderColor={borderColor}
                     rounded={"lg"}
                     w={"40%"}
                  >
                     {poke.name}
                  </Box>
               ))
            )}
         </Box>
      </section>
   );
}

export default memo(Region);
