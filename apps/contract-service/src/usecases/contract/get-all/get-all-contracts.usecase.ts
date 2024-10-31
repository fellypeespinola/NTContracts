import ContractRepositoryInterface from '@domain/contract/repository/contract-repository.interface';
import { GelAllContractOutput } from './get-all-contracts.dto';

export default class GetAllContractsUsecase {
  constructor(
    private readonly contractRepository: ContractRepositoryInterface,
  ) {}

  async execute(): Promise<GelAllContractOutput[]> {
    const contracts = await this.contractRepository.findAll();

    return contracts.map((contract) => ({
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
    }));
  }
}
