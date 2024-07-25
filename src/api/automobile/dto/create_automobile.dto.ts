import { IsEnum, IsInt, IsNotEmpty, IsString, Matches, Max, Min } from 'class-validator';
import { AutoMobileType } from '../enum/auto_mobile_type.enum';

export class CreateAutomobileDto {
  @IsString()
  @IsNotEmpty({ message: 'Model is required.' })
  @Matches(/^[a-zA-Z0-9\s]{3,50}$/, {
    message: 'Model must be between 3 and 50 characters and contain only alphanumeric characters and spaces.',
  })
  model: string;
  
  @IsNotEmpty({ message: 'TypeAuto is required.' })
  @IsEnum(AutoMobileType, {
    message: `type_auto must be one of the following values: ${Object.values(AutoMobileType).join(', ')}`,
  })
  type_auto: AutoMobileType;

  @IsInt()
  @IsNotEmpty({ message: 'Year of Publication is required.' })
  @Min(1910, {
    message: 'Year of publication must be greater 1910 ',
  })
  year_publication: number;

  @IsString()
  @IsNotEmpty({ message: 'Color is required.' })
  @Matches(/^[a-zA-Z']{2,20}$/, {
    message: 'Color must be between 2 and 20 characters and contain only alphabetic characters.',
  })
  color: string;
}
