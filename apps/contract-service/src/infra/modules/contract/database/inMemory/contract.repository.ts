import { Contract } from '@domain/contract/entity/contract.entity';
import ContractRepositoryInterface from '@domain/contract/repository/contract-repository.interface';

export default class InMemoryContractRepository
  implements ContractRepositoryInterface
{
  private itens: Contract[] = [];

  async create(contract: Contract): Promise<Contract> {
    this.itens.push(contract);
    return contract;
  }

  async findById(id: number): Promise<Contract | null> {
    return this.itens.find((contract) => contract.id === id) || null;
  }

  async findAll(): Promise<Contract[]> {
    return this.itens;
  }

  async delete(id: number): Promise<void> {
    this.itens = this.itens.filter((contract) => contract.id !== id);
  }

  async update(contract: Contract): Promise<Contract> {
    const index = this.itens.findIndex((c) => c.id === contract.id);
    this.itens[index] = contract;
    return contract;
  }
}
