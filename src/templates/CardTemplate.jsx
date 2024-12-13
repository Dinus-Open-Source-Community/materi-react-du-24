import React, { useState } from "react";

const CardTemplate = ({ text, bgImage, children, newText }) => {
  const [quote, setQuote] = useState(0);

  return (
    <div
      onMouseOver={() => setQuote(1)}
      onMouseOut={() => setQuote(0)}
      className="w-96 h-96 bg-center bg-cover flex justify-center items-center transition-all duration-300"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {quote == 0 ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-xl font-semibold px-4 py-2 bg-black bg-opacity-70">
            {text}
          </h1>
          {children}
        </div>
      ) : (
        <div className=" bg-black/70 w-full h-full cursor-pointer backdrop-blur-md flex justify-center items-center">
          <h1 className="text-white text-xl font-semibold text-center">
            {newText}
          </h1>
        </div>
      )}
    </div>
  );
};

export default CardTemplate;
