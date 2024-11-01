import CustomerRepositoryInterface from '@domain/customer/repository/customer-repository.interface';
import InMemoryCustomerRepository from '@infra/modules/customer/database/inMemory/customer.repository';
import GetAllCustomerUsecase from './get-all-customer.usecase';

describe('Get All Customer Usecase', () => {
  let sut: GetAllCustomerUsecase;
  let repository: CustomerRepositoryInterface;

  beforeEach(async () => {
    repository = new InMemoryCustomerRepository();
    sut = new GetAllCustomerUsecase(repository);
  });

  it('should return a list of customers', async () => {
    const result = await sut.execute();

    expect(result.length).toBe(1);
  });
});
