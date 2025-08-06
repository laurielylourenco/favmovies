import { useQuery } from "@tanstack/react-query";
import { fetchMoviesDiscover, fetchMoviesSearchName } from "../api/movies";

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
