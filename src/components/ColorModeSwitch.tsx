import { HStack, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { Switch } from "./ui/switch";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch
          checked={colorMode === "dark"}
          onCheckedChange={toggleColorMode}
          colorPalette={"green"}
        >
          <Text whiteSpace="nowrap"> Dark Mode </Text>
        </Switch>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
