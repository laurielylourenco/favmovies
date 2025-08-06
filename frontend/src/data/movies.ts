export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  genres: string[];
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

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Avatar: O Caminho da Água",
    poster_path: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    overview: "Passaram-se mais de dez anos desde os acontecimentos de Avatar. Jake Sully vive com sua nova família no planeta Pandora.",
    release_date: "2022-12-14",
    vote_average: 7.6,
    genre_ids: [878, 12, 28],
    genres: ["Ficção Científica", "Aventura", "Ação"]
  },
  {
    id: 2,
    title: "Top Gun: Maverick",
    poster_path: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    overview: "Depois de mais de 30 anos de serviço como um dos melhores aviadores da Marinha, Pete 'Maverick' Mitchell está de volta.",
    release_date: "2022-05-24",
    vote_average: 8.3,
    genre_ids: [28, 18],
    genres: ["Ação", "Drama"]
  },
  {
    id: 3,
    title: "Pantera Negra: Wakanda Para Sempre",
    poster_path: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    overview: "A rainha Ramonda, Shuri, M'Baku, Okoye e as Dora Milaje lutam para proteger sua nação das potências mundiais.",
    release_date: "2022-11-09",
    vote_average: 7.3,
    genre_ids: [28, 12, 18],
    genres: ["Ação", "Aventura", "Drama"]
  },
  {
    id: 4,
    title: "Homem-Aranha: Sem Volta Para Casa",
    poster_path: "https://image.tmdb.org/t/p/w500/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    overview: "Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói.",
    release_date: "2021-12-15",
    vote_average: 8.4,
    genre_ids: [28, 12, 878],
    genres: ["Ação", "Aventura", "Ficção Científica"]
  },
  {
    id: 5,
    title: "Doutor Estranho no Multiverso da Loucura",
    poster_path: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    overview: "O Doutor Estranho desperta uma maldição do Darkhold em sua luta contra Thanos.",
    release_date: "2022-05-04",
    vote_average: 7.4,
    genre_ids: [14, 28, 878],
    genres: ["Fantasia", "Ação", "Ficção Científica"]
  },
  {
    id: 6,
    title: "Lightyear",
    poster_path: "https://image.tmdb.org/t/p/w500/ox4goZd956BxqJH6iLwhWPL9ct4.jpg",
    overview: "A história de origem definitiva de Buzz Lightyear, o herói que inspirou o brinquedo.",
    release_date: "2022-06-13",
    vote_average: 7.1,
    genre_ids: [16, 878, 10751],
    genres: ["Animação", "Ficção Científica", "Família"]
  },
  {
    id: 7,
    title: "Thor: Amor e Trovão",
    poster_path: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    overview: "Thor embarca em uma jornada diferente de tudo que já enfrentou antes: uma busca pela paz interior.",
    release_date: "2022-07-06",
    vote_average: 6.8,
    genre_ids: [28, 35, 14],
    genres: ["Ação", "Comédia", "Fantasia"]
  },
  {
    id: 8,
    title: "Minions: A Origem de Gru",
    poster_path: "https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    overview: "Uma continuação da franquia Meu Malvado Favorito, centrada nos Minions.",
    release_date: "2022-06-29",
    vote_average: 7.9,
    genre_ids: [16, 35, 10751],
    genres: ["Animação", "Comédia", "Família"]
  },
  {
    id: 9,
    title: "Jurassic World: Domínio",
    poster_path: "https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    overview: "Quatro anos após a destruição da Ilha Nublar, os dinossauros agora vivem e caçam ao lado dos humanos.",
    release_date: "2022-06-08",
    vote_average: 7.0,
    genre_ids: [28, 12, 878],
    genres: ["Ação", "Aventura", "Ficção Científica"]
  },
  {
    id: 10,
    title: "O Batman",
    poster_path: "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    overview: "Quando um assassino tem como alvo a elite de Gotham, Batman deve investigar a corrupção da cidade.",
    release_date: "2022-03-01",
    vote_average: 8.2,
    genre_ids: [80, 9648, 53],
    genres: ["Crime", "Mistério", "Thriller"]
  },
  {
    id: 11,
    title: "Turning Red",
    poster_path: "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    overview: "Uma adolescente de 13 anos se transforma em um panda vermelho gigante quando fica muito animada.",
    release_date: "2022-03-10",
    vote_average: 7.4,
    genre_ids: [16, 35, 10751],
    genres: ["Animação", "Comédia", "Família"]
  },
  {
    id: 12,
    title: "Sonic 2: O Filme",
    poster_path: "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    overview: "Sonic e Tails devem encontrar a Esmeralda Mestre antes que ela caia nas mãos do Dr. Robotnik.",
    release_date: "2022-03-30",
    vote_average: 7.5,
    genre_ids: [28, 35, 10751],
    genres: ["Ação", "Comédia", "Família"]
  }
];

// Função para simular busca de filmes
export const searchMovies = (query: string): Movie[] => {
  if (!query.trim()) return [];
  
  return mockMovies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase()) ||
    movie.overview.toLowerCase().includes(query.toLowerCase())
  );
};

// Função para buscar filmes por gênero
export const getMoviesByGenre = (genreId: number): Movie[] => {
  return mockMovies.filter(movie => movie.genre_ids.includes(genreId));
};