export type FindCustomerInput = {
  id: number;
};

export type FindCustomerOutput = {
  id: number;
  name: string;
  email: string;
  identity: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
};
