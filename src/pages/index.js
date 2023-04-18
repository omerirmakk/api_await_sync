import Link from "next/link";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [dataMovie, setDataMovie] = useState(null);
  useEffect(() => {
    const dataFetching = async () => {
      const data = await (await fetch("https://dogapi.dog/api/facts")).json();
      setDataMovie(data.facts);
    };
    dataFetching();
  }, []);
  return (
    <>
      <Link href="/apiawait">Api next</Link>

      <div
        style={{
          width: "50rem",
          height: "20rem",
          backgroundColor: "blueviolet",
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          paddingTop: "2rem",
        }}
      >
        <div>{dataMovie}</div>
        <hr />
        <div>{dataMovie}</div>
      </div>
    </>
  );
};

export default Home;
