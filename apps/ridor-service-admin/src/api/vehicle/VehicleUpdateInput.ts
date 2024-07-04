import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VehicleUpdateInput = {
  licensePlate?: string | null;
  make?: string | null;
  model?: string | null;
  user?: UserWhereUniqueInput | null;
  year?: number | null;
};
