import CustomerRepositoryInterface from '@domain/customer/repository/customer-repository.interface';
import { GelAllCustomerOutput } from './get-all-customer.dto';

export default class GetAllCustomerUsecase {
  constructor(
    private readonly customerRepository: CustomerRepositoryInterface,
  ) {}

  async execute(): Promise<GelAllCustomerOutput[]> {
    const customers = await this.customerRepository.findAll();

    return customers.map((customer) => ({
      id: customer.id,
      name: customer.props.name,
      email: customer.props.email,
      identity: customer.props.identity,
      address: customer.props.address,
      createdAt: customer.createdAt,
      updatedAt: customer.updatedAt,
    }));
  }
}
