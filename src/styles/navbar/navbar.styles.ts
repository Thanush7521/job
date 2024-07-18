import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { List, Typography} from "@mui/material";
import { Colors } from "../basetheme/basetheme";
import "@fontsource-variable/montserrat";

interface NavBarItemsProps {
  types: "rows" | "block";
}
export const NavBarContainer = styled(Box)(() => ({
  padding: "0.5em 0.6em",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: Colors.black,
  background: "white",
  position: "sticky",
  top: 0,
  zIndex: 1000,
}));

export const NavBarTitle = styled(Typography)(() => ({

  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

export const NavBarIcon = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "3em",
  height: "3em",
  margin: "0 2em",
  [theme.breakpoints.down("md")]: {
    width: "2em",
    height: "2em",
    margin: "0 1.5em"
  },
  [theme.breakpoints.down("sm")]: {
    width: "2em",
    height: "2em",
    margin: "0 1.5em"
  },
}));
export const NavBarItemsContainer = styled(List)<NavBarItemsProps>((props) => ({
  display: props.types === "rows" ? "flex" : "block",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5em",
  margin: "0.1em",
}));
export const NavBarItemsContainerLoginSignUp = styled(List)<NavBarItemsProps>(
  (props) => ({
    display: props.types === "rows" ? "flex" : "block",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5em",
  })
);

export const ListItemButtonStyle = {
  justifyContent: "center",
  transition: "0.7s",

  "&::after": {
    content: "''",
    position: "absolute",
    width: "85%",
    height: "2px",
    bottom: "0",
    background: "transparent",
    transform: "scaleX(0)",
    transformOrigin: "center",
    transition: "transform 0.3s ease-in-out",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    background: Colors.jungleGreen,
  },
  "&:hover": {
    color: Colors.biscay,
    background: "transparent",
  },
};
export const primaryTypographyHeaderStyle = {
  fontSize: "2vw",
  fontWeight: "600",
  color: Colors.jungleGreen,
};

export const primaryTypographyDashboardStyle = {
  fontSize: "1.1em",
  fontWeight: "600",
  color: Colors.dashboardText
};
export const primaryTypographyStyle = {
  fontSize: "15px",
  fontFamily: "'Montserrat Variable', 'sans-serif'",
  fontWeight: "600",
};

export const primaryTypographyStyleSignUp = {
  ...primaryTypographyStyle,
  fontWeight: "800",
  color: Colors.title,
};

export const textStyleListItemText = {
  textAlign: "center",

};

export const NavBarItemsCustomStyles = {};

// Mobile styles
export const primaryTypographyHeaderStyleMobile = {
  fontSize: "25px",
  fontWeight: "600",
  color: Colors.jungleGreen,
};