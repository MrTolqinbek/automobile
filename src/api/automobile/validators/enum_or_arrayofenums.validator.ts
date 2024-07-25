import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsEnumOrArrayOfEnums(enumType: any, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isEnumOrArrayOfEnums',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (Object.values(enumType).includes(value)) {
            return true;
          }
          if (Array.isArray(value)) {
            return value.every(item => Object.values(enumType).includes(item));
          }
          return false;
        },
        defaultMessage(args: ValidationArguments) {
          return `Property ${args.property} must be an enum value or an array of enum values`;
        },
      },
    });
  };
}
