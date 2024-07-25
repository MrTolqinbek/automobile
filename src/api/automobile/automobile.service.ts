import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Automobile } from 'src/model/automobile.entity';
import { FindOptionsOrder, FindOptionsWhere, In, Repository } from 'typeorm';
import { CreateAutomobileDto } from './dto/create_automobile.dto';
import { UpdateAutomobileDto } from './dto/update_automobile.dto';
import { BadRequestType } from 'src/common/enums/error_types.enum';
import { QueryAutomobileDto } from './dto/query_automobile.dto';
import { SortOrder } from './enum/order.enum';
import { PaginationGetAllDto } from './dto/pagination_getall.dto';

@Injectable()
export class AutomobileService {
  constructor(
    @InjectRepository(Automobile)
    private automobileRepository: Repository<Automobile>,
  ) {}
  async findAll(query: QueryAutomobileDto): Promise<PaginationGetAllDto<Automobile>> {
    const {
      model,
      type_auto,
      year_publication,
      color,
      sort,
      order,
      page = 1,
      limit = 10,
    } = query;
    const where: FindOptionsWhere<Automobile> = {};
    if (model) {
      if (Array.isArray(model)) {
        where.model = In(model);
      } else {
        where.model = model;
      }
    }
    if (type_auto) {
      if (Array.isArray(type_auto)) {
        where.type_auto = In(type_auto);
      } else {
        where.type_auto = type_auto;
      }
    }
    if (year_publication) {
      if (Array.isArray(year_publication)) {
        where.year_publication = In(year_publication);
      } else {
        where.year_publication = year_publication;
      }
    }
    if (color) {
      if (Array.isArray(color)) {
        where.color = In(color);
      } else {
        where.color = color;
      }
    }

    const orderOptions: FindOptionsOrder<Automobile> = {};
    if (sort) {
      orderOptions[sort] = order || SortOrder.ASC;
    } else if (order) {
      orderOptions.year_publication = order;
    } else {
      orderOptions.year_publication = SortOrder.ASC;
    }

    const [items, total] = await this.automobileRepository.findAndCount({
      where,
      order: orderOptions,
      skip: (page - 1) * limit,
      take: limit,
    });

    return new PaginationGetAllDto(items,total,page,limit)

  }

  async findOne(id: number): Promise<Automobile> {
    const a = await this.automobileRepository.findOne({ where: { id } });
    if (!a) {
      throw new BadRequestException({
        error: BadRequestType.AUTOMOBILE_NOT_FOUND,
        details: {
          message: 'No Automobile found for this id',
        },
      });
    }
    return this.automobileRepository.findOne({ where: { id } });
  }

  async create(automobile: CreateAutomobileDto): Promise<Automobile> {
    const a = this.automobileRepository.create(automobile);
    return await this.automobileRepository.save(automobile);
  }

  async update(id: number, automobile: UpdateAutomobileDto): Promise<void> {
    const a = await this.automobileRepository.findOne({ where: { id } });
    if (!a) {
      throw new BadRequestException({
        error: BadRequestType.AUTOMOBILE_NOT_FOUND,
        details: {
          message: 'No Automobile found for this id',
        },
      });
    }
    await this.automobileRepository.update(id, automobile);
  }

  async remove(id: number): Promise<void> {
    const a = await this.automobileRepository.findOne({ where: { id } });
    if (!a) {
      throw new BadRequestException({
        error: BadRequestType.AUTOMOBILE_NOT_FOUND,
        details: {
          message: 'No Automobile found for this id',
        },
      });
    }
    await this.automobileRepository.delete(id);
  }
}
