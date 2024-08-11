export interface Olympics {
  last_updated: Date;
  length: number;
  results: CountryAndMedals[];
}

export interface CountryAndMedals {
  country: Country;
  medals: Medals;
  rank: number;
}

export interface Country {
  code: string;
  iso_alpha_2: string;
  iso_alpha_3: string;
  name: string;
  flag?: string;
}

export interface Medals {
  bronze: number;
  gold: number;
  silver: number;
  total: number;
}
