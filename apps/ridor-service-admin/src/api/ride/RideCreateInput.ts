import { InputJsonValue } from "../../types";
import { PaymentCreateNestedManyWithoutRidesInput } from "./PaymentCreateNestedManyWithoutRidesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RideCreateInput = {
  dropoffLocation?: InputJsonValue;
  fare?: number | null;
  payments?: PaymentCreateNestedManyWithoutRidesInput;
  pickupLocation?: InputJsonValue;
  rideStatus?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
