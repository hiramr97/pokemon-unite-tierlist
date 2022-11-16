import React from "react";

const CenterLane = ({ pokemon }) => {
  return (
    <div>
      <h1 className="Lane">Center Lane</h1>
      <h1 className="Container-Pokemon-Tier">
        <p className="letterTier">S</p>
        <img className="Pokemon" src={pokemon[18].image} alt="" />
        <img className="Pokemon" src={pokemon[31].image} alt="" />
        <img className="Pokemon" src={pokemon[34].image} alt="" />
      </h1>
      <h1 className="Container-Pokemon-Tier">
        <p className="letterTier">A</p>
        <img className="Pokemon" src={pokemon[0].image} alt="" />
        <img className="Pokemon" src={pokemon[1].image} alt="" />
        <img className="Pokemon" src={pokemon[2].image} alt="" />
        <img className="Pokemon" src={pokemon[6].image} alt="" />
        <img className="Pokemon" src={pokemon[9].image} alt="" />
        <img className="Pokemon" src={pokemon[10].image} alt="" />
        <img className="Pokemon" src={pokemon[21].image} alt="" />
        <img className="Pokemon" src={pokemon[29].image} alt="" />
      </h1>
      <h1 className="Container-Pokemon-Tier">
        <p className="letterTier">B</p>
        <img className="Pokemon" src={pokemon[3].image} alt="" />
        <img className="Pokemon" src={pokemon[11].image} alt="" />
        <img className="Pokemon" src={pokemon[13].image} alt="" />
        <img className="Pokemon" src={pokemon[14].image} alt="" />
        <img className="Pokemon" src={pokemon[16].image} alt="" />
        <img className="Pokemon" src={pokemon[17].image} alt="" />
        <img className="Pokemon" src={pokemon[20].image} alt="" />
        <img className="Pokemon" src={pokemon[25].image} alt="" />
        <img className="Pokemon" src={pokemon[27].image} alt="" />
        <img className="Pokemon" src={pokemon[28].image} alt="" />
        <img className="Pokemon" src={pokemon[33].image} alt="" />
      </h1>
      <h1 className="Container-Pokemon-Tier">
        <p className="letterTier">C</p>
        <img className="Pokemon" src={pokemon[24].image} alt="" />
        <img className="Pokemon" src={pokemon[5].image} alt="" />
        <img className="Pokemon" src={pokemon[19].image} alt="" />
        <img className="Pokemon" src={pokemon[22].image} alt="" />
        <img className="Pokemon" src={pokemon[30].image} alt="" />
      </h1>
      <h1 className="Container-Pokemon-Tier">
        <p className="letterTier">D</p>
        <img className="Pokemon" src={pokemon[4].image} alt="" />
        <img className="Pokemon" src={pokemon[7].image} alt="" />
        <img className="Pokemon" src={pokemon[8].image} alt="" />
        <img className="Pokemon" src={pokemon[12].image} alt="" />
        <img className="Pokemon" src={pokemon[15].image} alt="" />
        <img className="Pokemon" src={pokemon[23].image} alt="" />
        <img className="Pokemon" src={pokemon[26].image} alt="" />
        <img className="Pokemon" src={pokemon[32].image} alt="" />
      </h1>
    </div>
  );
};
export default CenterLane;
