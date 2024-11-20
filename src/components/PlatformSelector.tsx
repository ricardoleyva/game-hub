import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button>
          {" "}
          Platforms <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent width="150px" position="fixed">
        {data.map((p) => (
          <MenuItem key={p.id} value={p.slug}>
            {p.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
