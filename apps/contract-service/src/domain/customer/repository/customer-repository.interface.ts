import { Customer } from '../entity/customer.entity';

export default interface CustomerRepositoryInterface {
  findById(id: number): Promise<Customer>;
  findAll(): Promise<Customer[]>;
}
