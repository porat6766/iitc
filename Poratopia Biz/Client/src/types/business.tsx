export interface Business {
  _id: string;
  name: string;
  description: string;
  category: string;
  subscribers: [];
  owner: {
    name: string;
    _id: string;
  };
}

export type BusinessWithoutId = Omit<Business, "_id">;
