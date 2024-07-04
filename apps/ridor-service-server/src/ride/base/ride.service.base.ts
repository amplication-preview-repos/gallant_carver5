/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Ride as PrismaRide,
  Payment as PrismaPayment,
  User as PrismaUser,
} from "@prisma/client";

export class RideServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RideCountArgs, "select">): Promise<number> {
    return this.prisma.ride.count(args);
  }

  async rides(args: Prisma.RideFindManyArgs): Promise<PrismaRide[]> {
    return this.prisma.ride.findMany(args);
  }
  async ride(args: Prisma.RideFindUniqueArgs): Promise<PrismaRide | null> {
    return this.prisma.ride.findUnique(args);
  }
  async createRide(args: Prisma.RideCreateArgs): Promise<PrismaRide> {
    return this.prisma.ride.create(args);
  }
  async updateRide(args: Prisma.RideUpdateArgs): Promise<PrismaRide> {
    return this.prisma.ride.update(args);
  }
  async deleteRide(args: Prisma.RideDeleteArgs): Promise<PrismaRide> {
    return this.prisma.ride.delete(args);
  }

  async findPayments(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<PrismaPayment[]> {
    return this.prisma.ride
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.ride
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
