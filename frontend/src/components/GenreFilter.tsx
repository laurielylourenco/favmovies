import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { genres } from '@/data/movies';

interface GenreFilterProps {
  selectedGenre?: number;
  onGenreChange: (genreId?: number) => void;
}

export const GenreFilter = ({ selectedGenre, onGenreChange }: GenreFilterProps) => {
  return (
    <Select
      value={selectedGenre ? selectedGenre.toString() : "all"}
      onValueChange={(value) => onGenreChange(value === "all" ? undefined : parseInt(value))}
    >
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Filtrar por gênero" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todos os gêneros</SelectItem>
        {genres.map((genre) => (
          <SelectItem key={genre.id} value={genre.id.toString()}>
            {genre.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};