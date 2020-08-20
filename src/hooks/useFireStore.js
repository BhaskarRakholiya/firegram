import { useState, useEffect } from "react";
import { projectFirebase } from "../firebase/config";

export const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    projectFirebase
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((snap) => {
          //   console.log(snap.data());
          documents.push({ ...snap.data(), id: snap.id });
        });
        // console.log(documents);
        setDocs(documents);
      });
  }, [collection]);
  return { docs };
};
