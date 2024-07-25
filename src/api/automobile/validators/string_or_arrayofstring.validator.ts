import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsStringOrArrayOfStrings(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isStringOrArrayOfStrings',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value === 'string') {
            return true;
          }
          if (Array.isArray(value)) {
            return value.every(item => typeof item === 'string');
          }
          return false;
        },
        defaultMessage(args: ValidationArguments) {
          return 'Property $property must be a string or an array of strings';
        },
      },
    });
  };
}
