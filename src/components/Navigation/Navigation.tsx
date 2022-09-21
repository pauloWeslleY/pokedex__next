import { memo, useState } from "react";
import {
   Box,
   Flex,
   HStack,
   Avatar,
   Tabs,
   TabList,
   chakra,
   useColorModeValue,
} from "@chakra-ui/react";
import { TabNavItems } from "./TabNavItems";
import { MenuProps } from "../../data/MenuProps";
import { BtnToggleMode } from "../BtnToggleMode";

export function Navigation() {
   const bg = useColorModeValue("gray.900", "gray.10");
   const nav__title = useColorModeValue("gray.300", "gray.900");
   const [tabIndex, setTabIndex] = useState<any>(0);

   const handleTabsChange = (index: any) => {
      setTabIndex(index);
   };

   return (
      <Box shadow={"dark-lg"}>
         <chakra.header
            bg={bg}
            borderColor={"red.500"}
            borderBottomWidth={"0.3rem"}
            w={"full"}
            px={{
               base: 2,
               sm: 4,
            }}
            py={4}
         >
            <Flex alignItems={"center"} justifyContent={"center"} mx={"auto"}>
               <HStack
                  spacing={4}
                  display={"flex"}
                  alignItems={"center"}
                  justify={"center"}
               >
                  <Avatar size={"md"} src={"/Logo.png"} />
                  <chakra.h1
                     color={nav__title}
                     fontSize={"1.8rem"}
                     fontWeight={"medium"}
                  >
                     PokéDex
                  </chakra.h1>
                  <BtnToggleMode />
               </HStack>
            </Flex>
         </chakra.header>
         <Flex
            alignItems={"center"}
            justifyContent={"center"}
            mx={2}
            borderWidth={0}
            overflowX={"auto"}
         >
            <Tabs
               index={tabIndex}
               onChange={handleTabsChange}
               defaultIndex={2}
               borderBottomColor={"transparent"}
               colorScheme={"red"}
            >
               <TabList>
                  {MenuProps.map((item) => {
                     return <TabNavItems key={item.id} menu={item} />;
                  })}
               </TabList>
            </Tabs>
         </Flex>
      </Box>
   );
}

export default memo(Navigation);
