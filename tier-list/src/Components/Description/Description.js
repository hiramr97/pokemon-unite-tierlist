import React, { useState } from "react";
import data from "../Data/data.json";
import Lane from "./Lane";
import Build from "./Build";
import Build1 from "./Build1";
import Build2 from "./Build2";
import pictures from "../Data/pictures.json";
import { useParams } from "react-router-dom";

const Description = () => {
  const { id } = useParams();
  const newData = Object.values(data);
  const pictureData = data.id
  console.log(pictureData)
  if (newData[2] === id) {
    return (
      <div>
        <h1 className="name">{data.display_name}</h1>
        <Lane />
        <h3 className="descriptionStyling">Role</h3>
        <h3 className="descriptionStyling">{data.tags.role}</h3>
        <h3 className="descriptionStyling">
          Difficulty
        </h3>
        <h3 className="descriptionStyling">{data.tags.difficulty}</h3>
        <h3 className="descriptionStyling">Recommended Build</h3>
        <div className="Container-Build">
          <Build />
          <Build1 />
          <Build2 />
        </div>
        <img className="DescriptionPokemon" src={pictures[pictureData].image}/>
      </div>
    );
  }
};
export default Description;
