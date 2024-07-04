import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RideListRelationFilter } from "../ride/RideListRelationFilter";
import { VehicleListRelationFilter } from "../vehicle/VehicleListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  rides?: RideListRelationFilter;
  username?: StringFilter;
  userType?: "Option1";
  vehicles?: VehicleListRelationFilter;
};
