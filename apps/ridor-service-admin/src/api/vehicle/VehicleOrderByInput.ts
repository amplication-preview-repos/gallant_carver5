import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  licensePlate?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  year?: SortOrder;
};
