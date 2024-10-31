import ContractRepositoryInterface from '@domain/contract/repository/contract-repository.interface';
import { FindContractInput, FindContractOutput } from './find-contract.dto';

export default class FindContractUsecase {
  constructor(
    private readonly contractRepository: ContractRepositoryInterface,
  ) {}

  async execute(input: FindContractInput): Promise<FindContractOutput | null> {
    const contract = await this.contractRepository.findById(input.id);

    if (!contract) return null;

    return {
      id: contract.id,
      name: contract.props.name,
      amount: contract.props.amount,
      currency: contract.props.currency,
      identifier: contract.props.identifier,
      description: contract.props.description,
      status: contract.props.status,
      endDate: contract.props.endDate,
      startDate: contract.props.startDate,
      reniewDate: contract.props.reniewDate,
      createdAt: contract.createdAt,
      updatedAt: contract.updatedAt,
    };
  }
}
