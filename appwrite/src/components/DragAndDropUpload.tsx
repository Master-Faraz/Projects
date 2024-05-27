import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Appwrite } from 'appwrite';

interface FileWithPreview extends File {
  preview: string;
}

const DragAndDropUpload: React.FC<{ onUploadSuccess: (response: any) => void }> = ({ onUploadSuccess }) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const appwrite = new Appwrite();

  useEffect(() => {
    // Configure Appwrite with your project endpoint and ID
    appwrite
      .setEndpoint('YOUR_APPWRITE_ENDPOINT')
      .setProject('YOUR_PROJECT_ID');
  }, []); // Empty dependency array to run only once

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/jpeg, image/png, image/gif',
    onDrop: async (acceptedFiles: File[]) => {
      setFiles(
        acceptedFiles.map((file) => ({
          ...file,
          preview: URL.createObjectURL(file),
        }))
      );

      try {
        for (const file of acceptedFiles) {
          const storage = appwrite.storage();
          const response = await storage.createFile('YOUR_STORAGE_FUNCTION', file.name, file);
          console.log('Upload successful:', response);
          onUploadSuccess(response);
        }
      } catch (error) {
        console.error('Upload failed:', error);
        // Handle upload errors gracefully (e.g., display an error message)
      }
    },
  });

  return (
    <div {...getRootProps({ className: `${isDragActive ? 'active' : ''}` })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop your images here...</p>
      ) : (
        <p>Drag & drop images to upload or click to select</p>
      )}
      {files.length > 0 && (
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DragAndDropUpload;
