import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend - 本地开发环境允许所有 localhost 端口
  const isDevelopment = process.env.NODE_ENV !== 'production';
  app.enableCors({
    origin: isDevelopment
      ? (origin, callback) => {
          // 开发环境：允许所有 localhost 和 127.0.0.1 的请求
          if (
            !origin ||
            /^https?:\/\/localhost(:\d+)?$/.test(origin) ||
            /^https?:\/\/127\.0\.0\.1(:\d+)?$/.test(origin)
          ) {
            callback(null, true);
          } else {
            callback(null, false);
          }
        }
      : (process.env.FRONTEND_URL ?? 'http://localhost:3000'),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    exposedHeaders: ['Content-Type'],
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');

  await app.listen(port ?? 4000);
}
bootstrap();
