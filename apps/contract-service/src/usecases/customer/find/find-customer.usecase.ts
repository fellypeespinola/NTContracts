import CustomerRepositoryInterface from '@domain/customer/repository/customer-repository.interface';
import { FindCustomerInput, FindCustomerOutput } from './find-customer.dto';

export default class FindCustomerUsecase {
  constructor(
    private readonly customerRepository: CustomerRepositoryInterface,
  ) {}

  async execute(input: FindCustomerInput): Promise<FindCustomerOutput | null> {
    const customer = await this.customerRepository.findById(input.id);

    if (!customer) return null;

    return {
      id: customer.id,
      name: customer.props.name,
      email: customer.props.email,
      identity: customer.props.identity,
      address: customer.props.address,
      createdAt: customer.createdAt,
      updatedAt: customer.updatedAt,
    };
  }
}
