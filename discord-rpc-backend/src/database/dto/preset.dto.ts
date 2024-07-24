import { IsEnum, IsString } from "class-validator";

enum ActivityType {
  Playing,
  Streaming,
  Listening,
  Watching,
  Custom,
  Competing,
}

export class PresetDTO {
  @IsString()
  clientId: string;

  @IsString()
  state: string;

  @IsString()
  details: string;

  @IsString()
  largeImageKey: string;

  @IsString()
  largeImageText: string;

  @IsString()
  smallImageKey: string;

  @IsString()
  smallImageText: string;

  @IsString()
  buttonOneLabel: string;

  @IsString()
  buttonOneUrl: string;

  @IsString()
  buttonTwoLabel: string;

  @IsString()
  buttonTwoUrl: string;

  @IsEnum(ActivityType)
  activityType: ActivityType;
}
