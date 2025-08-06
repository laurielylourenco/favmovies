import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { MovieCard } from "@/components/MovieCard";
import { Navbar } from "@/components/Navbar";
import { useMoviesDiscover, useMoviesSearchName, useFavoritesQuery } from "../services/query/movie"; // 1. Importe o novo hook

export const Search = () => {
  const [query, setQuery] = useState("");

  const {
    data: searchData,
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
  } = useMoviesSearchName(query);

  const {
    data: discoverData,
    isLoading: isLoadingDiscover,
    isError: isErrorDiscover,
  } = useMoviesDiscover();

  const { data: favorites } = useFavoritesQuery();

  const favoriteIds = new Set(favorites?.map((fav: any) => fav.tmdb_id) || []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery.trim());
  };

  const isSearching = query.length > 0;
  const moviesToDisplay = isSearching
    ? searchData?.results || []
    : discoverData?.results || [];

  const isLoading = (isSearching && isLoadingSearch) || (!isSearching && isLoadingDiscover);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Descubra Filmes Incríveis</h1>
          <p className="text-muted-foreground mb-6">
            Busque por seus filmes favoritos e adicione-os à sua lista pessoal
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            {isSearching
              ? `Resultados da busca (${moviesToDisplay.length})`
              : "Filmes em Destaque"}
          </h2>

          {isSearching && !isLoadingSearch && moviesToDisplay.length === 0 && (
            <p className="text-muted-foreground">
              Nenhum filme encontrado. Tente buscar por outro termo.
            </p>
          )}
        </div>

        {isLoading && (
          <p className="text-muted-foreground">Carregando...</p>
        )}

        {(isErrorSearch || isErrorDiscover) && (
          <p className="text-red-500">Erro ao carregar filmes</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {moviesToDisplay.map((movie: any) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              isFavorited={favoriteIds.has(movie.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};