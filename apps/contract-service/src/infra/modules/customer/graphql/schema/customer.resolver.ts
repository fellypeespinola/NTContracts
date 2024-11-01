import { Args, Query, Resolver } from '@nestjs/graphql';
import FindCustomerUsecase from '@usecases/customer/find/find-customer.usecase';
import GetAllCustomerUsecase from '@usecases/customer/get-all/get-all-customer.usecase';
import CustomerSchemaGQL from './customer.schema';

@Resolver(() => CustomerSchemaGQL)
export class CustomerResolver {
  constructor(
    private readonly getAllCustomersUsecase: GetAllCustomerUsecase,
    private readonly findCustomerUsecase: FindCustomerUsecase,
  ) {}

  @Query(() => CustomerSchemaGQL, { name: 'getCustomer' })
  async getCustomer(
    @Args('id', { type: () => Number }) id: number,
  ): Promise<CustomerSchemaGQL | null> {
    return await this.findCustomerUsecase.execute({ id });
  }

  @Query(() => [CustomerSchemaGQL], { name: 'getAllCustomers' })
  async getAllCustomers(): Promise<CustomerSchemaGQL[]> {
    return await this.getAllCustomersUsecase.execute();
  }
}
