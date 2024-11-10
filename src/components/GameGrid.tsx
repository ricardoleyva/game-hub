import useGames from "@/hooks/useGames";
import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* { sm: 1, md: 2, lg: 3, xl: 5 } */}
      <SimpleGrid columns={[1, 2, 3, 5]} padding="10px" gap="6">
        {games.map((game) => (
          <GridItem key={game.id}>
            <GameCard game={game} />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;