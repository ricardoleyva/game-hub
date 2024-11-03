import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/console_controller_webp.webp";
import { ColorModeButton } from "./ui/color-mode";
const NavBar = () => (
  <HStack>
    <Image src={logo} boxSize="60px" />
    <Text>NavBar</Text>
    <ColorModeButton />
  </HStack>
);

export default NavBar;
