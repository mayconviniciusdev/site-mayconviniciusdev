import React from "react";

export const Button = () => {
  return (
    <div className="text-sm bg-blue p-2 rounded-lg hover:bg-blue/80">
        <button className="text-white">ENTRE EM CONTATO</button>
    </div>
  );
}

export const ButtonForm = () => {
  return (
    <div className="text-sm bg-white py-4 rounded-lg hover:bg-white/90 cursor-pointer">
        <button className="text-blue font-bold">ENTRE EM CONTATO</button>
    </div>
  );
}