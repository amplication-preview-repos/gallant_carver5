import { JsonValue } from "type-fest";
import { Payment } from "../payment/Payment";
import { User } from "../user/User";

export type Ride = {
  createdAt: Date;
  dropoffLocation: JsonValue;
  fare: number | null;
  id: string;
  payments?: Array<Payment>;
  pickupLocation: JsonValue;
  rideStatus?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
