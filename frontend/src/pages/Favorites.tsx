import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { MovieCard } from '@/components/MovieCard';
import { GenreFilter } from '@/components/GenreFilter';
import { useFavoritesQuery } from '../services/query/movie'; 

export const Favorites = () => {
  const { data: favorites = [], isLoading } = useFavoritesQuery();
  const [selectedGenre, setSelectedGenre] = useState<number | undefined>();


  const filteredFavorites = selectedGenre
    ? favorites.filter((movie: any) => movie.genres.some((g: any) => g.id === selectedGenre))
    : favorites;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">Carregando seus favoritos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Heart className="h-8 w-8 fill-red-500 text-red-500" />
              Meus Favoritos
            </h1>
            <p className="text-muted-foreground">
              {favorites.length} {favorites.length === 1 ? 'filme' : 'filmes'} na sua lista
            </p>
          </div>
          
          {favorites.length > 0 && (
            <GenreFilter 
              selectedGenre={selectedGenre}
              onGenreChange={setSelectedGenre}
            />
          )}
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">Nenhum filme favorito ainda</h2>
            <p className="text-muted-foreground mb-6">
              Adicione filmes aos seus favoritos para vê-los aqui
            </p>
          </div>
        ) : (
          <>
            {selectedGenre && (
              <div className="mb-6">
                <p className="text-muted-foreground">
                  {filteredFavorites.length} {filteredFavorites.length === 1 ? 'filme encontrado' : 'filmes encontrados'} para o gênero selecionado
                </p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFavorites.map((movie: any) => (
                <MovieCard 
                  key={movie.id} 
                  movie={movie} 
                  isFavorited={true} 
                />
              ))}
            </div>

            {filteredFavorites.length === 0 && selectedGenre && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  Nenhum filme encontrado para o gênero selecionado.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};