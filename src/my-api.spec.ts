import { Test, TestingModule } from '@nestjs/testing';
import { MyApi } from './my-api';

describe('MyApi', () => {
  let provider: MyApi;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyApi],
    }).compile();

    provider = module.get<MyApi>(MyApi);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
