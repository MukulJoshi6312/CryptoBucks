import { CircularProgress, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "./styles.css";
function Loader() {

  const theme = createTheme({
    palette: {
       secondary: {
           main: '#f37f2e'
       }
    }
  })
  return (
    <ThemeProvider theme={theme} color="success">

    <div className="loader-background">
      <CircularProgress  className="loader"/>
    </div>
    </ThemeProvider>
  );
}

export default Loader;
