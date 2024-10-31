import { Currencies } from '@domain/_shared/constants/currencies.enum';
import { ContractStatus } from '@domain/contract/entity/contract.entity';
import ContractRepositoryInterface from '@domain/contract/repository/contract-repository.interface';
import InMemoryContractRepository from '@infra/modules/contract/database/inMemory/contract.repository';
import { CreateContractInput } from './create-contract.dto';
import CreateContractUsecase from './create-contract.usecase';

describe('Create Contract Use Case', () => {
  let sut: CreateContractUsecase;
  let repository: ContractRepositoryInterface;

  beforeEach(() => {
    repository = new InMemoryContractRepository();
    sut = new CreateContractUsecase(repository);
  });

  it('should create a new contract', async () => {
    const input: CreateContractInput = {
      name: 'Test contract',
      amount: 100,
      currency: Currencies.USD,
      description: 'Test contract',
      endDate: new Date(),
      startDate: new Date(),
      reniewDate: new Date(),
      contractorId: 1,
      contractedId: 2,
    };

    const result = await sut.execute(input);

    expect(result).toEqual({
      id: expect.any(Number),
      name: input.name,
      amount: input.amount,
      currency: Currencies[input.currency],
      identifier: expect.any(String),
      description: input.description,
      status: ContractStatus.draft,
      endDate: input.endDate,
      startDate: input.startDate,
      reniewDate: input.reniewDate,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });
});
