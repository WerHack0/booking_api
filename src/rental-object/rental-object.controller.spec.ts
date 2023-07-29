import { Test, TestingModule } from '@nestjs/testing';
import { RentalObjectController } from './rental-object.controller';

describe('RentalObjectController', () => {
  let controller: RentalObjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentalObjectController],
    }).compile();

    controller = module.get<RentalObjectController>(RentalObjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
