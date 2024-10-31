import { Customer } from '@domain/customer/entity/customer.entity';
import { Currencies } from '@domain/_shared/constants/currencies.enum';
import {
  BaseEntity,
  CreateEntityProps,
} from '@domain/_shared/entity/base.entity';

export enum ContractStatus {
  draft = 'draft',
  signed = 'signed',
  canceled = 'canceled',
  notSigned = 'not_signed',
  terminated = 'terminated',
}

export interface ContractProps {
  name: string;
  amount: number;
  identifier: string;
  description: string;
  currency: Currencies;
  status: ContractStatus;
  endDate: Date;
  startDate: Date;
  reniewDate: Date;
  contractorId: number;
  contractedId: number;
  contractor?: Customer;
  contracted?: Customer;
}

export class Contract extends BaseEntity<ContractProps> {
  protected _id: number;
  constructor(props: CreateEntityProps<ContractProps>) {
    super(props);
    this.props.status = this.props.status ?? ContractStatus.draft;
    this.generateIdentifier();
  }

  get id() {
    return this._id;
  }

  updateProps(partialProps: Partial<ContractProps>) {
    if (!this.isContractValid()) throw new Error('Contract not be updated');

    Object.assign(this.props, partialProps);
  }

  isContractValid(): boolean {
    const today = new Date();
    return this.props.startDate <= today && this.props.endDate >= today;
  }

  remainingDays(): number {
    const today = new Date();
    const timeDifference = this.props.endDate.getTime() - today.getTime();
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  }

  updateContractStatus(): void {
    if (new Date() > this.props.endDate) {
      this.props.status = ContractStatus.terminated;
    }
  }

  generateIdentifier(): void {
    if (!this.props.identifier) {
      this.props.identifier = `${this.props.contractedId}-${Date.now()}`;
    }
  }
}
