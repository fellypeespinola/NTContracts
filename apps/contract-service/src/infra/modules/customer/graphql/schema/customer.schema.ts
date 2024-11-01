import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CustomerProps } from '@domain/customer/entity/customer.entity';

@ObjectType()
export default class CustomerSchemaGQL implements CustomerProps {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  identity: string;

  @Field()
  address: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;

  @Field()
  deletedAt?: Date;
}
