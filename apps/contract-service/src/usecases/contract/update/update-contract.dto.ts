import { Currencies } from '@domain/_shared/constants/currencies.enum';

export type UpdateContractInput = {
  id: number;
  name?: string;
  amount?: number;
  currency?: string;
  identifier?: string;
  description?: string;
  status?: string;
  endDate?: Date;
  startDate?: Date;
  reniewDate?: Date;
};

export type UpdateContractOutput = {
  id: number;
  name: string;
  amount: number;
  currency: Currencies;
  identifier: string;
  description: string;
  status: string;
  endDate: Date;
  startDate: Date;
  reniewDate: Date;
  createdAt: Date;
  updatedAt: Date;
};
