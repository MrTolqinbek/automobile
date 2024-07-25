import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomobileModule } from './api/automobile/automobile.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Automobile } from './model/automobile.entity';

@Module({
  imports: [AutomobileModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'automobile',
      entities: [Automobile],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
