import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/joystick.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => (
  <HStack justifyContent="space-between" padding="20px">
    <Image src={logo} boxSize="60px" />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
