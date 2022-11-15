import React from "react";
import data from "../Data/data.json";
import Lane from "./Lane";
import Build from "./Build";
import Build1 from "./Build1";
import Build2 from "./Build2";

const Description = () => {
  console.log(data.builds[0].lane);
  return (
    <div>
      <h1 className="name">{data.display_name}</h1>
      <Lane />
      <h3 className="descriptionStyling" >Role</h3>
      <h3 className="descriptionStyling">{data.tags.role}</h3>
      <h3 className="descriptionStyling">Difficulty {data.tags.difficulty}</h3>
      <h3 className="descriptionStyling">Recommended Build</h3>
      <div className="Container-Build">
      <Build />
      <Build1 />
      <Build2 />
      </div>
    </div>
  );
};
export default Description;
