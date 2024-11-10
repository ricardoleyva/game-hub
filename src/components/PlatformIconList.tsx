import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { Platform } from "@/hooks/useGames";
import { IconButton } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: BsNintendoSwitch,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      {platforms.map((platform) => (
        <IconButton
          as={iconMap[platform.slug]}
          key={platform.slug}
          variant="ghost"
          size="xs"
          height="20px"
          mr="1"
          color="gray.500"
          marginY="1"
        />
      ))}
    </>
  );
};

export default PlatformIconList;
