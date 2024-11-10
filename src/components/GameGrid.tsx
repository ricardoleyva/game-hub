import useGames from "@/hooks/useGames";
import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* { sm: 1, md: 2, lg: 3, xl: 5 } */}
      <SimpleGrid columns={[1, 2, 3, 5]} padding="10px" gap="6">
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
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
