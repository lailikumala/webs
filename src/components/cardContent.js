import React from "react";

const CardContent = ({ id, title, desc }) => {
  return (
    <div key={id} className="p-3 rounded-lg bg-white drop-shadow-md m-3">
      <p className="font-semibold">{title}</p>
      <p>{desc}</p>
    </div>
  );
};

export default CardContent;
