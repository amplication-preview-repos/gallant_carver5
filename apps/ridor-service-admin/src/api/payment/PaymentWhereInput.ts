import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RideWhereUniqueInput } from "../ride/RideWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  method?: "Option1";
  ride?: RideWhereUniqueInput;
  status?: "Option1";
};
