import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(request: Request, response: Response, next: NextFunction) {
    this.logger.log(request.ip);
    this.logger.log(`${request.method} ${request.originalUrl}`);

    response.on('finish', () => {
      this.logger.log(response.statusCode);
    });
    next();
  }
}
