export interface CreateEntityProps<T> {
  id: number;
  props: T;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export abstract class BaseEntity<EntityProps> {
  protected abstract _id: number;
  private readonly _createdAt: Date;
  private _updatedAt: Date;
  private _deletedAt: Date;
  protected _props: EntityProps;

  constructor({
    id,
    props,
    createdAt,
    updatedAt,
    deletedAt,
  }: CreateEntityProps<EntityProps>) {
    this.setId(id);
    this._props = props;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt || new Date();
    this._deletedAt = deletedAt || null;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  get deletedAt() {
    return this._deletedAt;
  }

  setId(id: number) {
    this._id = id;
  }

  activate() {
    this._deletedAt = null;
  }

  deactivate() {
    this._deletedAt = new Date();
  }

  get props(): EntityProps {
    return this._props;
  }
}
