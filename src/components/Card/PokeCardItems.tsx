import { memo } from "react";
import { Box, Flex, Image, Button, useDisclosure } from "@chakra-ui/react";
import { CardsType, PokeModal } from "./index";

export function PokeCardItem({
   name,
   image,
   id,
   types,
   height,
   weight,
   abilities,
}: CardsType) {
   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <Flex
         basis={"18rem"}
         grow={1}
         shrink={1}
         direction={"column"}
         alignItems={"center"}
         m={1}
         bg={"white"}
         _dark={{
            bg: "gray.800",
         }}
         shadow={"xl"}
         rounded={"lg"}
         overflow={"hidden"}
         border={"1px solid gray"}
      >
         <Image
            w={"full"}
            h={"20rem"}
            fit={"cover"}
            src={image}
            alt={"avatar"}
         />

         <Box py={5} textAlign={"center"}>
            <Button
               onClick={onOpen}
               fontSize={"2xl"}
               fontWeight={"bold"}
               textTransform={"uppercase"}
               bg={"transparent"}
               color={"gray.800"}
               _dark={{
                  color: "whiteAlpha.800",
               }}
               transition={"all .5s ease-in-out"}
               _hover={{
                  bg: "red.20",
                  transform: "translateY(-10px)",
                  boxShadow: "0 0   2px 2px rgba(0,0,0,0.5)",
               }}
            >
               {name}
            </Button>
            <PokeModal
               onClose={onClose}
               isOpen={isOpen}
               name={name}
               image={image}
               id={id}
               types={types}
               height={height}
               weight={weight}
               abilities={abilities}
            />
         </Box>
      </Flex>
   );
}

export default memo(PokeCardItem);
