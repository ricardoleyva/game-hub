import { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
import { Rating } from "./ui/rating";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root height="400px">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        height="185px"
        fit="cover"
      />
      <Card.Body>
        <Card.Title mb="1" textAlign="center">
          {game.name}
        </Card.Title>
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
