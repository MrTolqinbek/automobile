import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
  ValidateIf,
} from 'class-validator';
import { AutoMobileType } from '../enum/auto_mobile_type.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAutomobileDto {
  @ApiPropertyOptional({
    description: 'Automobile model',
    example: 'Model A',
    type: 'string',
    required: false,
  })
  @ValidateIf((o) => !o.type_auto && !o.year_publication && !o.color)
  @IsString()
  @Matches(/^[a-zA-Z0-9\s]{3,50}$/, {
    message:
      'Model must be between 3 and 50 characters and contain only alphanumeric characters and spaces.',
  })
  model?: string;

  @ApiPropertyOptional({
    description: 'Automobile type',
    example: 'suv',
    type: 'enum',
    required: false,
    enum: AutoMobileType,
  })
  @ValidateIf((o) => !o.model && !o.year_publication && !o.color)
  @IsEnum(AutoMobileType, {
    message: `type_auto must be one of the following values: ${Object.values(AutoMobileType).join(', ')}`,
  })
  type_auto?: AutoMobileType;

  @ApiPropertyOptional({
    description: 'Automobile publication year',
    example: 2015,
    type: 'number',
    required: false,
  })
  @ValidateIf((o) => !o.type_auto && !o.model && !o.color)
  @IsInt()
  @Min(1910, {
    message: 'Year of publication must be greater 1910 ',
  })
  year_publication?: number;

  @ApiPropertyOptional({
    description: 'Automobile color',
    example: 'black',
    type: 'string',
    required: false,
  })
  @ValidateIf((o) => !o.type_auto && !o.year_publication && !o.model)
  @IsString()
  @Matches(/^[a-zA-Z']{2,20}$/, {
    message:
      'Color must be between 2 and 20 characters and contain only alphabetic characters.',
  })
  color?: string;
}
