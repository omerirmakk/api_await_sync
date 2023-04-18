import Link from "next/link";
import React, { useEffect, useState } from "react";

const apiawait = () => {
  const [dataAuthor, setDataAuthor] = useState([]);
  useEffect(() => {
    const fetchAuthor = async () => {
      const data = await (
        await fetch("https://poetrydb.org/author/jane%20taylor")
      ).json();
      setDataAuthor(data);
    };
    fetchAuthor();
  }, []);
  console.log(dataAuthor);
  return (
    <>
      <Link href="/">Home</Link>
      <div
        style={{
          width: "50rem",
          height: "50rem",
          backgroundColor: "bisque",
          color: "darkgrey",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        <div>
          {dataAuthor.map((indi) => {
            return (
              <>
                <h2>{indi.title}</h2>
                <p>{indi.author}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default apiawait;
