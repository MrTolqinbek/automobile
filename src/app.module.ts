import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomobileModule } from './api/automobile/automobile.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Automobile } from './model/automobile.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AutoConfigService } from './common/config/config.service';

@Module({
  imports: [
    AutomobileModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('DATABASE_HOST') || 'localhost',
          port: 5432,
          username: configService.get('DATABASE_USERNAME') || 'postgres',
          password: configService.get('DATABASE_PASSWORD') || 'postgres',
          database: configService.get('DATABASE_NAME') || 'automobile',
          entities: [Automobile],
          synchronize: true,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AutoConfigService],
  exports: [AutoConfigService],
})
export class AppModule {}
