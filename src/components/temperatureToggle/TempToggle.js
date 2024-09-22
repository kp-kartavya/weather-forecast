import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ToggleStyle } from "./ToggleStyle";

export default function TempToggle({
  temp,
  setTemp,
  setIsFahrenheit,
  isFahrenheit,
}) {
  // const [temperature, setTemperature] = useState(temp);
  const convertToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  const convertToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

  const handleSwitchChange = (event) => {
    const checked = event.target.checked;

    setIsFahrenheit(checked);

    if (checked) {
      const tempInFahrenheit = convertToFahrenheit(temp);
      // setTemperature(tempInFahrenheit.toFixed(2));
      setTemp(tempInFahrenheit.toFixed(2));
    } else {
      const tempInCelsius = convertToCelsius(temp);
      // setTemperature(tempInCelsius.toFixed(2));
      setTemp(tempInCelsius.toFixed(2));
    }
  };

  return (
    <FormGroup style={{marginLeft: "35%"}}>
      <FormControlLabel
        control={
          <ToggleStyle
            sx={{ m: 1 }}
            defaultChecked
            checked={isFahrenheit}
            onChange={handleSwitchChange}
          />
        }
      />
    </FormGroup>
  );
}
