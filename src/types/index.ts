export type Product = {
  id: string;
  title: string;
  price: number;
  category: "Sneakers" | "Streetwear" | "Tech" | "Home" | "Beauty";
  rating: number;
  image: string;
  tags: string[];
};

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export type FilterState = {
  search: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  sortBy: 'relevance' | 'price-asc' | 'price-desc' | 'rating-desc';
};
