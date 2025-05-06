import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SelectComponent({ value, onChange, options }) {
  return (
    <FormControl fullWidth>
      {/* <InputLabel id="demo-simple-select-label">{label || "Select"}</InputLabel> */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        //label={label || "Select"}
        onChange={onChange}
        sx={{
          height: "40px",
          borderRadius: "10px",
          fontSize: "14px",
          backgroundColor: "white",
        }}
      >
        {options?.map((option) => (
          <MenuItem key={option} sx={{ fontSize: "14px" }} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectComponent;
