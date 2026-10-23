export type RoomType = '1-комн' | '2-комн' | '3-комн' | '4-комн' | 'дом';

export interface Property {
  id: string;
  title: string;
  rooms: RoomType;
  microdistrict: string;
  address: string;
  floor: number;
  totalFloors: number;
  area: number; // m²
  kitchenArea: number; // m²
  priceKzt: number;
  priceUsd: number;
  images: string[];
  features: string[];
  description: string;
  isUrgent?: boolean;
  isExchangePossible?: boolean;
  isMortgageEligible?: boolean;
  yearBuilt?: number;
  condition: 'Евроремонт' | 'Хорошее' | 'Косметический' | 'Требует ремонта';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface Review {
  id: string;
  name: string;
  microdistrict: string;
  date: string;
  dealType: string;
  comment: string;
  rating: number;
}
