import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PresetDTO } from "./dto/preset.dto";
import { IDatabaseService } from "./interfaces/database-service.interface";

@Injectable()
export class DatabaseService implements IDatabaseService {
  private readonly logger = new Logger(DatabaseService.name);
  constructor(private prisma: PrismaService) {}

  async savePreset(obj: PresetDTO): Promise<void> {
    const data = {
      clientId: obj.clientId,
      state: obj.state,
      details: obj.details,
      largeImageKey: obj.largeImageText,
      largeImageText: obj.largeImageText,
      smallImageKey: obj.smallImageKey,
      smallImageText: obj.smallImageText,
      buttonOneLabel: obj.buttonOneLabel,
      buttonOneUrl: obj.buttonOneUrl,
      buttonTwoLabel: obj.buttonTwoLabel,
      buttonTwoUrl: obj.buttonTwoUrl,
      activityType: obj.activityType,
    };

    this.logger.log(`Saving preset ${JSON.stringify(data)}...`);
    await this.prisma.presets.create({ data });
  }

  async fetchById(id: number): Promise<PresetDTO> {
    this.logger.log(`Fetching preset with id ${id}...`);
    return await this.prisma.presets.findFirst({
      where: { id },
    });
  }

  async fetchAll(): Promise<PresetDTO[]> {
    this.logger.log("Fetching presets...");
    return await this.prisma.presets.findMany();
  }

  async deleteById(id: number): Promise<void> {
    this.logger.log(`Deleting preset with id ${id}...`);
    await this.prisma.presets.delete({ where: { id } });
  }
}
