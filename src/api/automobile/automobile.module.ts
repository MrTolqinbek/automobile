import { Module } from '@nestjs/common';
import { AutomobileController } from './automobile.controller';
import { AutomobileService } from './automobile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Automobile } from 'src/model/automobile.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Automobile])],
  controllers: [AutomobileController],
  providers: [AutomobileService]
})
export class AutomobileModule {}
