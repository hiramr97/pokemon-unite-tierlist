import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ pokemon }) => {
  const data = pokemon.map((pictures) => {
    return (
      <Link to={`/description/${pictures.name}`}>
        <img className="Pokemon" id={pictures.name} src={pictures.image} />
      </Link>
    );
  });
  return <div className="Container-Pokemon">{data}</div>;
};
export default Homepage;
