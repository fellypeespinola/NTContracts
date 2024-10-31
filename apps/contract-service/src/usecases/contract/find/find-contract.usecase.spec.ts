import { Currencies } from '@domain/_shared/constants/currencies.enum';
import ContractFactory from '@domain/contract/factory/contract.factory';
import { ContractStatus } from '@domain/contract/entity/contract.entity';
import ContractRepositoryInterface from '@domain/contract/repository/contract-repository.interface';
import InMemoryContractRepository from '@infra/modules/contract/database/inMemory/contract.repository';
import { FindContractInput } from './find-contract.dto';
import FindContractUsecase from './find-contract.usecase';

describe('Find Contract Use Case', () => {
  let sut: FindContractUsecase;
  let repository: ContractRepositoryInterface;

  const contract = ContractFactory.create({
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

  beforeEach(() => {
    repository = new InMemoryContractRepository();
    sut = new FindContractUsecase(repository);

    repository.create(contract);
  });

  it('should return contract details if contract is found', async () => {
    const input: FindContractInput = { id: contract.id };

    const result = await sut.execute(input);

    expect(result).toEqual({
      id: expect.any(Number),
      name: contract.props.name,
      amount: contract.props.amount,
      currency: contract.props.currency,
      identifier: contract.props.identifier,
      description: contract.props.description,
      status: contract.props.status,
      endDate: contract.props.endDate,
      startDate: contract.props.startDate,
      reniewDate: contract.props.reniewDate,
      createdAt: contract.createdAt,
      updatedAt: contract.updatedAt,
    });
  });

  it('should return null if contract is not found', async () => {
    const input: FindContractInput = { id: 1 };

    const result = await sut.execute(input);

    expect(result).toBeNull();
  });
});
