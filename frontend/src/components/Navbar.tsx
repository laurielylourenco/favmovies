import { Film, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Film className="h-6 w-6" />
          <h1 className="text-xl font-bold">MovieApp</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant={location.pathname === '/' ? 'default' : 'ghost'}
            onClick={() => navigate('/')}
          >
            Buscar Filmes
          </Button>
          <Button
            variant={location.pathname === '/favorites' ? 'default' : 'ghost'}
            onClick={() => navigate('/favorites')}
            className="flex items-center gap-2"
          >
            <Heart className="h-4 w-4" />
            Favoritos
          </Button>
        </div>
      </div>
    </nav>
  );
};