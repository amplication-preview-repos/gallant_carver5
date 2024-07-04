import { Ride } from "../ride/Ride";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  method?: "Option1" | null;
  ride?: Ride | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
