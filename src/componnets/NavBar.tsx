import { Stack } from "@mui/material";
import logo from "../assets/diet.png";

function NavBar() {
  return (
    <Stack direction="row">
      {" "}
      <img height={"70px"} src={logo} alt="my app logo"></img>
    </Stack>
  );
}

export default NavBar;
