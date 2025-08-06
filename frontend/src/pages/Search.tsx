import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { MovieCard } from '@/components/MovieCard';
import { Navbar } from '@/components/Navbar';
import { searchMovies, mockMovies, Movie } from '@/data/movies';

export const Search = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      const results = searchMovies(query);
      setSearchResults(results);
      setHasSearched(true);
    } else {
      setSearchResults([]);
      setHasSearched(false);
    }
  };

  const displayMovies = hasSearched ? searchResults : mockMovies.slice(0, 8);

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
            {hasSearched ? 
              `Resultados da busca (${searchResults.length})` : 
              'Filmes em Destaque'
            }
          </h2>
          {hasSearched && searchResults.length === 0 && (
            <p className="text-muted-foreground">
              Nenhum filme encontrado. Tente buscar por outro termo.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};