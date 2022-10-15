import { memo } from "react";
import {
   Flex,
   Heading,
   Image,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalOverlay,
   Stack,
   Tag,
   Text,
} from "@chakra-ui/react";
import { CardsType } from "./index";

export function PokeModal({
   name,
   image,
   id,
   types,
   height,
   weight,
   abilities,
   isOpen,
   onClose,
}: CardsType) {
   function typeHandler() {
      if (types[1]) {
         return types[0].type.name + "-" + types[1].type.name;
      }
      return types[0].type.name;
   }

   const describe = [
      {
         title: "Types",
         name: typeHandler(),
      },
      {
         title: "Abilities",
         name: abilities[0].ability.name,
      },
      {
         title: "Height",
         name: height,
      },
      {
         title: "Weight",
         name: weight,
      },
   ];

   return (
      <section>
         <Modal size={"xs"} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
               <ModalCloseButton />
               <ModalBody my={"2rem"}>
                  <Stack spacing={4} align={"center"}>
                     <Image
                        boxSize={"17.5rem"}
                        border={"0.1rem solid #d90429"}
                        p={2}
                        borderRadius={"50%"}
                        fit={"cover"}
                        src={image}
                        alt={name}
                     />
                     <Flex
                        letterSpacing={0.7}
                        gap={"1rem"}
                        flexDirection={"column"}
                        alignItems={"center"}
                     >
                        <Heading
                           as={"h3"}
                           my={"1rem"}
                           fontWeight={800}
                           fontSize={"2rem"}
                           textTransform={"uppercase"}
                        >
                           {name}
                        </Heading>
                        <Heading fontWeight={700} as={"h4"} fontSize={"1.4rem"}>
                           Number:{" "}
                           <Text as={"span"}>
                              <Tag variant={"solid"} size={"lg"} bg={"red.10"}>
                                 #{id}
                              </Tag>
                           </Text>
                        </Heading>
                        {describe.map((item, index) => (
                           <Text key={index} fontWeight={700} as={"span"}>
                              {item.title}:{" "}
                              <Tag fontWeight={500} shadow={"xl"}>
                                 {item.name}
                              </Tag>
                           </Text>
                        ))}
                     </Flex>
                  </Stack>
               </ModalBody>
            </ModalContent>
         </Modal>
      </section>
   );
}

export default memo(PokeModal);
