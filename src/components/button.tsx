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
    <button className="text-blue text-sm rounded-lg bg-white hover:bg-white/90 font-bold py-4 w-full">ENTRE EM CONTATO</button>);
}