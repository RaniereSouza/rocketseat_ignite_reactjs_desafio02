// BÔNUS: Custom Hook para manipular os dados e lidar com a API
import { useState, useEffect } from "react";

import { GenreResponseProps } from "../@types/GenreResponseProps";
import { MovieProps }         from "../@types/MovieProps";

import { api } from "../services/api";

export function useMovies() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres,          _setGenres]         = useState<GenreResponseProps[]>([]);
  const [movies,          _setMovies]         = useState<MovieProps[]>([]);
  const [selectedGenre,   _setSelectedGenre]  = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      _setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      _setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      _setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return {
    genres,
    selectedGenre,
    selectedGenreId, setSelectedGenreId,
    movies
  };
}