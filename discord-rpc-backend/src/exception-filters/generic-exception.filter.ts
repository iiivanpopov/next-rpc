import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Logger } from "@nestjs/common";
import { Response } from "express";

@Catch(Error)
export class GenericExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GenericExceptionFilter.name);

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = HttpStatus.INTERNAL_SERVER_ERROR;

    this.logger.error(`Unexpected error: ${exception.message}`, exception.stack);

    response.status(status).json(
      process.env.NODE_ENV === "production"
        ? {
            statusCode: status,
            message: "Internal server error",
            timestamp: new Date().toISOString(),
          }
        : {
            statusCode: status,
            message: "Internal server error",
            timestamp: new Date().toISOString(),
            stacktrace: exception.stack,
          },
    );
  }
}
