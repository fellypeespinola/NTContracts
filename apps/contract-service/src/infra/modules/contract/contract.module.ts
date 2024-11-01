import { Module } from '@nestjs/common';
import FindContractUsecase from '@usecases/contract/find/find-contract.usecase';
import CreateContractUsecase from '@usecases/contract/create/create-contract.usecase';
import UpdateContractUsecase from '@usecases/contract/update/update-contract.usecase';
import GetAllContractsUsecase from '@usecases/contract/get-all/get-all-contracts.usecase';
import ContractRepositoryInterface from '@domain/contract/repository/contract-repository.interface';
import { PrismaModule } from '../prisma/prisma.module';
import { ContractResolver } from './graphql/contract.resolver';
import ContractPrismaRepository from './database/prisma/repository/contract.repository';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [
    ContractPrismaRepository,
    ContractResolver,
    {
      inject: [ContractPrismaRepository],
      provide: GetAllContractsUsecase,
      useFactory: (contractRepository: ContractRepositoryInterface) => {
        return new GetAllContractsUsecase(contractRepository);
      },
    },
    {
      inject: [ContractPrismaRepository],
      provide: FindContractUsecase,
      useFactory: (contractRepository: ContractRepositoryInterface) => {
        return new FindContractUsecase(contractRepository);
      },
    },
    {
      inject: [ContractPrismaRepository],
      provide: CreateContractUsecase,
      useFactory: (contractRepository: ContractRepositoryInterface) => {
        return new CreateContractUsecase(contractRepository);
      },
    },
    {
      inject: [ContractPrismaRepository],
      provide: UpdateContractUsecase,
      useFactory: (contractRepository: ContractRepositoryInterface) => {
        return new UpdateContractUsecase(contractRepository);
      },
    },
  ],
})
export class ContractModule {}
