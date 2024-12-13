import React from "react";

const Jumbotron = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('assets/images/card-1.jpg')" }}
    >
      <h1 className="bg-black/70 py-3 px-5 text-white text-2xl italic">
        Life Happens; Coffee Helps
      </h1>
      <button className="bg-green-500 text-white px-2 py-1 mt-5 rounded-xl">
        Change Quote
      </button>
    </div>
  );
};

export default Jumbotron;
