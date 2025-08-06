import { Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Movie } from '@/data/movies';
import { useFavorites } from '@/hooks/useFavorites';
import { useToast } from '@/hooks/use-toast';
import { useAddFavoriteMovie, useRemoveFavoriteMovie } from '../services/query/movie';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { toast } = useToast();
  const { mutate: addFavorite, isPending } = useAddFavoriteMovie();
  const { mutate: removeFavorite, isPending: isRemoving } = useRemoveFavoriteMovie();

  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = () => {
    if (favorite) {

      removeFromFavorites(movie.id);

      removeFavorite(movie.id, {
        onSuccess: () => {
          toast({
            title: "Removido dos favoritos",
            description: `${movie.title} foi removido da sua lista de favoritos.`,
          });
        },
        onError: () => {
          toast({
            title: "Erro",
            description: "Não foi possível remover dos favoritos. Tente novamente.",
            variant: "destructive",
          });
        },
      });

      toast({
        title: "Removido dos favoritos",
        description: `${movie.title} foi removido da sua lista de favoritos.`,
      });
    } else {
      addToFavorites(movie);

      const favoriteData = {
        adult: movie?.adult,
        backdrop_path: movie?.backdrop_path ?? "",
        genre_ids: movie?.genre_ids ?? [],
        tmdb_id: movie?.id,
        original_language: movie?.original_language,
        original_title: movie?.original_title,
        overview: movie?.overview ?? "Sem resenha",
        popularity: movie?.popularity,
        poster_path: movie?.poster_path,
        release_date: movie?.release_date,
        title: movie?.title,
        video: movie?.video,
        vote_average: movie?.vote_average,
        vote_count: movie?.vote_count,
      };

      addFavorite(favoriteData, {
        onSuccess: () => {
          toast({
            title: "Adicionado aos favoritos",
            description: `${movie.title} foi adicionado à sua lista de favoritos.`,
          });
        },
        onError: () => {
          toast({
            title: "Erro",
            description: "Não foi possível adicionar aos favoritos. Tente novamente.",
            variant: "destructive",
          });
        },
      });
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        {movie.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
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
          disabled={isPending} 
        >
          <Heart
            className={`h-4 w-4 ${favorite ? 'fill-red-500 text-red-500' : 'text-white'
              }`}
          />
        </Button>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{movie.title}</h3>

        <div className="flex items-center gap-2 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">
            {movie.vote_average.toFixed(1)}
          </span>
          <span className="text-sm text-muted-foreground">
            ({new Date(movie.release_date).getFullYear()})
          </span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {movie.genre_ids.slice(0, 2).map((genre) => (
            <Badge key={genre} variant="secondary" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {movie.overview.length === 0 ? "Sem resenha" : movie.overview}
        </p>
      </CardContent>
    </Card>
  );
};
