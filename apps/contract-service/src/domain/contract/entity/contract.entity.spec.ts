import { Currencies } from '@domain/_shared/constants/currencies.enum';
import { Contract, ContractProps, ContractStatus } from './contract.entity';

describe('Contract entity', () => {
  it('should create a new Contract entity', () => {
    const props: ContractProps = {
      name: 'Test contract',
      amount: 100,
      identifier: 'test-123',
      description: 'Test contract',
      currency: Currencies.USD,
      status: ContractStatus.draft,
      endDate: new Date(),
      startDate: new Date(),
      reniewDate: new Date(),
      contractorId: 1,
      contractedId: 2,
    };

    const contract = new Contract({
      id: 0,
      props: props,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(contract.props).toEqual(props);
  });
});
