import React from "react";
import data from "../Data/data.json";
import Lane from "./Lane";
import Build from "./Build";

const Description = () => {
  console.log(data.builds[0].lane);
  return (
    <div>
      <h1>{data.display_name}</h1>
      <Lane/>
      <h3>{data.tags.role}</h3>
      <h3>{data.tags.difficulty}</h3>
      <Build/>
    </div>
  );
};
export default Description;
