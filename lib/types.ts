export type GENRE = {
  id: number;
  name: string;
};

export type PRODUCTION_COMPANY = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type PRODUCTION_COUNTRY = {
  iso_3166_1: string;
  name: string;
};

export type SPOKEN_LANGUAGE = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type MOVIES_TYPE = {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: string | null;
  budget?: number;
  genres?: GENRE[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: PRODUCTION_COMPANY[];
  production_countries?: PRODUCTION_COUNTRY[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SPOKEN_LANGUAGE[];
  status?: string;
  tagline?: string;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  index?: number;
};

export type MOVIE_GENRES_TYPE = {
  map(
    arg0: (genre: MOVIE_GENRES_TYPE) => import("react").JSX.Element,
  ): import("react").ReactNode;
  id: number;
  name: string;
};
