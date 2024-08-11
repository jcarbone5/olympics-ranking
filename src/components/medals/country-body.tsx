//Interfaces
import { Medals } from "@/interfaces/olympics";

interface CountryBodyProps {
  medals: Medals;
}

export const CountryBody = ({ medals }: CountryBodyProps) => {
  return (
    <div className="flex flex-row items-center space-x-3">
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-yellow-500">{medals.gold}</span>
        <span className="text-xs text-muted-foreground">Gold</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-gray-400">{medals.silver}</span>
        <span className="text-xs text-muted-foreground">Silver</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-orange-500">
          {medals.bronze}
        </span>
        <span className="text-xs text-muted-foreground">Bronze</span>
      </div>
    </div>
  );
};
