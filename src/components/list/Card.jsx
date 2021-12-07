import React from "react";

const Card = ({ matchName }) => {
  const match = matchName.split(" ");
  const date = match.splice(3, 1)[0];

  return (
    <div className="flex items-center justify-between w-11/12 h-20 p-5 mx-auto my-4 text-xl font-medium bg-gray-100 shadow-md cursor-pointer md:w-9/12 rounded-2xl hover:shadow-lg">
      <div>{match.join(" ")}</div>
      <div>{date}</div>
    </div>
  );
};

export default Card;
