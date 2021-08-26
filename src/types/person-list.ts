export type MatchProps = {
  id: string;
};

export type PersonInfoApi = {
  height: string;
  mass: string;
  skin_color: string;
  eye_color: string;
  hair_color: string;
  birth_year: string;
  gender: string;
  name: string;
  films: string[];
};

export type Res = {
  title: string;
  data: string;
};

export type PersonFilmsPromise = {
  title: string;
  episode_id: number;
};
