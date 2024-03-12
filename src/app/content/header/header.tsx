import React from "react";

import { Button } from "@/components/button";
import { Social } from "@/components/social";

export const Header = () => {
  return (
    <div className="my-14">
      <div className="flex justify-center gap-4 text-blue text-b">
        <Social/>
      </div>
      
      <div className="mt-8 flex justify-center items-center gap-4 font-semibold text-sm text-blue-cyan cursor-pointer">
        <p>QUEM SOU?</p>
        <p>PORTFÓLIO</p>
        <p>MEUS SERVIÇOS</p>
        <Button/>
      </div>
    </div>
    
  );
}