import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppbarMobile from "./appbarMobile";
import AppbarDesktop from "./appbarDesktop";

function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return <>{matches ? <AppbarMobile /> : <AppbarDesktop />}</>;
}

export default Appbar;
