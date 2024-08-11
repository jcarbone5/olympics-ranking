import Image from "next/image";

//Interfaces
import { Country } from "@/interfaces/olympics";

interface CountryHeaderProps {
  country: Country;
  rank: number;
}

export const CountryHeader = ({ country, rank }: CountryHeaderProps) => {
  return (
    <div className="flex flex-row items-center space-x-2 text-md">
      <Image
        src={country.flag!}
        alt={country.name}
        width={60}
        height={30}
        className="h-8 w-12 object-cover border border-[0.3px]"
      />
      <span className="font-semibold">#{rank}</span>
      <h1 className="font-semibold">{country.name}</h1>
    </div>
  );
};
