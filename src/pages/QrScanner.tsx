import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Button,
  Container,
} from "@mui/material";

const QrScanner: React.FC = () => {
  //   const [data, setData] = useState<string>("No result");
  //   const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  //   const [selection, setSelection] = useState("check-in");

  //   useEffect(() => {
  //     const scanner = new Html5QrcodeScanner(
  //       "reader", // Div ID where the scanner will be rendered
  //       { fps: 10, qrbox: 250 },
  //       false
  //     );

  //     scanner.render(
  //       (decodedText) => {
  //         setData(decodedText);
  //         alert(data + " " + selection);
  //         scanner.clear(); // Stop scanning after successful scan
  //       },
  //       (error) => {
  //         console.warn("QR Code scan error:", error);
  //       }
  //     );

  //     scannerRef.current = scanner;

  //     return () => {
  //       scannerRef.current?.clear();
  //     };
  //   }, []);

  //   return (
  //     <div className="flex flex-col items-center p-4 space-y-4">
  //       <h1 className="text-xl font-bold">QR Code Scanner</h1>
  //       <div className="p-2 border rounded-lg w-64">
  //         <FormControl component="fieldset">
  //           <FormLabel component="legend">Select Option</FormLabel>
  //           <RadioGroup
  //             value={selection}
  //             onChange={(e) => setSelection(e.target.value)}
  //           >
  //             <FormControlLabel
  //               value="check-in"
  //               control={<Radio />}
  //               label="Check-in"
  //             />
  //             <FormControlLabel
  //               value="check-out"
  //               control={<Radio />}
  //               label="Check-out"
  //             />
  //           </RadioGroup>
  //         </FormControl>
  //         <p className="mt-4 text-sm">Selected: {selection}</p>
  //       </div>
  //       <div id="reader" className="w-full max-w-md border rounded-lg"></div>
  //       <div className="p-4 border rounded-lg bg-gray-100 w-full max-w-md">
  //         <p className="text-center">
  //           <strong>Scanned Data:</strong> {data}
  //         </p>
  //       </div>
  //     </div>
  //   );
  // };

  const [value, setValue] = useState("option1"); // state for radio button selection
  const [scanResult, setScanResult] = useState(""); // state to store QR code scan result
  const [isScannerActive, setIsScannerActive] = useState(false); // to toggle scanner visibility
  const scannerRef = useRef<Html5QrcodeScanner | null>(null); // reference for scanner element

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(event.target.value);
  };

  const startScanner = () => {
    if (!scannerRef.current) return;

    const qrScanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: 250,
      },
      false
    );

    qrScanner.render(
      (decodedText) => {
        setScanResult(decodedText);
        qrScanner.clear(); // Stop the scanner once a QR code is scanned
        setIsScannerActive(false); // Close the scanner after successful scan
      },
      (errorMessage) => {
        console.log(errorMessage); // Handle errors here if necessary
      }
    );
  };

  const handleScanButtonClick = () => {
    setIsScannerActive(true);
    startScanner();
  };

  return (
    <Container>
      <Box mt={5}>
        {/* Radio Button Group */}
        <FormLabel>Choose an option:</FormLabel>
        <RadioGroup value={value} onChange={handleRadioChange}>
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="Option 1"
          />
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label="Option 2"
          />
        </RadioGroup>

        <Box mt={3}>
          <Button variant="contained" onClick={handleScanButtonClick}>
            Open QR Scanner
          </Button>
        </Box>

        {/* Display QR Scanner if active */}
        {isScannerActive && (
          <Box
            mt={3}
            ref={scannerRef}
            style={{ width: "100%", height: "400px" }}
          ></Box>
        )}

        {/* Display scanned QR result */}
        {scanResult && (
          <Box mt={3}>
            <h4>QR Scan Result:</h4>
            <p>{scanResult}</p>
          </Box>
        )}
      </Box>
      <div id="reader" className="w-full max-w-md border rounded-lg"></div>
    </Container>
  );
};

export default QrScanner;
