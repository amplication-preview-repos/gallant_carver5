import { User } from "../user/User";

export type Vehicle = {
  createdAt: Date;
  id: string;
  licensePlate: string | null;
  make: string | null;
  model: string | null;
  updatedAt: Date;
  user?: User | null;
  year: number | null;
};
