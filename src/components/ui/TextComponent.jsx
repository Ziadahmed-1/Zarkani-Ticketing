import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";

import React, { useState } from "react";

function TextComponent({ type, value, onChange, multiline, height, readOnly }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  function handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
    onChange(e);
  }
  return (
    <Box noValidate autoComplete="off">
      <TextField
        value={value}
        disabled={readOnly}
        onChange={handleChange}
        type={showPassword ? "text" : type}
        variant="outlined"
        multiline={multiline}
        fullWidth
        minRows={2}
        maxRows={4}
        InputProps={{
          sx: {
            fontSize: "14px",
            borderRadius: "10px",
            alignItems: "flex-start", // Ensures top alignment for textarea
          },
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePassword} edge="end">
                {showPassword ? (
                  <MdOutlineVisibilityOff />
                ) : (
                  <MdOutlineVisibility />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        inputProps={{
          style: {
            padding: "10px 14px", // Sufficient padding for multiline
            backgroundColor: "white",
          },
        }}
      />
    </Box>
  );
}

export default TextComponent;
