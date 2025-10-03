import { products } from '../data/products';
import { ProductCard } from './ProductCard';

export const FeaturedGrid = () => {
  // Get 6 featured products (first 6 from the array)
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-16 bg-paper">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Productos Destacados
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Descubre nuestra selección cuidadosamente curada de los mejores productos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/products" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
          >
            Ver todos los productos
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
