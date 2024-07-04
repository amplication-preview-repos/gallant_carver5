import { RideWhereUniqueInput } from "../ride/RideWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  method?: "Option1" | null;
  ride?: RideWhereUniqueInput | null;
  status?: "Option1" | null;
};
