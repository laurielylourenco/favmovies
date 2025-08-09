import { Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Movie } from '@/data/movies';
import { useToast } from '@/hooks/use-toast';
import { useAddFavoriteMovie, useRemoveFavoriteMovie } from '../services/query/movie';

interface MovieCardProps {
  movie: Movie;
  isFavorited: boolean;
}

export const MovieCard = ({ movie, isFavorited }: MovieCardProps) => {
  const { toast } = useToast();
  const { mutate: addFavorite, isPending: isAdding } = useAddFavoriteMovie();
  const { mutate: removeFavorite, isPending: isRemoving } = useRemoveFavoriteMovie();

  const tmdbId = 'tmdb_id' in movie ? movie.tmdb_id : 0;

  const hasGenres = movie.genre_ids && movie.genre_ids.length > 0;

  const handleFavoriteClick = () => {

    if (!hasGenres) return;

    if (isFavorited) {
      removeFavorite(tmdbId, {
        onSuccess: () => {
          toast({
            title: "Removido dos favoritos",
            description: `${movie.title} foi removido da sua lista.`,
          });
        },
        onError: () => {
          toast({
            title: "Erro",
            description: "Não foi possível remover dos favoritos.",
            variant: "destructive",
          });
        },
      });
    } else {
      const favoriteData = {
        tmdb_id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        overview: movie.overview,
        release_date: movie.release_date,
        genre_ids: movie.genre_ids,
        vote_average: movie?.vote_average
      };

      addFavorite(favoriteData, {
        onSuccess: () => {
          toast({
            title: "Adicionado aos favoritos",
            description: `${movie.title} foi adicionado à sua lista.`,
          });
        },
        onError: () => {
          toast({
            title: "Erro",
            description: "Não foi possível adicionar aos favoritos.",
            variant: "destructive",
          });
        },
      });
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        {movie.backdrop_path || movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path ?? movie.poster_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="w-full h-64 flex items-center justify-center bg-gray-300 text-gray-600 text-sm">
            Sem imagem
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-black/50 hover:bg-black/70"
          onClick={handleFavoriteClick}
          disabled={isAdding || isRemoving || !hasGenres}
        >
          <Heart
            className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-white'}`}
          />
        </Button>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{movie.title}</h3>

        <div className="flex items-center gap-2 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">
            {movie?.vote_average?.toFixed(1)}
          </span>
          <span className="text-sm text-muted-foreground">
            ({new Date(movie?.release_date).getFullYear()})
          </span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {movie?.genres?.map((genre: any, index) => (


            <Badge key={index} variant="secondary" className="text-xs">
              {genre.name}
            </Badge>


          ))}
          
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {movie?.overview?.length === 0 || movie.overview == null ? "Sem resenha" : movie.overview}
        </p>
      </CardContent>
    </Card>
  );
};
