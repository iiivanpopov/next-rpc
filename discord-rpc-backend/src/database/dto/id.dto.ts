import { IsString } from "class-validator";

export class IdDTO {
  @IsString()
  id: string;
}
