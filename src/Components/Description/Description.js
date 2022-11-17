import React, { useEffect, useState } from "react";
import Lane from "./Lane";
import Build from "./Build";
import Build1 from "./Build1";
import Build2 from "./Build2";
import pictures from "../Data/pictures.json";
import { useParams } from "react-router-dom";

const Description = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const { id } = useParams();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ad13810b9emsh0ac23710be4e1c6p1c0d9fjsn5c53b41e114a",
      "X-RapidAPI-Host": "pokemon-unite-pokemons.p.rapidapi.com",
    },
  };

  const fetchPokemon = () => {
    fetch(
      `https://pokemon-unite-pokemons.p.rapidapi.com/pokemons/${id}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (data === undefined) return;

  let newData = Object.values(data);
  const pictureData = +data.id + -1;
  if (newData[2] === id) {
    return (
      <div>
        <h1 className="name">{data.display_name}</h1>
        <Lane />
        <h3 className="descriptionStyling">Role</h3>
        <h3 className="descriptionStyling">{data.tags.role}</h3>
        <h3 className="descriptionStyling">Difficulty</h3>
        <h3 className="descriptionStyling">{data.tags.difficulty}</h3>
        <h3 className="descriptionStyling">Recommended Build</h3>
        <div className="Container-Build">
          <Build />
          <Build1 />
          <Build2 />
        </div>
        <img
          className="DescriptionPokemon"
          src={pictures[pictureData].image}
          alt=""
        />
      </div>
    );
  }
};
export default Description;
