import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Automobile } from 'src/model/automobile.entity';
import { AutomobileService } from './automobile.service';
import { CreateAutomobileDto } from './dto/create_automobile.dto';
import { UpdateAutomobileDto } from './dto/update_automobile.dto';
import { QueryAutomobileDto } from './dto/query_automobile.dto';
import { PaginationGetAllDto } from './dto/pagination_getall.dto';

@UsePipes(
  new ValidationPipe({
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
    // forbidNonWhitelisted: true,
    whitelist: true,
  }),
)
@Controller('api/automobile')
export class AutomobileController {
  constructor(private readonly automobileService: AutomobileService) {}
  @Get()
  findAll(@Query() query:QueryAutomobileDto): Promise<PaginationGetAllDto<Automobile>> {
    return this.automobileService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Automobile> {
    return this.automobileService.findOne(id);
  }

  @Post()
  create(@Body() automobile: CreateAutomobileDto): Promise<Automobile> {
    console.log(automobile)
    return this.automobileService.create(automobile);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() automobile: UpdateAutomobileDto,
  ): Promise<void> {
    return this.automobileService.update(id, automobile);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.automobileService.remove(id);
  }
}
