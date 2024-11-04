import { Game } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";
import { Rating } from "./ui/rating";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Header>
          <Heading fontSize="l">{game.name}</Heading>
        </Card.Header>
      </Card.Body>
      <Card.Footer>
        <Rating readOnly defaultValue={game.rating} size="lg" />
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
