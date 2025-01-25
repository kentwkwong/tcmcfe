import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import KidCheckInOut from "./pages/KidCheckInOut";
import QrScanner from "./pages/QrScanner";

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
        <br />
        -----------------
        <br />
        <QrScanner />
      </ThemeProvider>
    </>
  );
}

export default App;
