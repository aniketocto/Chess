import React from "react";
import  './File.css';

const File = ({ files }) => {
  return (
    <div className="files">
      {files.map((file) => (
        <span key={file}>{file}</span>
      ))}
    </div>
  );
};

export default File;
