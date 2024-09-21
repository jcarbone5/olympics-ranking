//API
import { olympicsApi } from "../lib/api/olympicsApi";
import { AxiosError } from "axios";

//Interfaces
import { Olympics, CountryAndMedals } from "@/interfaces/olympics";

export const getMedalsByCountry = async (): Promise<CountryAndMedals[]> => {
  try {
    const {
      data: { results },
    } = await olympicsApi.get<Olympics>("/medals");

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
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
    throw new Error("Error getting information");
  }
};
