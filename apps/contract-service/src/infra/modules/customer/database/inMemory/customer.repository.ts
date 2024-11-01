import { Customer } from '@domain/customer/entity/customer.entity';
import CustomerRepositoryInterface from '@domain/customer/repository/customer-repository.interface';

export default class InMemoryCustomerRepository
  implements CustomerRepositoryInterface
{
  private itens: Customer[] = [
    new Customer({
      id: 1,
      props: {
        name: 'Test Customer',
        email: 'test@example.com',
        identity: '123456789',
        address: 'Test address',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  ];

  async findById(id: number): Promise<Customer> {
    return this.itens.find((customer) => customer.id === id) || null;
  }

  async findAll(): Promise<Customer[]> {
    return this.itens;
  }
}
