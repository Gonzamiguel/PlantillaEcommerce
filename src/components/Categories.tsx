import { useState } from 'react';
import { Badge } from './Badge';

const categories = [
  { id: 'all', name: 'Todos', count: 20 },
  { id: 'Sneakers', name: 'Sneakers', count: 6 },
  { id: 'Streetwear', name: 'Streetwear', count: 4 },
  { id: 'Tech', name: 'Tech', count: 6 },
  { id: 'Home', name: 'Hogar', count: 1 },
  { id: 'Beauty', name: 'Belleza', count: 3 },
];

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section className="py-16 bg-ink">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explora por Categorías
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Encuentra exactamente lo que buscas en nuestras categorías cuidadosamente seleccionadas
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-3 rounded-2xl transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="font-medium">{category.name}</span>
              <Badge 
                variant={activeCategory === category.id ? 'default' : 'default'}
                size="sm" 
                className="ml-2"
              >
                {category.count}
              </Badge>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
