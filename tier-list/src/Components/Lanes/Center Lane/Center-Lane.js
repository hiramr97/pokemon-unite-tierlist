import React from "react";
import { Link } from "react-router-dom";
import pokemon from "/home/hiramr97/sei/projects/pokemon-unite-tierlist/tier-list/src/Components/Data/pictures.json";

const CenterLane = () => {
  return (
    <div>
      <h1 className="Lane">Center Lane</h1>
      <h1 className="Container-Pokemon-Tier">
        <p className="letterTier">S</p>
        <Link>
          <img className="Pokemon" src={pokemon[14].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[24].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[29].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[38].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[42].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[43].image} />
        </Link>
      </h1>
      <h1 className="Container-Pokemon-Tier">
      <p className="letterTier">A</p>
        <Link>
          <img className="Pokemon" src={pokemon[0].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[1].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[3].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[8].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[12].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[15].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[27].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[32].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[36].image} />
        </Link>
      </h1>
      <h1 className="Container-Pokemon-Tier">
      <p className="letterTier">B</p>
        <Link>
          <img className="Pokemon" src={pokemon[4].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[6].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[13].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[16].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[18].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[19].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[21].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[22].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[23].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[26].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[31].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[34].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[35].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[39].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[41].image} />
        </Link>
      </h1>
      <h1 className="Container-Pokemon-Tier">
      <p className="letterTier">C</p>
        <Link>
          <img className="Pokemon" src={pokemon[2].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[7].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[25].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[28].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[37].image} />
        </Link>
      </h1>
      <h1 className="Container-Pokemon-Tier">
      <p className="letterTier">D</p>
        <Link>
          <img className="Pokemon" src={pokemon[5].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[9].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[10].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[11].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[17].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[20].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[30].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[33].image} />
        </Link>
        <Link>
          <img className="Pokemon" src={pokemon[40].image} />
        </Link>
      </h1>
    </div>
  );
};
export default CenterLane;
