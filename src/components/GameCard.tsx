import { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
import { Rating } from "./ui/rating";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" maxW="sm" height="xs">
      <Image
        src={game.background_image}
        alt={game.name}
        height="185px"
        fit="cover"
      />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Description>
          {/* {game.released}
          <br /> */}
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Rating readOnly defaultValue={game.rating} size="lg" />
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
