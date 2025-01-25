import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QrScanner: React.FC = () => {
  const [data, setData] = useState<string>("No result");
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader", // Div ID where the scanner will be rendered
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText) => {
        setData(decodedText);
        scanner.clear(); // Stop scanning after successful scan
      },
      (error) => {
        console.warn("QR Code scan error:", error);
      }
    );

    scannerRef.current = scanner;

    return () => {
      scannerRef.current?.clear();
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <h1 className="text-xl font-bold">QR Code Scanner</h1>
      <div id="reader" className="w-full max-w-md border rounded-lg"></div>
      <div className="p-4 border rounded-lg bg-gray-100 w-full max-w-md">
        <p className="text-center">
          <strong>Scanned Data:</strong> {data}
        </p>
      </div>
    </div>
  );
};

export default QrScanner;
