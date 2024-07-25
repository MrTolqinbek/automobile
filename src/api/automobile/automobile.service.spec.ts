import { Test, TestingModule } from '@nestjs/testing';
import { AutomobileService } from './automobile.service';

describe('AutomobileService', () => {
  let service: AutomobileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomobileService],
    }).compile();

    service = module.get<AutomobileService>(AutomobileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
