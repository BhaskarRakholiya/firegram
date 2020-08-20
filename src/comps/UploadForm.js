import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleChangeInput = (e) => {
    let selected = e.target.files[0];
    console.log(selected.type);
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("please select the image file in png & jpg formet");
    }
  };
  return (
    <div>
      <input type="file" onChange={handleChangeInput} />
      <div className="output">
        <div className="error">{error ? error : null}</div>
        <div className="fileName">{file ? file.name : null}</div>
        {file && <ProgressBar setFile={setFile} file={file} />}
      </div>
    </div>
  );
};

export default UploadForm;
