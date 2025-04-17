import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // disable color output at process level
  process.env.NO_COLOR = 'true';

  // disable NestJS logger entirely
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });

  await app.listen(process.env.port || 3000);
}
bootstrap();
