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
            fontWeight={800}
            fontSize={"2.5rem"}
            py={"4rem"}
            alignItems={"center"}
         >
            {title}{" "}
            <Text as={"span"} fontSize={"2.8rem"}>
               <Tag
                  colorScheme={"red"}
                  fontWeight={200}
                  size={"xl"}
                  p={"0.2rem"}
               >
                  {subtitle}
               </Tag>
            </Text>
         </Heading>
      </Center>
   );
}

export default memo(HeadTitle);
