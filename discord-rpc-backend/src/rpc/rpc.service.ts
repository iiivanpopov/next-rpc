import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { Client } from "@xhayper/discord-rpc";
import { DatabaseService } from "src/database/database.service";
import { PresetDTO } from "src/database/dto/preset.dto";
import { IRpcService } from "./interfaces/rpc-service.interface";

@Injectable()
export class RpcService implements OnModuleInit, OnModuleDestroy, IRpcService {
  private rpc: Client;
  private readonly logger = new Logger(RpcService.name);

  constructor(private readonly databaseService: DatabaseService) {}

  onModuleInit() {
    this.rpc = new Client({ clientId: "" });
  }

  onModuleDestroy() {
    this.rpc.destroy();
  }

  async launch(id: number): Promise<void> {
    const data: PresetDTO = await this.databaseService.fetchById(id);

    this.rpc.clientId = data.clientId;

    await this.rpc.login();

    const activity = {
      state: data.state,
      details: data.details,
      largeImageKey: data.largeImageKey,
      largeImageText: data.largeImageText,
      smallImageKey: data.smallImageKey,
      smallImageText: data.smallImageText,
      buttons: [
        { label: data.buttonOneLabel, url: data.buttonOneUrl },
        { label: data.buttonTwoLabel, url: data.buttonTwoUrl },
      ],
      type: data.activityType,
    };

    this.logger.log(`Activating RPC with these params: ${JSON.stringify(activity)}...`);
    this.rpc.user.setActivity(activity);
  }

  stop(): void {
    this.logger.log("Deactivating RPC...");
    this.rpc.destroy();
  }
}
