import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/satisfy";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px",
  overflow: "hidden",
  backgroundColor: Colors.secondary,
  [theme.breakpoints.up("sm")]: {
    padding: "40px 0px",
  },
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontFamily: "Satisfy",

  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
  },
}));
