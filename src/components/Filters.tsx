import { FilterState } from '../types';
import { products } from '../data/products';

interface FiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export const Filters = ({ filters, onFiltersChange }: FiltersProps) => {
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const maxPrice = Math.max(...products.map(p => p.price));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, search: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({ ...filters, category: e.target.value });
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, minPrice: Number(e.target.value) });
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, maxPrice: Number(e.target.value) });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({ ...filters, sortBy: e.target.value as FilterState['sortBy'] });
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Filtros</h3>
      
      <div className="space-y-6">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Buscar
          </label>
          <input
            type="text"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Buscar productos..."
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Categoría
          </label>
          <select
            value={filters.category}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-paper">
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Rango de Precio
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-white/60 mb-1">Mínimo</label>
              <input
                type="number"
                value={filters.minPrice}
                onChange={handleMinPriceChange}
                placeholder="0"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-white/60 mb-1">Máximo</label>
              <input
                type="number"
                value={filters.maxPrice}
                onChange={handleMaxPriceChange}
                placeholder={maxPrice.toString()}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
            </div>
          </div>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Ordenar por
          </label>
          <select
            value={filters.sortBy}
            onChange={handleSortChange}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="relevance" className="bg-paper">Relevancia</option>
            <option value="price-asc" className="bg-paper">Precio ↑</option>
            <option value="price-desc" className="bg-paper">Precio ↓</option>
            <option value="rating-desc" className="bg-paper">Rating ↓</option>
          </select>
        </div>

        {/* Clear Filters */}
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => onFiltersChange({
            search: '',
            category: 'All',
            minPrice: 0,
            maxPrice: maxPrice,
            sortBy: 'relevance'
          })}
        >
          Limpiar Filtros
        </Button>
      </div>
    </div>
  );
};
