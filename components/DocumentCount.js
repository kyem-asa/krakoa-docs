import { useState, useEffect } from "react";

function DocumentCount() {
  const [documents, setDocuments] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://gardens-of-krakoa.cyclic.app/api/v1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDocuments(data);
        setCount(data.length);
      })
      .catch((err) => console.error(err));
  }, []);

  return <div>There are currently {count} characters in the API.</div>;
}

export default DocumentCount;
