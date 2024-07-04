import { RideUpdateManyWithoutUsersInput } from "./RideUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VehicleUpdateManyWithoutUsersInput } from "./VehicleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: string | null;
  rides?: RideUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  userType?: "Option1" | null;
  vehicles?: VehicleUpdateManyWithoutUsersInput;
};
