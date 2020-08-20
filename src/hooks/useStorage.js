import { useEffect, useState } from "react";
import { projectStorage, projectFirebase, timeStamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirebase.collection("images");
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const imageUrl = await storageRef.getDownloadURL();
        const createdAt = timeStamp();
        collectionRef.add({ url: imageUrl, createdAt });
        setUrl(imageUrl);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
