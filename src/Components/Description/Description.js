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
      "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
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
    console.log(data)
    return (
      <div>
        <h1 className="name">{data.display_name}</h1>
        <Lane data={data}/>
        <h3 className="descriptionStyling">Role</h3>
        <h3 className="descriptionStyling">{data.tags.role}</h3>
        <h3 className="descriptionStyling">Difficulty</h3>
        <h3 className="descriptionStyling">{data.tags.difficulty}</h3>
        <h3 className="descriptionStyling">Recommended Build</h3>
        <div className="Container-Build">
          <Build data={data}/>
          <Build1 data={data}/>
          <Build2 data={data}/>
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
