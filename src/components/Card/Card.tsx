import { memo } from "react";
import { Stack, Box, useColorModeValue } from "@chakra-ui/react";

import { useApi } from "../../hooks/useApi";
import { Loading } from "../Loading";

type PokeInfo = {
   name: string;
};

export function Card() {
   const { data: POKELIST } = useApi<PokeInfo[]>(
      "https://pokeapi.co/api/v2/pokemon?limit=251"
   );

   const borderColor = useColorModeValue("gray.800", "gray.500");

   return (
      <section>
         <Stack alignItems={"center"} p={"1.5rem"}>
            <Box
               display={"flex"}
               alignItems={"center"}
               justifyContent={"center"}
               gap={"2rem"}
               flexWrap={"wrap"}
            >
               {POKELIST?.length === 0 ? (
                  <Loading />
               ) : (
                  POKELIST?.map((item) => (
                     <Box
                        key={item.name}
                        as={"span"}
                        fontWeight={"regular"}
                        fontSize={"2rem"}
                        px={{ base: 4, md: 8 }}
                        py={"5"}
                        border={"1px solid"}
                        borderColor={borderColor}
                        shadow={"xl"}
                        rounded={"lg"}
                        flexBasis={"15rem"}
                        flexGrow={1}
                        flexShrink={1}
                        textAlign={"center"}
                     >
                        {item.name}
                     </Box>
                  ))
               )}
            </Box>
         </Stack>
      </section>
   );
}

export default memo(Card);
