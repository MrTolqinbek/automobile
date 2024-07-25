import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsNumberOrArrayOfNumbers(
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isStringOrArrayOfStrings',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (!Number.isNaN(parseInt(value)) && +value > 1910) {
            return true;
          }
          if (Array.isArray(value)) {
            return value.every(
              (item) => !Number.isNaN(parseInt(item)) && +item > 1910,
            );
          }
          return false;
        },
        defaultMessage(args: ValidationArguments) {
          return 'Property $property must be a number or an array of numbers and must be greater than 1910';
        },
      },
    });
  };
}
