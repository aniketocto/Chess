import React from "react";
import  './File.css';
import { getCharacter } from "../../../../utils/constants";

const File = ({ files }) => {
  return (
    <div className="files">
      {files.map((file) => (
        <span key={file}>{getCharacter(file)}</span>
      ))}
    </div>
  );
};

export default File;
