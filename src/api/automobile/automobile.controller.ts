import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
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
  @HttpCode(200)
  findAll(@Query() query:QueryAutomobileDto): Promise<PaginationGetAllDto<Automobile>> {
    return this.automobileService.findAll(query);
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: number): Promise<Automobile> {
    return this.automobileService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() automobile: CreateAutomobileDto): Promise<Automobile> {
    return this.automobileService.create(automobile);
  }

  @Put(':id')
  @HttpCode(203)
  update(
    @Param('id') id: number,
    @Body() automobile: UpdateAutomobileDto,
  ): Promise<Automobile> {
    return this.automobileService.update(id, automobile);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number): Promise<void> {
    return this.automobileService.remove(id);
  }
}
