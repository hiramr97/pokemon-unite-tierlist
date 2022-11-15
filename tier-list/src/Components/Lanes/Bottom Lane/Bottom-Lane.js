import React from "react";

const BottomLane = ({ pokemon }) => {
  return (
    <div>
      <h1 className="Lane">Bottom Lane</h1>
      <h1 className="Container-Pokemon-Tier">
        <p className="letterTier">S</p>
        <img className="Pokemon" src={pokemon[9].image} />
        <img className="Pokemon" src={pokemon[17].image} />
        <img className="Pokemon" src={pokemon[25].image} />
        <img className="Pokemon" src={pokemon[26].image} />
        <img className="Pokemon" src={pokemon[30].image} />
        <img className="Pokemon" src={pokemon[41].image} />
      </h1>
      <h1 className="Container-Pokemon-Tier">
        <p className="letterTier">A</p>
        <img className="Pokemon" src={pokemon[1].image} />
        <img className="Pokemon" src={pokemon[4].image} />
        <img className="Pokemon" src={pokemon[5].image} />
        <img className="Pokemon" src={pokemon[6].image} />
        <img className="Pokemon" src={pokemon[7].image} />
        <img className="Pokemon" src={pokemon[10].image} />
        <img className="Pokemon" src={pokemon[12].image} />
        <img className="Pokemon" src={pokemon[13].image} />
        <img className="Pokemon" src={pokemon[15].image} />
        <img className="Pokemon" src={pokemon[16].image} />
        <img className="Pokemon" src={pokemon[18].image} />
        <img className="Pokemon" src={pokemon[22].image} />
        <img className="Pokemon" src={pokemon[27].image} />
        <img className="Pokemon" src={pokemon[28].image} />
        <img className="Pokemon" src={pokemon[29].image} />
        <img className="Pokemon" src={pokemon[33].image} />
        <img className="Pokemon" src={pokemon[34].image} />
        <img className="Pokemon" src={pokemon[35].image} />
        <img className="Pokemon" src={pokemon[38].image} />
        <img className="Pokemon" src={pokemon[39].image} />
      </h1>
      <h1 className="Container-Pokemon-Tier">
        <p className="letterTier">B</p>
        <img className="Pokemon" src={pokemon[2].image} />
        <img className="Pokemon" src={pokemon[3].image} />
        <img className="Pokemon" src={pokemon[8].image} />
        <img className="Pokemon" src={pokemon[11].image} />
        <img className="Pokemon" src={pokemon[20].image} />
        <img className="Pokemon" src={pokemon[23].image} />
        <img className="Pokemon" src={pokemon[31].image} />
        <img className="Pokemon" src={pokemon[32].image} />
        <img className="Pokemon" src={pokemon[37].image} />
        <img className="Pokemon" src={pokemon[42].image} />
      </h1>
      <h1 className="Container-Pokemon-Tier">
        <p className="letterTier">C</p>
        <img className="Pokemon" src={pokemon[14].image} />
        <img className="Pokemon" src={pokemon[40].image} />
        <img className="Pokemon" src={pokemon[43].image} />
      </h1>
      <h1 className="Container-Pokemon-Tier">
        <p className="letterTier">D</p>
        <img className="Pokemon" src={pokemon[0].image} />
        <img className="Pokemon" src={pokemon[19].image} />
        <img className="Pokemon" src={pokemon[21].image} />
        <img className="Pokemon" src={pokemon[24].image} />
        <img className="Pokemon" src={pokemon[36].image} />
      </h1>
    </div>
  );
};
export default BottomLane;
