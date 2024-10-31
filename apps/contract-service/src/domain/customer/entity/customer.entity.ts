import {
  BaseEntity,
  CreateEntityProps,
} from 'src/domain/_shared/entity/base.entity';

export interface CustomerProps {
  name: string;
  email: string;
  identity: string;
  address: string;
}

export class Customer extends BaseEntity<CustomerProps> {
  protected _id: number;
  constructor(props: CreateEntityProps<CustomerProps>) {
    super(props);
  }

  get id() {
    return this._id;
  }
}
