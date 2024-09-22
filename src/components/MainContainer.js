import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./mainContainer.css";
import { IoIosSearch } from "react-icons/io";
import SearchBox from "./searchBox/SearchBox";
import { API_KEY, API_URL, FORECAST_API_URL } from "./utils/Constants";
import axios from "axios";
import CityWeather from "./cityWeather/CityWeather";
import FiveDayWeather from "./fiveDayWeather/FiveDayWeather";

const MainContainer = () => {
  const [currentWeather, setCurrentWeather] = useState("");
  const [error, setError] = useState(null);
  const [fiveDay, setFiveDay] = useState("");

  useEffect(() => {
    fetchWeather("noida");
  }, []);

  const fetchWeather = async (city) => {
    try {
      await axios
        .get(`${API_URL}${city}&units=metric&APPID=${API_KEY}`)
        .then((res) => {
          setCurrentWeather(res.data);
          setError("");
        });
    } catch (error) {
      setError("City Not Found or Network Error");
    }
  };

  const fetchFiveDaysWeather = async (city) => {
    try {
      await axios
        .get(`${FORECAST_API_URL}${city}&units=metric&APPID=${API_KEY}`)
        .then((res) => {
          if (res.data.list) {
            const dailyWeather = {};
            res.data.list.forEach((entry) => {
              const dateKey = new Date(entry.dt_txt).toLocaleDateString(
                "en-US"
              );
              const weekday = new Date(entry.dt_txt).toLocaleDateString(
                "en-US",
                { weekday: "long" }
              );

              if (!dailyWeather[dateKey]) {
                dailyWeather[dateKey] = {
                  weekday,
                  maxTemp: entry.main.temp_max,
                  minTemp: entry.main.temp_min,
                  icon: entry.weather[0].icon,
                  description: entry.weather[0].main,
                };
              } else {
                // Update max and min temperatures if needed
                dailyWeather[dateKey].maxTemp = Math.max(
                  dailyWeather[dateKey].maxTemp,
                  entry.main.temp_max
                );
                dailyWeather[dateKey].minTemp = Math.min(
                  dailyWeather[dateKey].minTemp,
                  entry.main.temp_min
                );
              }
            });

            const result = Object.keys(dailyWeather).map((date) => ({
              date,
              temp_max: dailyWeather[date].maxTemp,
              temp_min: dailyWeather[date].minTemp,
              description: dailyWeather[date].description,
              icon: dailyWeather[date].icon,
            }));
            setFiveDay(result);
            setError("");
          }
        });
    } catch (error) {
      setError("City Not Found or Network Error");
    }
  };

  return (
    <div className="image">
      <div>
        <SearchBox onSearch={fetchWeather} />
        {currentWeather && (
          <CityWeather
            error={error}
            icon={currentWeather.weather[0].icon}
            weatherText={currentWeather.weather[0].main.toLocaleUpperCase()}
            cityName={currentWeather.name.toLocaleUpperCase()}
            temperature={currentWeather.main.temp}
            fetchFiveDaysWeather={fetchFiveDaysWeather}
            fiveDay={fiveDay}
          />
        )}
        {fiveDay && <FiveDayWeather fiveDay={fiveDay} />}
      </div>
    </div>
  );
};

export default MainContainer;
