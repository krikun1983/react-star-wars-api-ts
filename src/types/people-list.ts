export interface SwapiPeopleType {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}

export interface PeopleResultsBody {
  results: SwapiPeopleType[];
  next: string;
  previous: string;
}

export type PeopleListState = {
  id: string;
  name: string;
  img: string;
};

export type PeopleListStateProps = {
  people: PeopleListState[];
};

export type PropsPeopleNavigation = {
  gerResource: (url: string) => Promise<void>;
  prevPage: string;
  nextPage: string;
  currentPage: number;
};
