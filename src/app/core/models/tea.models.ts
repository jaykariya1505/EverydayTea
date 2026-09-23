export interface Product {
  id: string;
  name: string;
  subTitle?: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  weight: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  isGold?: boolean;
  image: string;
  description: string;
  category: 'original' | 'gold' | 'masala' | 'green' | 'herbal';
  origin?: string;
  brewingTime?: string;
  ingredients?: string;
  inStock?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  iconSvg: string;
}

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'gold';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'quality' | 'gold' | 'orders' | 'wholesale';
}
