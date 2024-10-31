import { Currencies } from '@domain/_shared/constants/currencies.enum';
import ContractFactory from '@domain/contract/factory/contract.factory';
import { ContractStatus } from '@domain/contract/entity/contract.entity';
import ContractRepositoryInterface from '@domain/contract/repository/contract-repository.interface';
import InMemoryContractRepository from '@infra/modules/contract/database/inMemory/contract.repository';
import GetAllContractsUseCase from './get-all-contracts.usecase';

describe('Get All Contracts Use Case', () => {
  let sut: GetAllContractsUseCase;
  let repository: ContractRepositoryInterface;

  const contractOne = ContractFactory.create({
    name: 'Test Contract',
    amount: 100,
    currency: Currencies.USD,
    identifier: 'test-123',
    description: 'Test contract description',
    status: ContractStatus.draft,
    endDate: new Date(),
    startDate: new Date(),
    reniewDate: new Date(),
    contractorId: 1,
    contractedId: 2,
  });

  const contractTwo = ContractFactory.create({
    name: 'Test Contract Two',
    amount: 150,
    currency: Currencies.BRL,
    identifier: 'test-123',
    description: 'Test contract description',
    status: ContractStatus.canceled,
    endDate: new Date(),
    startDate: new Date(),
    reniewDate: new Date(),
    contractorId: 1,
    contractedId: 2,
  });

  beforeEach(() => {
    repository = new InMemoryContractRepository();
    sut = new GetAllContractsUseCase(repository);

    repository.create(contractOne);
    repository.create(contractTwo);
  });

  it('should return contracts list', async () => {
    const result = await sut.execute();

    expect(result.length).toBe(2);
  });
});
