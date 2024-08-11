//API
import { olympicsApi } from "../lib/api/olympicsApi";

//Interfaces
import { Olympics, CountryAndMedals } from "@/interfaces/olympics";

export const getMedalsByCountry = async (): Promise<CountryAndMedals[]> => {
  const {
    data: { results },
  } = await olympicsApi.get<Olympics>("/medals/all");

  const countriesWithFlag = results.map(({ country, medals, rank }) => {
    country.flag =
      country?.iso_alpha_2 &&
      `https://flagcdn.com/${country.iso_alpha_2.toLowerCase()}.svg`;

    return {
      country,
      medals,
      rank,
    };
  });

  return countriesWithFlag;
};
