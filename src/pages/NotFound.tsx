import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-paper flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
          <h2 className="text-4xl font-bold text-white mb-4">
            Página no encontrada
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto">
            La página que buscas no existe o ha sido movida.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg">
              Volver al Inicio
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" size="lg">
              Ver Productos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
