import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { MyList } from "../../styles/appbar";

import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
} from "../../styles/appbar";
import { Colors } from "../../styles/theme";

export default function Actions({ matches }) {
  const icons = [<ShoppingCartIcon />, <FavoriteIcon />, <PersonIcon />];
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        {icons.map((item, index) => {
          return (
            <ListItemButton key={index}>
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: matches && Colors.secondary,
                }}
              >
                {item}
              </ListItemIcon>

              <Divider orientation="vertical" flexItem />
            </ListItemButton>
          );
        })}
      </MyList>
    </Component>
  );
}
