import { InputJsonValue } from "../../types";
import { PaymentUpdateManyWithoutRidesInput } from "./PaymentUpdateManyWithoutRidesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RideUpdateInput = {
  dropoffLocation?: InputJsonValue;
  fare?: number | null;
  payments?: PaymentUpdateManyWithoutRidesInput;
  pickupLocation?: InputJsonValue;
  rideStatus?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
