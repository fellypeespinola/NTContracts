import { Prisma } from '@prisma/client';
import { Currencies } from '@domain/_shared/constants/currencies.enum';
import {
  Contract,
  ContractStatus,
} from '@domain/contract/entity/contract.entity';

type ContractWithIncludes = Prisma.ContractGetPayload<{
  include: {
    contracted: true;
    contractor: true;
  };
}>;

export default class ContractPrismaAdapter {
  static toEntity(data: Partial<ContractWithIncludes>): Contract {
    return new Contract({
      id: data.id,
      props: {
        name: data.name,
        amount: data.amount,
        currency: Currencies[data.currency],
        identifier: data.identifier,
        description: data.description,
        status: ContractStatus[data.status],
        endDate: data.endDate,
        startDate: data.startDate,
        reniewDate: data.reniewDate,
        contractorId: data.contractorId,
        contractedId: data.contractedId,
      },
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      deletedAt: data.deletedAt,
    });
  }
}
