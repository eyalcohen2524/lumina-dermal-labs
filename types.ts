export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  description: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  verified: boolean;
  date: string;
  image?: string;
}

export interface BundleOption {
  id: '1-unit' | '2-units' | '3-units';
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  discount: number;
  popular?: boolean;
  image: string;
}