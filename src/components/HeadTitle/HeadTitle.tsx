import { memo } from "react";
import { Center, Heading, Text, Tag } from "@chakra-ui/react";

interface HeadTitleProps {
   title: string;
   subtitle: string;
}

export function HeadTitle({ title, subtitle }: HeadTitleProps) {
   return (
      <Center>
         <Heading
            as={"h2"}
            fontWeight={"extrabold"}
            fontSize={"2.5rem"}
            py={"4rem"}
            alignItems={"center"}
         >
            {title}{" "}
            <Text as={"span"} fontWeight={"medium"} fontSize={"2.8rem"}>
               <Tag colorScheme={"red"} size={"xl"} p={"0.2rem"}>
                  {subtitle}
               </Tag>
            </Text>
         </Heading>
      </Center>
   );
}

export default memo(HeadTitle);
