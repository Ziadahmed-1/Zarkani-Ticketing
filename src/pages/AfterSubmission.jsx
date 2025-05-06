import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AfterSubmission = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
      px={2}
    >
      <FiCheckCircle size={80} color="green" style={{ marginBottom: "16px" }} />
      <Typography variant="h4" gutterBottom>
        Submission Successful!
      </Typography>
      <Typography variant="body1" mb={4}>
        Thank you! Your ticket has been submitted. Feel free to close this page
        now.
      </Typography>
    </Box>
  );
};

export default AfterSubmission;
