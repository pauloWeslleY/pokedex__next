import {
   Box,
   Heading,
   Image,
   Link,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
   Stack,
   Tag,
   Text,
   useDisclosure,
} from "@chakra-ui/react";
import { CardsType } from "../../types/CardsType";

import styles from "./cards.module.scss";

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

   function typeHandler() {
      if (types[1]) {
         return types[0].type.name + "-" + types[1].type.name;
      }
      return types[0].type.name;
   }

   const modal = (
      <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent>
            <ModalHeader fontSize="2.5rem">{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               <Stack spacing={4} align={"center"}>
                  <Image
                     boxSize={"17.5rem"}
                     fit={"cover"}
                     src={image}
                     alt={"avatar"}
                  />
                  <Box
                     letterSpacing={0.7}
                     display={"flex"}
                     gap={"1rem"}
                     flexDirection={"column"}
                     alignItems={"center"}
                  >
                     <Heading as={"h4"} fontSize={"1.5rem"}>
                        Number:{" "}
                        <Text as={"span"}>
                           <Tag variant={"solid"} size={"lg"} bg={"red.10"}>
                              #{id}
                           </Tag>
                        </Text>
                     </Heading>
                     <Heading as={"h4"} fontSize={"1.5rem"}>
                        Type: <Text as={"span"}>{typeHandler()}</Text>
                     </Heading>
                     <Heading as={"h4"} fontSize={"1.5rem"}>
                        Ability:{" "}
                        <Text as={"span"}>{abilities[0].ability.name}</Text>
                     </Heading>
                     <Heading as={"h4"} fontSize={"1.5rem"}>
                        Height: <Text as={"span"}>{height}</Text>
                     </Heading>
                     <Heading as={"h4"} fontSize={"1.5rem"}>
                        Weight: <Text as={"span"}>{weight}</Text>
                     </Heading>
                  </Box>
               </Stack>
            </ModalBody>
            <ModalFooter></ModalFooter>
         </ModalContent>
      </Modal>
   );

   return (
      <section className={styles.card__items}>
         <Box
            w={"xs"}
            bg={"white"}
            _dark={{
               bg: "gray.800",
            }}
            shadow={"xl"}
            rounded={"lg"}
            overflow={"hidden"}
            mx={"auto"}
         >
            <Image
               w={"full"}
               h={"20rem"}
               fit={"cover"}
               src={image}
               alt={"avatar"}
            />

            <Box py={5} textAlign={"center"}>
               <Link
                  onClick={onOpen}
                  display={"block"}
                  fontSize={"2xl"}
                  color={"gray.800"}
                  _dark={{
                     color: "white",
                  }}
                  fontWeight={"bold"}
               >
                  {name}
                  {modal}
               </Link>
            </Box>
         </Box>
      </section>
   );
}
