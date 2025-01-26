import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import KidCheckInOut from "./pages/KidCheckInOut";
import QrScanner from "./pages/QrScanner";
import QRGenerator from "./pages/QrGenerator";

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
        <br />
        -----------------
        <br />
        <QRGenerator />
      </ThemeProvider>
    </>
  );
}

export default App;
