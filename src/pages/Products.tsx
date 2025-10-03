import { useState, useMemo } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Filters } from '../components/Filters';
import { FilterState } from '../types';

export const Products = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'All',
    minPrice: 0,
    maxPrice: Math.max(...products.map(p => p.price)),
    sortBy: 'relevance'
  });

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(searchLower) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Category filter
    if (filters.category !== 'All') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= filters.minPrice && product.price <= filters.maxPrice
    );

    // Sort
    switch (filters.sortBy) {
      case 'price-asc':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [filters]);

  return (
    <div className="min-h-screen bg-paper">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Productos
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Explora nuestra amplia selección de productos cuidadosamente curados
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Filters filters={filters} onFiltersChange={setFilters} />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-muted">
                Mostrando {filteredProducts.length} de {products.length} productos
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <svg 
                  className="w-16 h-16 text-muted mx-auto mb-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-muted">
                  Intenta ajustar los filtros para encontrar lo que buscas
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
