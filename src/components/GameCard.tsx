import { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import { Rating } from "./ui/rating";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" maxW="sm" height="sm">
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
      <Card.Footer justifyContent="space-between">
        <Rating readOnly defaultValue={game.rating} size="lg" marginY={4} />
        <CriticScore score={game.metacritic} />
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
