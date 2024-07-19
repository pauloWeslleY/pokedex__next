import { memo } from "react";
import { Box, Stack, Text, Link, useColorModeValue } from "@chakra-ui/react";

interface About {
   name: string;
   developer: string;
}

export function AboutContent({ name, developer }: About) {
   const bg__about = useColorModeValue("white", "gray.800");
   const color__text = useColorModeValue("gray.400", "gray.400");

   const link = "https://weslleylima.vercel.app/";

   const getLink = () => window.open(link);

   return (
      <Stack
         bg={bg__about}
         py={16}
         px={8}
         spacing={{ base: 8, md: 10 }}
         align={"center"}
         direction={"column"}
         h={"60vh"}
      >
         <Box textAlign={"center"}>
            <Link onClick={getLink}>
               <Text fontWeight={600}>{name}</Text>
            </Link>
            <Text fontSize={"sm"} color={color__text}>
               {developer}
            </Text>
         </Box>
      </Stack>
   );
}

export default memo(AboutContent);
