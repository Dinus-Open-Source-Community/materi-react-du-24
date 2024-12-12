import React, { useState } from "react";

const CardTemplate = ({ text, bgImage, children, newText }) => {
  const [quote, setQuote] = useState(text);

  function handleNextQuote() {
    setQuote(newText);
  }
  return (
    <div
      className="w-96 h-96 bg-center bg-cover flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-white px-4 py-2 bg-black bg-opacity-50">{quote}</h1>
      {children}
      <button
        className="px-3 py-2 bg-green-500 mt-5 text-white"
        onClick={handleNextQuote}
      >
        New Quote
      </button>
    </div>
  );
};

export default CardTemplate;
