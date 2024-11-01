import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import FindContractUsecase from '@usecases/contract/find/find-contract.usecase';
import CreateContractUsecase from '@usecases/contract/create/create-contract.usecase';
import UpdateContractUsecase from '@usecases/contract/update/update-contract.usecase';
import GetAllContractsUsecase from '@usecases/contract/get-all/get-all-contracts.usecase';

import ContractSchemaGQL from './contract.schema';
import { CreateContractInput, UpdateContractInput } from './contract.input';

@Resolver(() => ContractSchemaGQL)
export class ContractResolver {
  constructor(
    private readonly findContractUsecase: FindContractUsecase,
    private readonly createContractUsecase: CreateContractUsecase,
    private readonly updateContractUsecase: UpdateContractUsecase,
    private readonly getAllContractsUsecase: GetAllContractsUsecase,
  ) {}

  @Query(() => ContractSchemaGQL, { name: 'getContract' })
  async getContract(
    @Args('id', { type: () => Number }) id: number,
  ): Promise<ContractSchemaGQL | null> {
    return await this.findContractUsecase.execute({ id });
  }

  @Query(() => [ContractSchemaGQL], { name: 'getAllContracts' })
  async getAllContracts(): Promise<ContractSchemaGQL[]> {
    return await this.getAllContractsUsecase.execute();
  }

  @Mutation(() => ContractSchemaGQL)
  async createContract(
    @Args('createContractInput') createContractInput: CreateContractInput,
  ): Promise<ContractSchemaGQL> {
    return await this.createContractUsecase.execute(createContractInput);
  }

  @Mutation(() => ContractSchemaGQL)
  async updateContract(
    @Args('updateContractInput') updateContractInput: UpdateContractInput,
  ): Promise<ContractSchemaGQL> {
    return await this.updateContractUsecase.execute(updateContractInput);
  }
}
