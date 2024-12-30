export interface Business {
  _id: string;
  name: string;
  description: string;
  category: string;
  subscribers: [];
}

export type BusinessWithoutId = Omit<Business, "_id">;
