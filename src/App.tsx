import { Grid, GridItem, Stack } from "@chakra-ui/react";

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
        <GridItem area="nav" bg="red">
          Nav
        </GridItem>
        <GridItem area="main" bg=" blue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
