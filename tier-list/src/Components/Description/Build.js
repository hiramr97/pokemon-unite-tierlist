import React from "react";
import data from "../Data/data.json";

const Build = () => {
  if (data.builds[0].held_items[0] === "Aoes Cookie") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Aeos+Cookie.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Assault Vest") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Assault+Vest.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Attack Weight") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Attack+Weight.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Buddy Barrier") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Buddy+Barrier.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Choice Specs") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Choice+Specs.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Energy Amplifier") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Energy+Amplifier.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Exp Share") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Exp+Share.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Float Stone") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Float+Stone.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Focus Band") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Focus+Band.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Leftovers") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Leftovers.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Muscle Band") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Muscle+Band.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Razor Claw") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Razor+Claw.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Rocky Helmet") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Rocky+Helmet.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Scope Lens") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Scope+Lens.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Score Shield") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Score+Shield.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Shell Bell") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Shell+Bell.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Sp. Atk Specs") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Sp.+Atk+Specs.png"
        />
      </div>
    );
  } else if (data.builds[0].held_items[0] === "Weakness Policy") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Weakness+Policy.png"
        />
      </div>
    );
  } else {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Wise+Glasses.png"
        />
      </div>
    );
  }
};
export default Build;
