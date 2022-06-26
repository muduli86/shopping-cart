import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
// import { Typography } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerTitle,
  BannerImage,
} from "../../styles/banner";

function Banner() {
  //   const theme = useTheme();
  //   const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      {/* {matches ? <h1>Mobile</h1> : <h1>Desktop</h1>} */}
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6">Shopping Mela</Typography>
        <BannerTitle variant="h2">Mega Discount</BannerTitle>
        <BannerDescription variant="subtitle">
          Flat ₹200 back | Weekend grocery sale | Sopo fresh
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;
