import { memo } from "react";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export function BtnToggleMode() {
   const text = useColorModeValue("dark", "light");
   const SwitchIcon = useColorModeValue(FaMoon, FaSun);
   const { toggleColorMode: toggleMode } = useColorMode();

   return (
      <section>
         <IconButton
            size={"md"}
            fontSize={"lg"}
            aria-label={`Switch to ${text} mode`}
            variant={"ghost"}
            color={"red.500"}
            ml={{
               base: "0",
               md: "3",
            }}
            onClick={toggleMode}
            icon={<SwitchIcon />}
         />
      </section>
   );
}

export default memo(BtnToggleMode);
