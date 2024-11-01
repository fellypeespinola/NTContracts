import { Customer as PrismaCustomer } from '@prisma/client';
import { Customer } from '@domain/customer/entity/customer.entity';

export default class CustomerPrismaAdapter {
  static toEntity(data: Partial<PrismaCustomer>): Customer {
    return new Customer({
      id: data.id,
      props: {
        name: data.name,
        email: data.email,
        identity: data.identity,
        address: data.address,
      },
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      deletedAt: data.deletedAt,
    });
  }
}
