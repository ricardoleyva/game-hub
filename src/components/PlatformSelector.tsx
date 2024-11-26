import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <MenuRoot positioning={{ placement: "bottom-start" }}>
      <MenuTrigger asChild>
        <Button>
          {selectedPlatform?.name || "Platforms"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent position="absolute">
        {data.map((p) => (
          <MenuItem
            onClick={() => onSelectPlatform(p)}
            key={p.id}
            value={p.name}
          >
            {p.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
