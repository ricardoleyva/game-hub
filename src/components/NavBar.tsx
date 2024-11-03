import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/console_controller_webp.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => (
  <HStack justifyContent="space-between" padding="20px">
    <Image src={logo} boxSize="60px" />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
