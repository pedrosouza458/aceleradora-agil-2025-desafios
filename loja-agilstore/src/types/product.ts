export type Product = {
  id: `${string}-${string}-${string}-${string}-${string}`; // UUID string
  name: string;
  category: string;
  quantity: number;
  price: number;
};