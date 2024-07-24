import { PresetDTO } from "../dto/preset.dto";

export interface IDatabaseService {
  savePreset(obj: PresetDTO): Promise<void>;
  fetchById(id: number): Promise<PresetDTO>;
  fetchAll(): Promise<PresetDTO[]>;
  deleteById(id: number): Promise<void>;
}
