import { Box } from "@mui/material";
import React from "react";

const LoadingSpinner = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </Box>
  );
};

export default LoadingSpinner;
