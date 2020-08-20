import React from "react";
import { useFireStore } from "../hooks/useFireStore";

const ImageGrid = () => {
  const { docs } = useFireStore("images"); //collection call from firestorage
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          console.log(doc);
          return (
            <div className="img-wrap" key={doc.id}>
              <img src={doc.url} />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
