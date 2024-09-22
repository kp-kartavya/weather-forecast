import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import "./searchbox.css";
import Logo from "../../assets/images/logo.svg";
import WeatherApp from "../../assets/images/WeatherApp.svg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBox = ({ onSearch }) => {
  const [city, setCity] = React.useState("");

  const handleSearch = () => {
    onSearch(city);
    setCity("");
  };
  return (
    <AppBar sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
      <Toolbar>
        <div>
          <img src={Logo} />
        </div>
        <div style={{ marginLeft: "-9%" }}>
          <img src={WeatherApp} />
        </div>
        <div className="searchInputContainer">
          <input
            className="searchInput"
            placeholder={"Search City"}
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="searchIconContainer">
            <Button onClick={handleSearch}>
              <IoIosSearch
                style={{
                  color: "#2874f0",
                }}
              />
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SearchBox;
