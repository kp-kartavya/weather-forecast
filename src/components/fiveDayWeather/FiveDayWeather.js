import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid2 as Grid,
  Avatar,
} from "@mui/material";

import "./fiveDayWeather.css";

const TransparentWeatherCard = ({
  day,
  highTemp,
  lowTemp,
  icon,
  weatherText,
}) => {
  return (
    <Card className="fiveDayWeather">
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {day}
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Max: {highTemp}°C
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Min: {lowTemp}°C
          </Typography>
        </Box>

        <Avatar
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          sx={{ height: "50px" }}
        />
        <Typography variant="body2" sx={{ marginTop: "-30px" }}>
          {weatherText}
        </Typography>
      </CardContent>
    </Card>
  );
};

const FiveDayWeather = ({ fiveDay }) => {
  console.log(fiveDay);
  return (
    <Grid container justifyContent="center" marginTop="-5%">
      {fiveDay &&
        fiveDay.map((forecast, index) => (
          <Grid item key={index}>
            <TransparentWeatherCard
              day={new Date(forecast.date).toLocaleDateString("en-US", {
                weekday: "long",
              })}
              highTemp={forecast.temp_max}
              lowTemp={forecast.temp_min}
              icon={forecast.icon}
              weatherText={forecast.description}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default FiveDayWeather;
