import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { PrismaModule } from "./prisma/prisma.module";
import { RpcModule } from "./rpc/rpc.module";

@Module({
  imports: [DatabaseModule, PrismaModule, RpcModule],
})
export class AppModule {}
