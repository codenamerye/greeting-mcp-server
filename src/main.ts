import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // disable color output at process level
  process.env.NO_COLOR = 'true';

  // disable NestJS logger entirely
  await NestFactory.createApplicationContext(AppModule, {
    logger: false,
  });

  // DO NOT use app.listen — MCP uses stdin/stdout
}
bootstrap();
