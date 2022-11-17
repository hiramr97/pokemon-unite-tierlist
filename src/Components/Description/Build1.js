import React from "react";

const Build2 = ({data}) => {
  if (data.builds[0].held_items[1] === "Aoes Cookie") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Aeos+Cookie.png" alt="Aoes Cookie"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Assault Vest") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Assault+Vest.png" alt="Assualt Vest"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Attack Weight") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Attack+Weight.png" alt="Atack Weight"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Buddy Barrier") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Buddy+Barrier.png" alt="Buddy Barrier"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Choice Specs") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Choice+Specs.png" alt="Choice Specs"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Energy Amplifier") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Energy+Amplifier.png" alt="Energy Amplifier"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Exp Share") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Exp+Share.png" alt="Exp Share"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Float Stone") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Float+Stone.png" alt="Float Stone"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Focus Band") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Focus+Band.png" alt="Focus Band"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Leftovers") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Leftovers.png" alt="Leftovers"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Muscle Band") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Muscle+Band.png" alt="Muscle Band"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Razor Claw") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Razor+Claw.png" alt="Razor Claw"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Rocky Helmet") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Rocky+Helmet.png" alt="Rocky Helmet"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Scope Lens") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Scope+Lens.png" alt="Scope Lens"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Score Shield") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Score+Shield.png" alt="Score Shield"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Shell Bell") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Shell+Bell.png" alt="Shell Bell"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Sp. Atk Specs") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Sp.+Atk+Specs.png" alt="Sp. Atk Specs"
        />
      </div>
    );
  } else if (data.builds[0].held_items[1] === "Weakness Policy") {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Weakness+Policy.png" alt="Weakness Policy"
        />
      </div>
    );
  } else {
    return (
      <div className="">
        <img
          className="items"
          src="https://d275t8dp8rxb42.cloudfront.net/items/held/Wise+Glasses.png" alt="Wise Glasses"
        />
      </div>
    );
  }
};
export default Build2;
