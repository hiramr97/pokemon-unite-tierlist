import React from "react";
import data from "../Data/data.json";

const Lane = () => {
  if (data.builds[0].lane === "Top") {
    return (
      <div className="descriptionStyling">
        <h3>Recommended Lane</h3>
        <img
          className="lane"
          src="https://img.game8.co/3409891/cee3edbdb51f0ed42485624971cf9ddc.png/show" alt="top-lane"
        />
      </div>
    );
  } else if (data.builds[0].lane === "Center") {
    return (
      <div className="descriptionStyling">
        <h3>Recommended Lane</h3>
        <img
          className="lane"
          src="https://img.game8.co/3409890/9da8fdf8083a838e6fe73cb54aeeff66.png/show"alt="center-lane"
        />
      </div>
    );
  } else {
    return (
      <div className="descriptionStyling">
        <h3>Recommended Lane</h3>
        <img
          className="lane"
          src="https://img.game8.co/3409892/674cb33b1a2b60deb07ccb0c48d89e1e.png/show" alt="bottom-lane"
        />
      </div>
    );
  }
};
export default Lane
