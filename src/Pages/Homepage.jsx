import React from "react";
import Picture from "../components/Pictures";
import data from "../Helper/data";
const Homepage = () => {
  return (
    <div className="home-container">
      <h1>IMAGE GALLERY</h1>
      <div className="container">
        {data.map((item) => {
          const { photographer, src } = item;
          return <Picture pht={photographer} src={src.large} />;
        })}
      </div>
    </div>
  );
};
export default Homepage;