import { Flex, Box, Tag, chakra } from "@chakra-ui/react";
import { CardsType } from "./../../types/CardsType";

import styles from "./cards.module.scss";

export function CardItems({ name, image, id, types }: CardsType) {
   function typeHandler() {
      if (types[1]) {
         return types[0].type.name + "|" + types[1].type.name;
      }
      return types[0].type.name;
   }

   return (
      <section className={styles.card__items}>
         <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
         >
            <Box
               bg={"blackAlpha.100"}
               borderColor={"red.600"}
               borderWidth={"1px"}
               h={80}
               w={"full"}
               rounded={"lg"}
               shadow={"lg"}
               bgSize={"cover"}
               bgPos={"center"}
               style={{
                  backgroundImage: `url(${image})`,
               }}
            ></Box>
            <Box
               w={{
                  base: 56,
                  md: 64,
               }}
               mt={-10}
               shadow={"lg"}
               rounded={"lg"}
               overflow={"hidden"}
            >
               <chakra.h3
                  py={2}
                  textAlign={"center"}
                  fontWeight={"bold"}
                  textTransform={"uppercase"}
                  bg={"gray.40"}
                  color={"gray.200"}
                  _dark={{
                     color: "white",
                  }}
                  letterSpacing={1}
               >
                  {name}
               </chakra.h3>
               <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  py={2}
                  px={3}
                  bg={"gray.20"}
                  _dark={{
                     bg: "gray.500",
                  }}
               >
                  <chakra.span
                     fontWeight={"bold"}
                     color={"gray.800"}
                     _dark={{
                        color: "gray.200",
                     }}
                  >
                     <Tag variant={"solid"} bg={"red.20"}>
                        #{id}
                     </Tag>
                  </chakra.span>
                  <chakra.span
                     fontWeight={"medium"}
                     color={"gray.800"}
                     _dark={{
                        color: "gray.200",
                     }}
                  >
                     {typeHandler()}
                  </chakra.span>
               </Flex>
            </Box>
         </Flex>
      </section>
   );
}
