import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { GenericExceptionFilter } from "./exception-filters/generic-exception.filter";
import { HttpExceptionFilter } from "./exception-filters/http-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.useGlobalFilters(new HttpExceptionFilter(), new GenericExceptionFilter());
  await app.listen(process.env.SERVER_PORT || 3000);
}

bootstrap();
