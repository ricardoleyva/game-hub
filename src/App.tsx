import { Grid, GridItem, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024 px
        }}
        templateColumns={{
          base: "1fr",
          lg: "150px 1fr", //1024 px
        }}
      >
        <Stack hideBelow="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Stack>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
