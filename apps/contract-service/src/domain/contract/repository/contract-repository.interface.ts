import { Contract } from '../entity/contract.entity';
export default interface ContractRepositoryInterface {
  create(contract: Contract): Promise<Contract>;
  update(contract: Contract): Promise<Contract>;
  findById(id: number): Promise<Contract | null>;
  findAll(): Promise<Contract[]>;
  delete(id: number): Promise<void>;
}
