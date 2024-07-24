import { Module } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { PrismaService } from "src/prisma/prisma.service";
import { RpcController } from "./rpc.controller";
import { RpcService } from "./rpc.service";

@Module({
  controllers: [RpcController],
  providers: [RpcService, PrismaService, DatabaseService],
})
export class RpcModule {}
