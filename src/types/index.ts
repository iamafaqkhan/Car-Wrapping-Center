export type CarModelId = 'coupe' | 'suv' | 'hypercar';

export type WrapFinish = 'matte' | 'satin' | 'gloss';

export interface WrapColor {
  id: string;
  name: string;
  hex: string;
  category: 'stealth' | 'vibrant' | 'metallic' | 'luxury';
  roughnessModifier?: number;
  metalnessModifier?: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  durability: string;
  warranty: string;
  icon: string;
  tag: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  car: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  vehicle: string;
  category: 'color-change' | 'ppf' | 'chrome-delete' | 'fleet';
  finish: string;
  filmBrand: string;
  imageUrl: string;
}

export interface VehicleCategory {
  id: string;
  name: string;
  description: string;
  example: string;
  baseMultiplier: number;
}
