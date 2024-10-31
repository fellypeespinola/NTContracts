export type FindContractInput = {
  id: number;
};

export type FindContractOutput = {
  id: number;
  name: string;
  amount: number;
  status: string;
  identifier: string;
  description: string;
  currency: string;
  endDate: Date;
  startDate: Date;
  reniewDate: Date;
  createdAt: Date;
  updatedAt: Date;
};
