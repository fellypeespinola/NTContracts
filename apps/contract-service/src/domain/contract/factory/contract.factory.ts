import { Contract, ContractProps } from '../entity/contract.entity';
export default class ContractFactory {
  public static create(props: Partial<ContractProps>) {
    return new Contract({
      id: 0,
      props: {
        name: props.name,
        amount: props.amount,
        currency: props.currency,
        identifier: props.identifier,
        description: props.description,
        status: props.status,
        endDate: props.endDate,
        startDate: props.startDate,
        reniewDate: props.reniewDate,
        contractorId: props.contractorId,
        contractedId: props.contractedId,
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
