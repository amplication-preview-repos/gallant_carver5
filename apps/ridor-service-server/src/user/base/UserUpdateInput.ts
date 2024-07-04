/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  MaxLength,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { RideUpdateManyWithoutUsersInput } from "./RideUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumUserUserType } from "./EnumUserUserType";
import { VehicleUpdateManyWithoutUsersInput } from "./VehicleUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => RideUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => RideUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => RideUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  rides?: RideUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    enum: EnumUserUserType,
  })
  @IsEnum(EnumUserUserType)
  @IsOptional()
  @Field(() => EnumUserUserType, {
    nullable: true,
  })
  userType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => VehicleUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => VehicleUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => VehicleUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  vehicles?: VehicleUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };