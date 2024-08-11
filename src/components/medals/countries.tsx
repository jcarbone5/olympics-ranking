"use client";

//Components
import { CountryItem } from "@/components/medals/country-item";
import { CountriesSkeleton } from "@/components/medals/countries-skeleton";

//Hooks
import { useMedalsByCountry } from "@/hooks/useMedalsByCountry";

export const Countries = () => {
  const { data, isLoading, error } = useMedalsByCountry();

  if (error) return <h1>{error.message}</h1>;

  if (isLoading) return <CountriesSkeleton />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
      {data.map((item) => (
        <CountryItem key={item.country.code} item={item} />
      ))}
    </div>
  );
};
