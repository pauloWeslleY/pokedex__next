import { Center, Flex, Spinner } from "@chakra-ui/react";
import { memo } from "react";

import styles from "./styles.module.scss";

export function Loading() {
   return (
      <section className={styles.load__container}>
         <Center>
            <Flex>
               <Spinner color={"red.700"} size={"xl"} />
            </Flex>
         </Center>
      </section>
   );
}

export default memo(Loading);
