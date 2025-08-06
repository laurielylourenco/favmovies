import { useState, useEffect } from 'react';
import { Movie } from '@/data/movies';

const FAVORITES_KEY = 'movie-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // Carregar favoritos do localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
      }
    }
  }, []);

  // Adicionar filme aos favoritos
  const addToFavorites = (movie: Movie) => {
    const isAlreadyFavorite = favorites.some(fav => fav.id === movie.id);
    if (!isAlreadyFavorite) {
      const newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    }
  };

  // Remover filme dos favoritos
  const removeFromFavorites = (movieId: number) => {
    const newFavorites = favorites.filter(movie => movie.id !== movieId);
    setFavorites(newFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  };

  // Verificar se filme está nos favoritos
  const isFavorite = (movieId: number) => {
    return favorites.some(movie => movie.id === movieId);
  };

  // Filtrar favoritos por gênero
  const getFavoritesByGenre = (genreId?: number) => {
    if (!genreId) return favorites;
    return favorites.filter(movie => movie.genre_ids.includes(genreId));
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    getFavoritesByGenre
  };
};