import CustomerRepositoryInterface from '@domain/customer/repository/customer-repository.interface';
import InMemoryCustomerRepository from '@infra/modules/customer/database/inMemory/customer.repository';
import { FindCustomerInput } from './find-customer.dto';
import FindCustomerUsecase from './find-customer.usecase';

describe('Find Customer Usecase', () => {
  let sut: FindCustomerUsecase;
  let repository: CustomerRepositoryInterface;

  beforeEach(() => {
    repository = new InMemoryCustomerRepository();
    sut = new FindCustomerUsecase(repository);
  });

  it('should return customer details if customer is found', async () => {
    const input: FindCustomerInput = { id: 1 };

    const result = await sut.execute(input);

    expect(result).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      email: expect.any(String),
      identity: expect.any(String),
      address: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  it('should return null if customer is not found', async () => {
    const input: FindCustomerInput = { id: 2 };

    const result = await sut.execute(input);

    expect(result).toBeNull();
  });
});
