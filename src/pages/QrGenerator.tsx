import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import icon from "../assets/qr_center_icon.png"; // Import the icon from the assets folder

const QrGenerator: React.FC = () => {
  const [inputText, setInputText] = useState<string>(
    "https://www.instagram.com/angel_kiss_bakery/"
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <h1 className="text-xl font-bold">QR Code Generator with Icon</h1>
      <input
        type="text"
        placeholder="Enter text for QR code"
        value={inputText}
        onChange={handleInputChange}
        className="p-2 border rounded-lg w-full max-w-md"
      />
      <div className="relative">
        {/* QR Code */}
        <QRCodeSVG value={inputText} size={200} />

        {/* Centered Icon */}
        <img
          src={icon} // Use the imported icon
          alt="Custom Icon"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 40,
            height: 40,
            border: "2px solid white", // Optional: Add a border around the icon
            borderRadius: "50%",
          }}
        />
      </div>
      <p className="text-center">
        <strong>Generated Text:</strong> {inputText}
      </p>
    </div>
  );
};

export default QrGenerator;
