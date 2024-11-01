import { Inject } from '@nestjs/common';
import PrismaService from '@infra/modules/prisma/prisma.service';
import { Contract } from '@domain/contract/entity/contract.entity';
import ContractRepositoryInterface from '@domain/contract/repository/contract-repository.interface';
import ContractPrismaAdapter from '../adapter/contract.adapter';

export default class ContractPrismaRepository
  implements ContractRepositoryInterface
{
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}
  async create(contract: Contract): Promise<Contract> {
    const output = await this.prisma.contract.create({
      data: {
        name: contract.props.name,
        amount: contract.props.amount,
        currency: contract.props.currency,
        identifier: contract.props.identifier,
        description: contract.props.description,
        status: contract.props.status,
        endDate: contract.props.endDate,
        startDate: contract.props.startDate,
        reniewDate: contract.props.reniewDate,
        contractorId: contract.props.contractorId,
        contractedId: contract.props.contractedId,
        createdAt: contract.createdAt,
        updatedAt: contract.updatedAt,
      },
      include: {
        contracted: true,
        contractor: true,
      },
    });

    return ContractPrismaAdapter.toEntity(output);
  }
  async findById(id: number): Promise<Contract | null> {
    const output = await this.prisma.contract.findUnique({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        contracted: true,
        contractor: true,
      },
    });

    return output ? ContractPrismaAdapter.toEntity(output) : null;
  }
  async findAll(): Promise<Contract[]> {
    const output = await this.prisma.contract.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        contracted: true,
        contractor: true,
      },
    });
    return output.map((contract) => ContractPrismaAdapter.toEntity(contract));
  }
  async delete(id: number): Promise<void> {
    await this.prisma.contract.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async update(contract: Contract): Promise<Contract> {
    const output = await this.prisma.contract.update({
      where: {
        id: contract.id,
        deletedAt: null,
      },
      data: {
        name: contract.props.name,
        amount: contract.props.amount,
        currency: contract.props.currency,
        identifier: contract.props.identifier,
        description: contract.props.description,
        status: contract.props.status,
        endDate: contract.props.endDate,
        startDate: contract.props.startDate,
        reniewDate: contract.props.reniewDate,
        contractorId: contract.props.contractorId,
        contractedId: contract.props.contractedId,
        createdAt: contract.createdAt,
        updatedAt: contract.updatedAt,
      },
      include: {
        contracted: true,
        contractor: true,
      },
    });

    return ContractPrismaAdapter.toEntity(output);
  }
}
