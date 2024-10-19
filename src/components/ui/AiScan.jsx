import React, { useState, useRef } from 'react';
import { FileUpload as UploadComponent } from '../../components/ui/file-upload.jsx';

export default function AiScan() {
  const [files, setFiles] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (uploadedFiles) => {
    if (uploadedFiles.length === 0) {
      setError("No files selected. Please upload a file.");
      return;
    }

    setError(null); // Clear previous errors
    setFiles(uploadedFiles);
    const file = uploadedFiles[0];

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result.split(',')[1]; // Convert image to base64
      setIsLoading(true);
      
      try {
        // Backend API call
        const response = await fetch('/api/ai-scan.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: base64Image }),
        });

        const data = await response.json();
        if (response.ok) {
          setResult(data.result);
        } else {
          setError("Error analyzing image. Please try again.");
        }
      } catch (error) {
        console.error("Error in API call:", error);
        setError("Error analyzing image. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">AI Scanner</h1>
        <UploadComponent onChange={handleFileUpload} fileInputRef={fileInputRef} />
        <button 
          onClick={handleButtonClick}
          className="mt-8 px-6 py-2 bg-[#4d309c] hover:bg-[#3f2585] text-white font-semibold rounded-md w-[40vw]">
          UPLOAD FILES
        </button>

        {isLoading && (
          <div className="mt-4 text-blue-600 font-semibold">Processing image, please wait...</div>
        )}

        {result && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Scan Result:</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-600 font-semibold">{error}</div>
        )}
      </div>
    </div>
  );
}
