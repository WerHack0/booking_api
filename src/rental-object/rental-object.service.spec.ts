import { Test, TestingModule } from '@nestjs/testing';
import { RentalObjectService } from './rental-object.service';

describe('RentalObjectService', () => {
  let service: RentalObjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentalObjectService],
    }).compile();

    service = module.get<RentalObjectService>(RentalObjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
