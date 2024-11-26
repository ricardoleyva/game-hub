import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/joystick.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => (
  <HStack justifyContent="space-between" padding="20px">
    <Image src={logo} boxSize="60px" />
    <SearchInput onSearch={onSearch} />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
