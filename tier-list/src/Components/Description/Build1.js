import React from "react";
import data from "../Data/data.json";

const Build1 = () => {
  console.log(data.builds[0].held_items);
  if (data.builds[0].held_items[1] === "Aoes Cookie") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Aeos+Cookie.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Assault Vest") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Assault+Vest.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Attack Weight") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Attack+Weight.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Buddy Barrier") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Buddy+Barrier.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Choice Specs") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Choice+Specs.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Energy Amplifier") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Energy+Amplifier.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Exp Share") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Exp+Share.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Float Stone") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Float+Stone.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Focus Band") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Focus+Band.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Leftovers") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Leftovers.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Muscle Band") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Muscle+Band.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Razor Claw") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Razor+Claw.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Rocky Helmet") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Rocky+Helmet.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Scope Lens") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Scope+Lens.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Score Shield") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Score+Shield.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Shell Bell") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Shell+Bell.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Sp. Atk Specs") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Sp.+Atk+Specs.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Weakness Policy") {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Weakness+Policy.png"
        />
      </div>
    );
  } else {
    return (
      <div className="">
        <h3></h3>
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Wise+Glasses.png"
        />
      </div>
    );
  }
};
export default Build1;
