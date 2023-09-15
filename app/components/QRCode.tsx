"use client"

import React, { useState } from 'react';
import { QRCodeSVG  } from 'qrcode.react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const [button, setButton] = useState(false);
  const handleInputChange = (e: any) => {
    setText(e.target.value);
      if(e.target.value) {
        setButton(true);
      }
      else {
        setButton(false);
      }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <h1 className="text-xl font-semibold mb-4">QR Code Generator</h1>
      {text && (
        <div className="p-4">
          <center>
            <QRCodeSVG value={text} />
          </center>
        </div>
      )}
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={handleInputChange}
        className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
      />
      {
        button ? (
          <button className='w-full p-2 border bg-blue-500 text-white rounded-lg hover:border-blue-600 mt-4'>Save QR Code</button>
        ) : null
      }
      
    </div>
  );
};

export default QRCodeGenerator;