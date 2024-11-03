import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/console_controller_webp.webp";
const NavBar = () => (
  <HStack>
    <Image src={logo} boxSize="60px" />
    <Text>NavBar</Text>
  </HStack>
);

export default NavBar;
