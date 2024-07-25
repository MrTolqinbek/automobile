import { IsEnumOrArrayOfEnums } from '../validators/enum_or_arrayofenums.validator';
import { IsNumberOrArrayOfNumbers } from '../validators/number_or_arrayofnumber.validator';
import { IsStringOrArrayOfStrings } from '../validators/string_or_arrayofstring.validator';
import { AutoMobileType } from './../enum/auto_mobile_type.enum';
import { SortOrder } from './../enum/order.enum';
import { SortField } from './../enum/sort.enum';
import { IsArray, IsEnum, IsInt, IsOptional, IsString, Min, Max } from 'class-validator';

export class QueryAutomobileDto {

    
  @IsOptional()
  @IsStringOrArrayOfStrings()
  model?: string[]|string;

  @IsOptional()
  @IsEnumOrArrayOfEnums(AutoMobileType)
  type_auto?: AutoMobileType[]|AutoMobileType;

  @IsOptional()
  @IsNumberOrArrayOfNumbers()
  year_publication?: number[];

  @IsOptional()
  @IsStringOrArrayOfStrings()
  color?: string[];

  @IsOptional()
  @IsEnum(SortField)
  sort?: SortField;

  @IsOptional()
  @IsEnum(SortOrder)
  order?: SortOrder;

  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number;

  @IsOptional()
  @IsInt()
  @Min(10)
  limit?: number;
}
