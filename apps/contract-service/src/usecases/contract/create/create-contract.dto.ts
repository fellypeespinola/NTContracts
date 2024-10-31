export type CreateContractInput = {
  name: string;
  amount: number;
  description: string;
  contractorId: number;
  contractedId: number;
  currency: string;
  endDate: Date;
  startDate: Date;
  reniewDate: Date;
};

export type CreateContractOutput = {
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
