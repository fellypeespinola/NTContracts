import { Module } from '@nestjs/common';
import FindCustomerUsecase from '@usecases/customer/find/find-customer.usecase';
import GetAllCustomerUsecase from '@usecases/customer/get-all/get-all-customer.usecase';
import CustomerRepositoryInterface from '@domain/customer/repository/customer-repository.interface';
import { PrismaModule } from '../prisma/prisma.module';
import { CustomerResolver } from './graphql/schema/customer.resolver';
import CustomerPrismaRepository from './database/prisma/repository/customer.repository';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [
    CustomerPrismaRepository,
    CustomerResolver,
    {
      inject: [CustomerPrismaRepository],
      provide: GetAllCustomerUsecase,
      useFactory: (customerRepository: CustomerRepositoryInterface) => {
        return new GetAllCustomerUsecase(customerRepository);
      },
    },
    {
      inject: [CustomerPrismaRepository],
      provide: FindCustomerUsecase,
      useFactory: (customerRepository: CustomerRepositoryInterface) => {
        return new FindCustomerUsecase(customerRepository);
      },
    },
  ],
})
export class CustomerModule {}
