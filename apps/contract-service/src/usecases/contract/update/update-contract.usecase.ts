import { ContractStatus } from '@domain/contract/entity/contract.entity';
import ContractRepositoryInterface from '@domain/contract/repository/contract-repository.interface';
import {
  UpdateContractInput,
  UpdateContractOutput,
} from './update-contract.dto';
import { Currencies } from '@domain/_shared/constants/currencies.enum';

export default class UpdateContractUsecase {
  constructor(
    private readonly contractRepository: ContractRepositoryInterface,
  ) {}

  async execute(input: UpdateContractInput): Promise<UpdateContractOutput> {
    const contract = await this.contractRepository.findById(input.id);
    if (!contract) throw new Error('Contract not found');

    contract.updateProps({
      name: input.name,
      amount: input.amount,
      currency: Currencies[input.currency],
      identifier: input.identifier,
      description: input.description,
      status: ContractStatus[input.status],
      endDate: input.endDate,
      startDate: input.startDate,
      reniewDate: input.reniewDate,
    });

    const output = await this.contractRepository.update(contract);

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
