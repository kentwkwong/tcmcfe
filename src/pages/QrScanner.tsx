// import React, { useEffect, useRef, useState } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";

// const QrScanner: React.FC = () => {
//   const [data, setData] = useState<string>("No result");
//   const scannerRef = useRef<Html5QrcodeScanner | null>(null);

//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner(
//       "reader", // Div ID where the scanner will be rendered
//       { fps: 10, qrbox: 250 },
//       false
//     );

//     scanner.render(
//       (decodedText) => {
//         setData(decodedText);
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
//       <div id="reader" className="w-full max-w-md border rounded-lg"></div>
//       <div className="p-4 border rounded-lg bg-gray-100 w-full max-w-md">
//         <p className="text-center">
//           <strong>Scanned Data:</strong> {data}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default QrScanner;

import { useState, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

const QRCodeScanner = () => {
  const [cameraType, setCameraType] = useState("environment");
  const [cameraUsing, setCameraUsing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scannedResult, setScannedResult] = useState<string | null>(null);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  const stopScanner = () => {
    setCameraUsing(false);
    if (scannerRef.current) {
      scannerRef.current.stop();
    }
  };
  const startScanner = () => {
    setErrorMessage("");
    setScannedResult(null);
    setCameraUsing(true);
    const config = { fps: 10, qrbox: 250 }; // Scanner configuration

    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices.length > 0) {
          console.log(devices);
          // const cameraId =
          //   devices.find((device) =>
          //     cameraType === "environment"
          //       ? device.label.includes("back")
          //       : device.label.includes("front")
          //   )?.id || devices[0].id;

          scannerRef.current = new Html5Qrcode("reader");

          scannerRef.current
            .start(
              devices[0].id,
              config,
              (decodedText) => {
                setScannedResult(decodedText);
                stopScanner();
              },
              (errorMessage) => {
                console.warn(errorMessage);
              }
            )
            .catch((err) => {
              setErrorMessage("Failed to start scanner: " + err);
            });
        } else {
          setErrorMessage("No cameras found.");
        }
      })
      .catch((err) => {
        setErrorMessage("Error fetching camera devices: " + err);
      });
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-lg font-bold">QR Code Scanner</h2>
      <div className="mt-4">
        <label>
          <input
            type="radio"
            value="environment"
            checked={cameraType === "environment"}
            onChange={() => setCameraType("environment")}
          />
          Check-In
        </label>
        <label className="ml-4">
          <input
            type="radio"
            value="user"
            checked={cameraType === "user"}
            onChange={() => setCameraType("user")}
          />
          Check-Out
        </label>
      </div>
      <button
        onClick={startScanner}
        className={
          cameraUsing
            ? "hidden mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            : "mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        }
      >
        Start Scanning
      </button>
      <button
        onClick={stopScanner}
        className={
          cameraUsing
            ? "mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            : "hidden mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        }
      >
        Cancel
      </button>
      <div id="reader" className="mt-4" />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {scannedResult && (
        <p className="text-green-500">Scanned Code: {scannedResult}</p>
      )}
    </div>
  );
};

export default QRCodeScanner;
