export type User = {
  id?: number;
  name?: string | null;
  email?: string;
  gender?: 'male' | 'female';
  status?: 'active' | 'inactive';
};
