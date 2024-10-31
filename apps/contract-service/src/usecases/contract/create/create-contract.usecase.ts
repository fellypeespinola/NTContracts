import ContractFactory from '@domain/contract/factory/contract.factory';
import ContractRepositoryInterface from '@domain/contract/repository/contract-repository.interface';
import {
  CreateContractInput,
  CreateContractOutput,
} from './create-contract.dto';
import { Currencies } from '@domain/_shared/constants/currencies.enum';

export default class CreateContractUsecase {
  constructor(
    private readonly contractRepository: ContractRepositoryInterface,
  ) {}

  async execute(input: CreateContractInput): Promise<CreateContractOutput> {
    const contract = ContractFactory.create({
      name: input.name,
      amount: input.amount,
      currency: Currencies[input.currency],
      description: input.description,
      endDate: input.endDate,
      startDate: input.startDate,
      reniewDate: input.reniewDate,
      contractorId: input.contractorId,
      contractedId: input.contractedId,
    });

    contract.generateIdentifier();

    const output = await this.contractRepository.create(contract);

    return {
      id: output.id,
      name: output.props.name,
      amount: output.props.amount,
      currency: output.props.currency,
      identifier: output.props.identifier,
      description: output.props.description,
      status: output.props.status,
      endDate: output.props.endDate,
      startDate: output.props.startDate,
      reniewDate: output.props.reniewDate,
      createdAt: output.createdAt,
      updatedAt: output.updatedAt,
    };
  }
}
