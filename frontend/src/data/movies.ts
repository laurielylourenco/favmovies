
export interface Movie {
  id: number;
  tmdb_id: number; // Adicionado para consistência com o backend
  title: string;
  poster_path: string | null;
  backdrop_path: string | null; // Adicione esta linha
  overview: string;
  release_date: string;
  genres: any[]; // Pode ser mais específico se quiser
  genre_ids: number[];
  vote_average: number;
  adult?: boolean;
  original_language?: string;
  original_title?: string;
  popularity?: number;
  video?: boolean;
  vote_count?: number;
}

export interface Genre {
  id: number;
  name: string;
}

export const genres: Genre[] = [
  { id: 28, name: "Ação" },
  { id: 12, name: "Aventura" },
  { id: 16, name: "Animação" },
  { id: 35, name: "Comédia" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentário" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Família" },
  { id: 14, name: "Fantasia" },
  { id: 36, name: "História" },
  { id: 27, name: "Terror" },
  { id: 10402, name: "Música" },
  { id: 9648, name: "Mistério" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Ficção Científica" },
  { id: 10770, name: "Cinema TV" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "Guerra" },
  { id: 37, name: "Faroeste" }
];

// Função para simular busca de filmes
/* export const searchMovies = (query: string): Movie[] => {
  if (!query.trim()) return [];
  
  return mockMovies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase()) ||
    movie.overview.toLowerCase().includes(query.toLowerCase())
  );
};

// Função para buscar filmes por gênero
export const getMoviesByGenre = (genreId: number): Movie[] => {
  return mockMovies.filter(movie => movie.genre_ids.includes(genreId));
}; */