import Olympics from "@/assets/icons/olympics";
import React from "react";

export const Header = () => {
  return (
    <header className="max-w-3xl mx-auto flex flex-row items-center space-x-3 my-5">
      <Olympics height={60} width={100} />
      <h1 className="text-2xl font-semibold gradient-text">Ranking</h1>
    </header>
  );
};
