import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/joystick.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => (
  <HStack justifyContent="space-between" padding="20px">
    <Image src={logo} boxSize="60px" />
    <SearchInput />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
