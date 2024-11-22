import React, { useState } from "react";
import DeleteIcon from "../../assets/delete.png";

const FilesList = ({ uploadedFiles, updateFileList }) => {
  const deleteFile = (file) => {
    // console.log("uploadedFiles", uploadedFiles);
    // console.log("name: ", file.name);
    const temp = uploadedFiles.filter((f) => f.name !== file.name);
    updateFileList(temp);
  };
  return (
    <div className="w-full">
      <ul id="files-list" className="flex flex-col space-y-4">
        {uploadedFiles.map((f, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center text-center"
          >
            <p>{f.name}</p>
            <img
              src={DeleteIcon}
              alt="delete Icon"
              className="w-4 h-4 cursor-pointer"
              onClick={() => deleteFile(f)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilesList;
