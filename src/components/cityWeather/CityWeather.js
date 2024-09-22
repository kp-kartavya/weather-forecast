import React, { useState } from "react";
import "./cityWeather.css";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import TempToggle from "../temperatureToggle/TempToggle";
import { TbError404 } from "react-icons/tb";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Error from "../../assets/images/error.svg";

const CityWeather = ({
  icon,
  cityName,
  temperature,
  weatherText,
  fetchFiveDaysWeather,
  fiveDay,
  error,
}) => {
  const [temp, setTemp] = useState(temperature);
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  return (
    <div
      className="weatherContainer"
      style={{
        width: fiveDay ? "50%" : "100%",
      }}
    >
      {!error ? (
        <>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body2" sx={{ color: "#7a7a7a" }}>
                {cityName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{ color: "#7a7a7a" }}>
                <TempToggle
                  temp={temp}
                  setTemp={setTemp}
                  setIsFahrenheit={setIsFahrenheit}
                  isFahrenheit={isFahrenheit}
                />
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ marginY: "20px" }} />
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{ marginTop: "10px" }}
          >
            <Typography variant="h2" sx={{ fontSize: "4rem" }}>
              {temp}°{isFahrenheit ? "F" : "C"}
            </Typography>
            <Grid item xs="2">
              <Avatar
                src={`http://openweathermap.org/img/wn/${icon}.png`}
                sx={{ height: "50px" }}
              />
              <Typography variant="body2" sx={{ color: "#7a7a7a" }}>
                {weatherText}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ marginY: "20px" }} />
          <div className="searchIconContainer">
            <Button
              style={{ width: "100%", color: "grey" }}
              onClick={(e) => fetchFiveDaysWeather(cityName)}
            >
              View Five Days Forecast
            </Button>
          </div>
        </>
      ) : (
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ marginTop: "10px" }}
        >
          <Typography variant="h2" sx={{ fontSize: "2rem" }}>
            {error}
            {/* <ErrorOutlineIcon /> */}
            <div>
              <img src={Error} />
            </div>
          </Typography>
          {/* <Grid item xs="2">
            <Avatar
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              sx={{ height: "50px" }}
            />
            <Typography variant="body2" sx={{ color: "#7a7a7a" }}>
              {weatherText}
            </Typography>
          </Grid> */}
        </Grid>
      )}
    </div>
  );
};

export default CityWeather;
