import React from "react";
import CardTemplate from "../templates/CardTemplate";

const Card = () => {
  return (
    <div className="flex gap-6 flex-wrap justify-around mt-10">
      <CardTemplate
        text={"Hello World"}
        bgImage={"assets/images/card-1.jpg"}
        newText={"My Americano is bitter but your smile makes is sweet"}
      />
      <CardTemplate
        text={"Life Happens; Coffee Helps"}
        bgImage={"assets/images/card-2.jpg"}
        newText={"Adulting is Hard; Coffee helps"}
      />
      <CardTemplate
        text={"Coffee is like a hug in a mug"}
        bgImage={"assets/images/card-3.jpg"}
        newText={"A sip of a coffee and a story"}
      />
    </div>
  );
};

export default Card;
