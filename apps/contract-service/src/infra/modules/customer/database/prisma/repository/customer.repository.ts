import { Inject } from '@nestjs/common';
import PrismaService from '@infra/modules/prisma/prisma.service';
import { Customer } from '@domain/customer/entity/customer.entity';
import CustomerRepositoryInterface from '@domain/customer/repository/customer-repository.interface';
import CustomerPrismaAdapter from '../adapter/customer.adapter';

export default class CustomerPrismaRepository
  implements CustomerRepositoryInterface
{
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  async findById(id: number): Promise<Customer> {
    const output = await this.prisma.customer.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });

    return output ? CustomerPrismaAdapter.toEntity(output) : null;
  }
  async findAll(): Promise<Customer[]> {
    const output = await this.prisma.customer.findMany({
      where: {
        deletedAt: null,
      },
    });
    return output.map((customer) => CustomerPrismaAdapter.toEntity(customer));
  }
}
