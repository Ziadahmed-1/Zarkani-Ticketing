import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useUIStore from "@/zustand/UIStore";

function SelectComponent({ value, onChange, options = [], label, id }) {
  const ticketsFilter = useUIStore((state) => state.ticketsFilter);
  console.log("selected value", value);
  console.log("filters", ticketsFilter);

  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={onChange}
        sx={{
          height: "40px",
          borderRadius: "10px",
          fontSize: "14px",
          backgroundColor: "white",
        }}
        // Tell MUI how to compare option with value (important for objects)
        isOptionEqualToValue={(option, val) => option?.[id] === val?.[id]}
      >
        {options?.map((option) => (
          <MenuItem key={option?.[id]} sx={{ fontSize: "14px" }} value={option}>
            {option?.[label]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectComponent;
