import { Grid, GridItem, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024 px
        }}
      >
        <Stack hideBelow="lg">
          <GridItem area="aside" bg="orange">
            Aside
          </GridItem>
        </Stack>
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <GridItem area="main" bg=" blue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
