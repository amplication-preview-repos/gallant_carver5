import { SortOrder } from "../../util/SortOrder";

export type RideOrderByInput = {
  createdAt?: SortOrder;
  dropoffLocation?: SortOrder;
  fare?: SortOrder;
  id?: SortOrder;
  pickupLocation?: SortOrder;
  rideStatus?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
