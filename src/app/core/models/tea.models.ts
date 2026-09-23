export interface Product {
  id: string;
  name: string;
  subTitle?: string;
  tagline: string;
  price: number;
  weight: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  isGold?: boolean;
  image: string;
  description: string;
  category: 'original' | 'gold' | 'masala' | 'green';
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
