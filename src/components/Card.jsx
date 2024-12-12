import React from "react";
import CardTemplate from "../templates/CardTemplate";

const Card = () => {
  return (
    <div className="flex justify-around mt-10">
      <CardTemplate
        text={"Hello World"}
        bgImage={"assets/images/card-1.jpg"}
        newText={"My Americano is bitter but your smile makes is sweet"}
      />
      <CardTemplate
        text={"Life Happens; Coffee Helps"}
        bgImage={"assets/images/card-2.jpg"}
        newText={"Adulting is Hard; Coffee helps"}
      >
        <p className="text-white px-2 py-1 bg-green-400">RATING *****</p>
      </CardTemplate>
      <CardTemplate
        text={"Coffee is like a hug in a mug"}
        bgImage={"assets/images/card-3.jpg"}
        newText={"A sip of a coffee and a story"}
      />
    </div>
  );
};

export default Card;
