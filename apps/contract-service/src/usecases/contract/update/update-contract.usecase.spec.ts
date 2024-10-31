import { Currencies } from '@domain/_shared/constants/currencies.enum';
import ContractFactory from '@domain/contract/factory/contract.factory';
import { ContractStatus } from '@domain/contract/entity/contract.entity';
import ContractRepositoryInterface from '@domain/contract/repository/contract-repository.interface';
import InMemoryContractRepository from '@infra/modules/contract/database/inMemory/contract.repository';
import { UpdateContractInput } from './update-contract.dto';
import UpdateContractUsecase from './update-contract.usecase';

describe('Update Contract Use Case', () => {
  let sut: UpdateContractUsecase;
  let repository: ContractRepositoryInterface;

  const contract = ContractFactory.create({
    name: 'Test Contract',
    amount: 100,
    currency: Currencies.USD,
    identifier: 'test-123',
    description: 'Test contract description',
    status: ContractStatus.draft,
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    startDate: new Date(),
    reniewDate: new Date(),
    contractorId: 1,
    contractedId: 2,
  });

  beforeEach(() => {
    repository = new InMemoryContractRepository();
    sut = new UpdateContractUsecase(repository);

    repository.create(contract);
  });

  it('should update contract properties and save the contract', async () => {
    const input: UpdateContractInput = {
      id: contract.id,
      name: 'Updated Contract',
      amount: 200,
      currency: Currencies.USD,
      description: 'Updated contract description',
      status: 'canceled',
      endDate: new Date(),
      startDate: new Date(),
      reniewDate: new Date(),
    };

    const result = await sut.execute(input);

    expect(result).toEqual({
      id: contract.id,
      name: input.name,
      amount: input.amount,
      currency: input.currency,
      identifier: input.identifier,
      description: input.description,
      status: ContractStatus.canceled,
      endDate: input.endDate,
      startDate: input.startDate,
      reniewDate: input.reniewDate,
      createdAt: contract.createdAt,
      updatedAt: contract.updatedAt,
    });
  });

  it('should throw an error if contract is not found', async () => {
    const input: UpdateContractInput = {
      id: 2,
    };

    await expect(sut.execute(input)).rejects.toThrow('Contract not found');
  });
});
