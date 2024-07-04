import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RideWhereInput = {
  dropoffLocation?: JsonFilter;
  fare?: FloatNullableFilter;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  pickupLocation?: JsonFilter;
  rideStatus?: "Option1";
  user?: UserWhereUniqueInput;
};
