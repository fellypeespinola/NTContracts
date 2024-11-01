import { InputType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { ContractStatus } from '@prisma/client';

@InputType()
export class CreateContractInput {
  @Field()
  name: string;

  @Field(() => Int)
  amount: number;

  @Field()
  currency: string;

  @Field()
  description: string;

  @Field()
  status: ContractStatus;

  @Field(() => GraphQLISODateTime)
  endDate: Date;

  @Field(() => GraphQLISODateTime)
  startDate: Date;

  @Field(() => GraphQLISODateTime)
  reniewDate: Date;

  @Field(() => Int)
  contractorId: number;

  @Field(() => Int)
  contractedId: number;
}

@InputType()
export class UpdateContractInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  amount?: number;

  @Field({ nullable: true })
  currency?: string;

  @Field({ nullable: true })
  identifier?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  status?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  endDate?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  startDate?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  reniewDate?: Date;

  @Field(() => Int, { nullable: true })
  contractorId?: number;

  @Field(() => Int, { nullable: true })
  contractedId?: number;
}
