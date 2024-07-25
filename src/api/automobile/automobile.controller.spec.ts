import { Test, TestingModule } from '@nestjs/testing';
import { AutomobileController } from './automobile.controller';

describe('AutomobileController', () => {
  let controller: AutomobileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutomobileController],
    }).compile();

    controller = module.get<AutomobileController>(AutomobileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
