import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KidCheckInOut from "./pages/KidCheckInOut";
import Navbar from "./components/Navbar";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <KidCheckInOut />
      </ThemeProvider>
    </>
  );
}

export default App;
