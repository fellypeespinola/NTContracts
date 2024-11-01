import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export default class ContractSchemaGQL {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  amount: number;

  @Field()
  currency: string;

  @Field()
  identifier: string;

  @Field()
  description: string;

  @Field()
  status: string;

  @Field(() => GraphQLISODateTime)
  endDate: Date;

  @Field(() => GraphQLISODateTime)
  startDate: Date;

  @Field(() => GraphQLISODateTime)
  reniewDate: Date;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
