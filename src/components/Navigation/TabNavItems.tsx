import Link from "next/link";
import { Tab } from "@chakra-ui/react";
import { Menu } from "./../../data/MenuProps";

interface TabNavProps {
   menu: Menu;
}

export function TabNavItems({ menu }: TabNavProps) {
   const { name, path } = menu;

   return (
      <section>
         <Link href={`${path}`}>
            <Tab
               py={4}
               m={0}
               _focus={{
                  boxShadow: "lg",
               }}
            >
               {name}
            </Tab>
         </Link>
      </section>
   );
}
