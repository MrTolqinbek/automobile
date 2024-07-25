import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnumOrArrayOfEnums } from '../validators/enum_or_arrayofenums.validator';
import { IsNumberOrArrayOfNumbers } from '../validators/number_or_arrayofnumber.validator';
import { IsStringOrArrayOfStrings } from '../validators/string_or_arrayofstring.validator';
import { AutoMobileType } from './../enum/auto_mobile_type.enum';
import { SortOrder } from './../enum/order.enum';
import { SortField } from './../enum/sort.enum';
import { IsArray, IsEnum, IsInt, IsOptional, IsString, Min, Max } from 'class-validator';

export class QueryAutomobileDto {

  @ApiPropertyOptional({
    description: 'Automobile model',
    type: 'array',
    items: { type: 'string' },
    required: false,
  })
  @IsOptional()
  @IsStringOrArrayOfStrings()
  model?: string[]|string;


  @ApiPropertyOptional({
    description: 'Automobile type',
    type: 'array',
    items: { type: 'enum' },
    example:[AutoMobileType.SEDAN, AutoMobileType.SUV, AutoMobileType.TRUCK],
    required: false,
  })
  @IsOptional()
  @IsEnumOrArrayOfEnums(AutoMobileType)
  type_auto?: AutoMobileType[]|AutoMobileType;


  @ApiPropertyOptional({
    description: 'Automobile publication year',
    type: 'array',
    items: { type: 'number' },
    required: false,
    minimum: 1910,
    maximum: new Date().getFullYear()+1,
  })
  @IsOptional()
  @IsNumberOrArrayOfNumbers()
  year_publication?: number[];

  @ApiPropertyOptional({
    description: 'Automobile color',
    type: 'array',
    items: { type:'string' },
    required: false,
  })
  @IsOptional()
  @IsStringOrArrayOfStrings()
  color?: string[];

  @ApiPropertyOptional({
    description: 'Sort by field',
    type: 'enum',
    example: SortField.MODEL,
    required: false,
    enum: SortField,
  })
  @IsOptional()
  @IsEnum(SortField)
  sort?: SortField;

  @ApiPropertyOptional({
    description: 'Sort order',
    type: 'enum',
    example: SortOrder.ASC,
    required: false,
    enum: SortOrder,
  })
  @IsOptional()
  @IsEnum(SortOrder)
  order?: SortOrder;

  @ApiPropertyOptional({
    description: 'Page number',
    type: 'number',
    example: 1,
    required: false,
    minimum: 1,
    })
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({
    description: 'Items per page',
    type: 'number',
    example: 17,
    required: false,
    minimum: 1,
    default: 10,
  
  })
  @IsOptional()
  @IsInt()
  @Min(10)
  limit?: number;
}
