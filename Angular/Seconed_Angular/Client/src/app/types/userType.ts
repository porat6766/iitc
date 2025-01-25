export interface User {
  _id?: string;
  userName: string;
  email: string;
  password: string;
  plan: 'Standard' | 'Gold' | 'Platinum';
  savedBusinesses: string[];
}
