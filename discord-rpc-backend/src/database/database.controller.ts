import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { DatabaseService } from "./database.service";
import { IdDTO } from "./dto/id.dto";
import { PresetDTO } from "./dto/preset.dto";

@Controller("database")
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post("")
  async savePreset(@Body() body: PresetDTO): Promise<void> {
    await this.databaseService.savePreset(body);
  }

  @Delete(":id")
  async deletePresetById(@Param() { id }: IdDTO): Promise<void> {
    await this.databaseService.deleteById(parseInt(id));
  }

  @Get("")
  async fetchAllPresets(): Promise<PresetDTO[]> {
    return await this.databaseService.fetchAll();
  }

  @Get(":id")
  async fetchPresetById(@Param() { id }: IdDTO): Promise<PresetDTO> {
    return await this.databaseService.fetchById(parseInt(id));
  }
}
