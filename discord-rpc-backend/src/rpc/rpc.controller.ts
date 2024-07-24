import { Controller, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { IdDTO } from "./dto/id.dto";
import { RpcService } from "./rpc.service";

@Controller("rpc")
export class RpcController {
  constructor(private readonly rpcService: RpcService) {}

  @Post(":id")
  @HttpCode(HttpStatus.OK)
  async launch(@Param() { id }: IdDTO): Promise<void> {
    await this.rpcService.launch(parseInt(id));
  }

  @Post("")
  @HttpCode(HttpStatus.OK)
  stop(): void {
    this.rpcService.stop();
  }
}
