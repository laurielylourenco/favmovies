import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addFavoriteMovie, fetchFavorites, fetchMoviesDiscover, fetchMoviesSearchName, removeFavoriteMovie } from "../api/movies";

export function useMoviesDiscover() {
  return useQuery({
    queryKey: ["moviesDiscover"],
    queryFn: () => fetchMoviesDiscover(),
    enabled: true, 
    staleTime: 1000 * 60 * 5, 
  });
}


export function useMoviesSearchName(name: string) {
  return useQuery({
    queryKey: ["moviesSearchName", name],
    queryFn: () => fetchMoviesSearchName(name),
    enabled: !!name, 
    staleTime: 1000 * 60 * 2, 
  });
}



export function useAddFavoriteMovie() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addFavoriteMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
    onError: (error) => {
      console.error("Erro ao adicionar favorito:", error);
    },
  });
}


export function useRemoveFavoriteMovie() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => removeFavoriteMovie(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
    onError: (error) => {
      console.error("Erro ao remover favorito:", error);
    },
  });
}


export function useFavoritesQuery() {
  return useQuery({
    queryKey: ['favorites'],
    queryFn: fetchFavorites,
    staleTime: 1000 * 60 * 5,
  });
}
