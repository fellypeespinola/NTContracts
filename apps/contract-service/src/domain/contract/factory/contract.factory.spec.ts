import { Currencies } from '@domain/_shared/constants/currencies.enum';
import {
  Contract,
  ContractProps,
  ContractStatus,
} from '../entity/contract.entity';
import ContractFactory from './contract.factory';

describe('Contract Factory', () => {
  it('should create a new contract entity', () => {
    const props: Partial<ContractProps> = {
      name: 'Test contract',
      amount: 100,
      currency: Currencies.USD,
      identifier: 'test-123',
      description: 'Test contract',
      status: ContractStatus.notSigned,
      endDate: new Date(),
      startDate: new Date(),
      reniewDate: new Date(),
      contractorId: 1,
      contractedId: 2,
    };

    const contract = ContractFactory.create(props);

    expect(contract).toBeInstanceOf(Contract);
    expect(contract.props).toEqual(props);
  });

  it('should generate a new identifier if not provided', () => {
    const props: Partial<ContractProps> = {
      name: 'Test contract',
      amount: 100,
      currency: Currencies.BRL,
      description: 'Test contract',
      status: ContractStatus.draft,
      endDate: new Date(),
      startDate: new Date(),
      reniewDate: new Date(),
      contractorId: 1,
      contractedId: 2,
    };

    const contract = ContractFactory.create(props);

    expect(contract.props.identifier).toBeDefined();
    expect(contract.props.identifier).not.toBeNull();
    expect(contract.props.identifier).not.toBeUndefined();
  });
});
