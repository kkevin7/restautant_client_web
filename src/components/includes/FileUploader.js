import React from "react";
import { v4 as uuidv4 } from "uuid";

const FileUploader = ({
  url,
  name,
  accept,
  storageRef,
  onUploadStart,
  onUploadError,
  onUploadSuccess,
  onProgress,
}) => {

  const extractExtension = (filename) => {
    var ext = /(?:\.([^.]+))?$/.exec(filename);
    if (ext != null && ext[0] != null) {
      return ext[0];
    } else {
      return "";
    }
  };

  const generateRandomFilename = () => uuidv4();

  const handleUploadStart = (snapshot) => {
    let progress = Number(
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    ).toFixed(2);
    onProgress(progress);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    let filename = generateRandomFilename() + extractExtension(file.name);
    const uploadTask = storageRef.child(filename).put(file);
    onUploadStart(file, uploadTask);
    uploadTask.on("state_changed", handleUploadStart, onUploadError, () =>
      onUploadSuccess(filename)
    );
  };

  return (
    <div>
      <input accept={accept} name={name} type="file" onChange={handleUpload} />
      <img
        style={{ maxHeight: 300, maxWidth: 300, marginTop: 20 }}
        src={url}
        alt=""
      />
    </div>
  );
};

export default FileUploader;
