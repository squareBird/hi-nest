import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
      new ValidationPipe({
        whitelist:true,
        forbidNonWhitelisted:true,
        transform: true, // 실제 타입으로 변환해줌 getOne의 파라미터 string -> number로 자동으로 바꿔
      })
  )
  await app.listen(3000);
}
bootstrap();
