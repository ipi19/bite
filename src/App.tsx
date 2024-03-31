import { red } from "@mui/material/colors";
import "./App.css";
import NavBar from "./componnets/NavBar";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Grid container spacing={0.5} sm={1} md={1} lg={3}>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item>
          <span color="red">green</span>
        </Grid>
        <Grid item bgcolor={red}>
          <span color="red">green</span>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
