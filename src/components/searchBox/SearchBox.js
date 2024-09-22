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
