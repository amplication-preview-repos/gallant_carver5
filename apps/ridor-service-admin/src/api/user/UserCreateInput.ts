import { RideCreateNestedManyWithoutUsersInput } from "./RideCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VehicleCreateNestedManyWithoutUsersInput } from "./VehicleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  rides?: RideCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  userType?: "Option1" | null;
  vehicles?: VehicleCreateNestedManyWithoutUsersInput;
};
