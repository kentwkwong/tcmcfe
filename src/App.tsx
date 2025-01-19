import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import KidCheckInOut from "./pages/KidCheckInOut";

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
