import { memo } from "react";
import {
   Box,
   Divider,
   Flex,
   HStack,
   Image,
   Link,
   Stack,
   Text,
   VStack,
} from "@chakra-ui/react";

export function Footer() {
   return (
      <section>
         <Box
            bg={"gray.900"}
            _dark={{
               bg: "gray.10",
            }}
            display={"flex"}
            justifyContent={"center"}
            mt={"1.5rem"}
         >
            <VStack py={3}>
               <Text
                  textAlign={"center"}
                  fontSize={"smaller"}
                  color={"gray.50"}
                  _dark={{
                     color: "gray.900",
                  }}
               >
                  &copy;Copyright. All rights reserved.
               </Text>
            </VStack>
         </Box>
      </section>
   );
}

export default memo(Footer);
