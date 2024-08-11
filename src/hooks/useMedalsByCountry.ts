"use client";

import { useQuery } from "@tanstack/react-query";

//API
import { getMedalsByCountry } from "@/actions/getMedalsByCountry";

export const useMedalsByCountry = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["medals-by-country"],
    queryFn: () => getMedalsByCountry(),
  });

  return { data, isLoading, error };
};
