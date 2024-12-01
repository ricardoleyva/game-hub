import { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import { Rating } from "./ui/rating";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

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
        {/* {game.released}
          <br /> */}
        <HStack marginLeft={-5}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </HStack>
      </Card.Body>
      <Card.Title mb="1" textAlign="center">
        {game.name}
      </Card.Title>
      <Card.Footer justifyContent="space-between" marginLeft={-2.5}>
        <Rating readOnly defaultValue={game.rating} size="lg" marginY={4} />
        <CriticScore score={game.metacritic} />
        <Emoji rating={game.rating_top} />
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
