import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type VehicleWhereInput = {
  id?: StringFilter;
  licensePlate?: StringNullableFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  year?: IntNullableFilter;
};
